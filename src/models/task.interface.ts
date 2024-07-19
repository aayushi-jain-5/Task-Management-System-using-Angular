export interface Task {
    id: number;
    title: string;
    history?: string[];
    description: string;
    dueDate: Date;
    priority: 'low' | 'medium' | 'high';
    status: 'new'|'to-do' | 'in-progress' | 'completed';
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    
  }