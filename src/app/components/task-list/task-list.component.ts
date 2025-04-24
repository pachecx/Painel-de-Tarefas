import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { FormsModule } from '@angular/forms';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tarefas: Task[] = [];
  filtro: string = '';
  router: any;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.tarefas = this.taskService.getTarefas();
  }

  concluirTarefa(tarefa: Task) {
    tarefa.status = 'Concluída';
    this.taskService.atualizarTarefa(tarefa);
    this.carregarTarefas();
  }

  removerTarefa(id: number) {
    this.taskService.removerTarefa(id);
    this.carregarTarefas();
  }

  estaAtrasada(dataEntrega?: string): boolean {
    if (!dataEntrega) return false;
  
    const hoje = new Date();
    const dataHojeStr = hoje.toISOString().split('T')[0];           // ex: "2025-04-21"
    const dataEntregaStr = new Date(dataEntrega).toISOString().split('T')[0];
  
    return dataEntregaStr < dataHojeStr;
  }
  
  filtroStatus: 'Todas' | 'Pendente' | 'Concluída' = 'Todas';

  criterioOrdenacao: 'mais-recentes' | 'mais-antigas' = 'mais-recentes';

  get tarefasFiltradas(): Task[] {
    const filtradas = this.tarefas
      .filter((t) => t.titulo.toLowerCase().includes(this.filtro.toLowerCase()))
      .filter(
        (t) => this.filtroStatus === 'Todas' || t.status === this.filtroStatus
      );

    // Ordenação
    return filtradas.sort((a, b) => {
      const dataA = new Date(a.criadoEm).getTime();
      const dataB = new Date(b.criadoEm).getTime();
      return this.criterioOrdenacao === 'mais-recentes'
        ? dataB - dataA
        : dataA - dataB;
    });
  }

  get totalPendentes(): number {
    return this.tarefas.filter((t) => t.status === 'Pendente').length;
  }

  get totalConcluidas(): number {
    return this.tarefas.filter((t) => t.status === 'Concluída').length;
  }

  expandedIds: Set<number> = new Set();

  toggleSubtarefas(id: number) {
    if (this.expandedIds.has(id)) {
      this.expandedIds.delete(id);
    } else {
      this.expandedIds.add(id);
    }
  }

  isExpanded(id: number): boolean {
    return this.expandedIds.has(id);
  }

  atualizarSubtarefa(tarefa: Task, index: number) {
    tarefa.subtarefas[index].concluido = !tarefa.subtarefas[index].concluido;
    this.taskService.atualizarTarefa(tarefa);
    this.carregarTarefas();
  }

  reordenar(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.tarefas, event.previousIndex, event.currentIndex);
    this.taskService.reordenarTarefas(this.tarefas);
  }

  editarTarefa(id: number) {
    this.router.navigate(['/editar-tarefa', id]);
  }
}
