export interface Tab {
  id: string;
  title: string;
}

interface Currency {
  id: string;
  label: string;
}

interface Category {
  backgroundColor: string;
  label: string;
}

export interface UserSpendData {
  category: Category;
  currency: Currency;
  date: Date;
  value: number;
}

export type PieCircleData = Array<[[string, number], { backgroundColor: string; label: string }]>;
