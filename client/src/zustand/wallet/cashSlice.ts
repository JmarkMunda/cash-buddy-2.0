import { StateCreator } from "zustand";

interface ICashSlice {
  cashBalance: 0;
  insertCash: () => void;
  takeOutCash: () => void;
}

const createCashSlice: StateCreator<ICashSlice> = (set) => ({
  cashBalance: 0,
  insertCash: () => set((state) => ({})),
  takeOutCash: () => set((state) => ({})),
});

export { ICashSlice, createCashSlice };
