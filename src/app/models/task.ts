export interface Subtask {
    titulo: string;
    concluido: boolean;
  }
  
  export interface Task {
    id: number;
    titulo: string;
    descricao: string;
    status: 'Pendente' | 'Concluída';
    dataEntrega?: string;
    subtarefas: Subtask[];
    criadoEm: string;
  }
  