import * as React from 'react';
import { ContextExpensesType, Expenses } from '../types/expenses';

export const TransactionsContext = React.createContext<ContextExpensesType | null>(null);

interface ProviderProps {
  children?: any
}

const TransactionsProvider: React.FC<ProviderProps> = ({children}) => {
  const [transactions, setTransactions] = React.useState<Expenses[]>();
  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
export default TransactionsProvider;