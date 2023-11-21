import { StateCreator } from "zustand";

type RecordType = {
  type: "cash-in" | "cash-out";
  tag: string;
  notes?: string;
  amount: string;
  date: Date;
};

type State = {
  records: RecordType[];
};

type Actions = {
  insertRecord: (details: RecordType) => void;
  deleteRecord: () => void;
};

type TransactionSliceType = State & Actions;

const initialState: State = {
  records: [],
};

const createTransactionSlice: StateCreator<TransactionSliceType> = (set) => ({
  ...initialState,
  insertRecord: (details) =>
    set((state) => ({ records: [...state.records, details] })),
  deleteRecord: () => set((state) => ({})),
});

export { TransactionSliceType, RecordType, createTransactionSlice };
