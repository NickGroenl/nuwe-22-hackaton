import { SetStateAction } from "react";

export interface Transactions {
    _id: number;
    date: Date;
    value: number;
    from: string;
}
export type ContextTransactionsType = {
  transactions: Transactions[];
  setTransactions: React.Dispatch<SetStateAction<Transactions[]>>;
};