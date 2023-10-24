export interface Task {
      _id: string;
      title: string;
      description?: string;
      status: string;
      deadline: string;
      assignFrom: {
        name: string;
        email: string;
      };
      assignTo: {
        name: string;
        email: string;
      };
    }