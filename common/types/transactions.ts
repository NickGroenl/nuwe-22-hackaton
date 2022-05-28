import { SetStateAction } from "react";

export interface ITodo {
    id: number;
    title: string;
    description: string;
    status: boolean;
}
export type TodoContextType = {
  transactions: ITodo[];
  setTransactions: React.Dispatch<SetStateAction<ITodo[]>>;
};