import { StateCreator } from "zustand";

type State = {
  cashBalance: number;
  loading?: boolean;
};

type Actions = {
  insertCash: (amount: number) => Promise<void>;
  takeOutCash: (amount: number) => Promise<void>;
  editCash: (amount: number) => Promise<void>;
};

type CashSliceType = State & Actions;

const initialState: State = {
  cashBalance: 0,
  loading: false,
};

const createCashSlice: StateCreator<CashSliceType> = (set) => ({
  ...initialState,
  insertCash: async (amount) => {
    set({ loading: true });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({
      cashBalance: state.cashBalance + amount,
      loading: false,
    }));
  },
  takeOutCash: async (amount) => {
    set({ loading: true });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({
      cashBalance: state.cashBalance - amount,
      loading: false,
    }));
  },
  editCash: async (amount) => {
    set({ loading: true });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({
      cashBalance: amount,
      loading: false,
    }));
  },
});

export { CashSliceType, createCashSlice };
