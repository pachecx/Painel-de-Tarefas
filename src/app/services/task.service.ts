import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tarefas: Task[] = [];

  constructor() {}

  getTarefas(): Task[] {
    return [...this.tarefas]; 
  }

  adicionarTarefa(tarefa: Task) {
    tarefa.id = Date.now();
    tarefa.criadoEm = new Date().toISOString();
    this.tarefas.push(tarefa);
  }

  atualizarTarefa(tarefa: Task) {
    const index = this.tarefas.findIndex((t) => t.id === tarefa.id);
    if (index !== -1) {
      this.tarefas[index] = tarefa;
    }
  }

  removerTarefa(id: number) {
    this.tarefas = this.tarefas.filter((t) => t.id !== id);
  }

  reordenarTarefas(novaLista: Task[]) {
    this.tarefas = [...novaLista];
  }

  getTarefaPorId(id: number): Task | undefined {
    return this.tarefas.find((t) => t.id === id);
  }
}
