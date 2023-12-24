import { StateCreator } from "zustand";

type State = {
  cashBalance: number;
  loading?: boolean;
};

type Actions = {
  insertCash: (amount: number) => void;
  takeOutCash: (amount: number) => void;
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
});

export { CashSliceType, createCashSlice };
