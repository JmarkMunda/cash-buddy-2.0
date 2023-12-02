import { StateCreator } from "zustand";

type RecordType = {
  type: "cash-in" | "cash-out";
  tag: string;
  notes?: string;
  amount: string;
  date: Date;
};

type FilterType = {
  tags?: string[];
  searchText?: string;
};

type State = {
  records: RecordType[];
  filteredRecords: RecordType[];
  filters?: FilterType;
};

type Actions = {
  insertRecord: (details: RecordType) => void;
  deleteRecord: () => void;
  applyFilters: (filters: FilterType | null) => void;
  filterByTags: (tags: string[]) => void;
  searchByNote: (text: string) => void;
};

type TransactionSliceType = State & Actions;

const initialState: State = {
  records: [],
  filteredRecords: [],
  filters: null,
};

const createTransactionSlice: StateCreator<TransactionSliceType> = (set) => ({
  ...initialState,
  insertRecord: (details) =>
    set((state) => ({ records: [...state.records, details] })),
  deleteRecord: () => set((state) => ({ records: [] })),
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
