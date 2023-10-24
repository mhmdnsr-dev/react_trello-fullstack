import { Dispatch, SetStateAction, createContext } from 'react';
import { User } from '../interfaces/User';

const auth: {
  whoiam: {
    isAuthenticated: boolean;
    user: User;
  };
  setWhoiam: Dispatch<SetStateAction<{ isAuthenticated: boolean; user: User }>>;
} = {
  whoiam: {
    isAuthenticated: true,
    user: {
      name: '',
      email: '',
    },
  },
  setWhoiam: () => {},
};

export const authContext = createContext(auth);
