import { Dispatch, SetStateAction, createContext } from 'react';

const auth: {
  whoiam: {
    isAuthenticated: boolean;
  };
  setWhoiam: Dispatch<SetStateAction<{ isAuthenticated: boolean }>>;
} = {
  whoiam: {
    isAuthenticated: true,
  },
  setWhoiam: () => {},
};

export const authContext = createContext(auth);
