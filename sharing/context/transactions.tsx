import * as React from 'react';
import { TodoContextType, ITodo } from '../types/transactions';

export const TransactionsContext = React.createContext<TodoContextType | null>(null);

interface ProviderProps {
  children?: any
}

const TransactionsProvider: React.FC<ProviderProps> = ({children}) => {
  const [transactions, setTransactions] = React.useState<ITodo[]>();
  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
export default TransactionsProvider;