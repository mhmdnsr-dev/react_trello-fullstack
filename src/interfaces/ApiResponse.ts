import { Task } from './Task';
import { User } from './User';

export interface ApiResponse {
  status: string;
  body?: {
    user?: User;
    tasks?: Task[];
    message?: string;
    updatedUser?: User;
    task?: Task;
    note: string;
  };
  message?: string;
}
