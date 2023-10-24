import { Task } from './Task';

export interface ApiResponse {
  status: string;
  body?: {
    user?: {
      name: string;
      email: string;
      password: string;
      dateOfBirth?: string;
      gender?: string;
      phone?: string;
    };
    tasks?: Task[];
    message?: string;
    updatedUser?: {
      name: string;
      email: string;
      password: string;
      dateOfBirth?: string;
      gender?: string;
      phone?: string;
    };
    task?: Task;
    note: string;
  };
  message?: string;
}
