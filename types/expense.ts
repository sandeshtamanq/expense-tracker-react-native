export interface IExpense {
  id: number;
  amount: number;
  created_at: Date;
  description: string;
  title: string;
  category: Category;
}

export enum Category {
  Income = "Income",
  Expense = "Expense",
}
