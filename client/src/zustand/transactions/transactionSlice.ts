import { StateCreator } from "zustand";

type RecordType = {
  id: string;
  type: "incomes" | "expenses";
  tag: string;
  notes?: string;
  amount: string;
  date: Date;
  color: string;
};

type FilterType = {
  tags?: string[];
  searchText?: string;
};

type State = {
  records: RecordType[];
  incomes: number;
  expenses: number;
  filteredRecords: RecordType[];
  filters?: FilterType;
};

type Actions = {
  insertRecord: (details: RecordType) => void;
  deleteRecord: (details: RecordType) => void;
  applyFilters: (filters: FilterType | null) => void;
  filterByTags: (tags: string[]) => void;
  searchByNote: (text: string) => void;
};

type TransactionSliceType = State & Actions;

const initialState: State = {
  records: [],
  incomes: 0,
  expenses: 0,
  filteredRecords: [],
  filters: null,
};

const createTransactionSlice: StateCreator<TransactionSliceType> = (set) => ({
  ...initialState,
  insertRecord: (details) =>
    set((state) => ({
      records: [...state.records, details],
      [details.type]: state[details.type] + +details.amount,
    })),
  deleteRecord: (details) =>
    set((state) => ({
      records: state.records.filter((record) => record.id !== details.id),
      [details.type]: state[details.type] - +details.amount,
    })),
  applyFilters: (filters: FilterType) => set({ filters }),
  filterByTags: (tags: string[]) =>
    set((state) => {
      const recordsCopy = [...state.records];
      const filteredData = recordsCopy.filter((record) => {
        return tags.some((tag) => tag === record.tag);
      });
      return { filteredRecords: filteredData };
    }),
  searchByNote: (text: string) =>
    set((state) => ({
      filteredRecords: state.records.filter((record) =>
        record.notes.includes(text)
      ),
    })),
});

export { TransactionSliceType, RecordType, FilterType, createTransactionSlice };
