import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  tarefa: Task = {
    id: 0,
    titulo: '',
    descricao: '',
    status: 'Pendente',
    dataEntrega: '',
    subtarefas: [{ titulo: '', concluido: false }],
    criadoEm: '',
  };

  modoEdicao = false;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService 
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const tarefaExistente = this.taskService.getTarefaPorId(id);
      if (tarefaExistente) {
        this.tarefa = { ...tarefaExistente };
        this.modoEdicao = true;
      }
    }
  }

  salvarTarefa() {
    if (!this.tarefa.titulo.trim()) {
      this.toastr.error('Preencha o título da tarefa.');
      return;
    }
  
    if (this.subtarefasInvalidas()) {
      this.toastr.warning('Adicione pelo menos uma subtarefa com título.');
      return;
    }
  
    if (this.modoEdicao) {
      this.taskService.atualizarTarefa(this.tarefa);
      this.toastr.success('Tarefa atualizada com sucesso!');
    } else {
      this.taskService.adicionarTarefa({
        ...this.tarefa,
        id: 0,
        criadoEm: ''
      });
      this.toastr.success('Tarefa cadastrada com sucesso!');
    }
  
    this.router.navigate(['/tarefas']);
  }

  subtarefasInvalidas(): boolean {
    return !this.tarefa.subtarefas.some((sub) => sub.titulo.trim() !== '');
  }

  adicionarSubtarefa() {
    this.tarefa.subtarefas.push({ titulo: '', concluido: false });
  }

  removerSubtarefa(index: number) {
    this.tarefa.subtarefas.splice(index, 1);
  }
}
