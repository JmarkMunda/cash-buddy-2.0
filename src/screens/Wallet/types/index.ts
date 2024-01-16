import { ValueType } from "react-native-dropdown-picker";

export type FormValues = {
  id: string;
  tag: string;
  notes?: string;
  amount: string;
  color: string;
  type: "incomes" | "expenses";
  date: Date;
};
