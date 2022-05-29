import { SetStateAction } from "react";

export interface Expenses {
    _id: number;
    expenses: Date;
    pv: number;
    from: string;
}
export type ContextExpensesType = {
  transactions: Expenses[];
  setTransactions: React.Dispatch<SetStateAction<Expenses[]>>;
};