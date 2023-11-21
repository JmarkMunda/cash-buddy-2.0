import { StateCreator } from "zustand";

interface IBankSlice {
  bankBalance: number;
  depositCash: () => void;
  withdrawCash: () => void;
}

const initialState = {
  bankBalance: 0,
};

const createBankSlice: StateCreator<IBankSlice> = (set) => ({
  ...initialState,
  depositCash: () => set((state) => ({})),
  withdrawCash: () => set((state) => ({})),
});

export { IBankSlice, createBankSlice };
