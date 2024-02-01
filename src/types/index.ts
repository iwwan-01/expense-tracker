export interface ITransaction {
  id: number;
  type: string;
  value: number;
  note: string;
}

export interface IState {
  transactions: ITransaction[];
}
