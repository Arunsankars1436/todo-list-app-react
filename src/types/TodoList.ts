

export interface STasks {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
  }
  
  export interface Tasks {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
    subtask?: STasks[];
  }

  export interface ApiTodo {
    total: number,
    skip: number,
    limit: number,
    todos: Tasks[]
  }
  