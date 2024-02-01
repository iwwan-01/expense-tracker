import React, { createContext, useReducer } from 'react';
import { IState } from '../types';
import AppReducer from './AppReducer';

// Initial state
const initialState: IState = {
  transactions: [
    { id: 1, type: 'income', value: 500, note: 'Cash' },
    { id: 2, type: 'expense', value: 40, note: 'Book' },
    { id: 3, type: 'expense', value: 200, note: 'Camera' },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
