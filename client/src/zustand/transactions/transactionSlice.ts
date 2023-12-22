import { StateCreator } from "zustand";
import { sortRecords } from "./utils";

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
  type?: "all" | "incomes" | "expenses";
  sortBy?: "newest" | "oldest" | "amountLow" | "amountHigh";
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
  filterByType: (type: FilterType["type"]) => void;
  sortBy: (type: FilterType["sortBy"]) => void;
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
  // ------------- CRUD -----------------
  ...initialState,
  insertRecord: (details) =>
    set((state) => ({
      records: [details, ...state.records],
      [details.type]: state[details.type] + +details.amount,
    })),
  deleteRecord: (details) =>
    set((state) => ({
      records: state.records.filter((record) => record.id !== details.id),
      [details.type]: state[details.type] - +details.amount,
    })),
  // -------------- FILTERS ---------------
  applyFilters: (filters: FilterType) => set({ filters }),
  filterByType: (type) =>
    set((state) => ({
      filteredRecords:
        type === "all"
          ? state.records
          : state.records.filter((record) => record.type === type),
    })),
  sortBy: (type: FilterType["sortBy"]) =>
    set((state) => ({
      filteredRecords: sortRecords(state.filteredRecords, type),
    })),
  filterByTags: (tags: string[]) =>
    set((state) => ({
      filteredRecords: state.filteredRecords.filter((record) =>
        tags.includes(record.tag)
      ),
    })),
  searchByNote: (text: string) =>
    set((state) => ({
      filteredRecords: state.records.filter((record) =>
        record.notes.includes(text)
      ),
    })),
});

export { TransactionSliceType, RecordType, FilterType, createTransactionSlice };
