import { StateCreator } from "zustand";

interface IBankSlice {
  bankBalance: 0;
  depositCash: () => void;
  withdrawCash: () => void;
}

const createBankSlice: StateCreator<IBankSlice> = (set) => ({
  bankBalance: 0,
  depositCash: () => set((state) => ({})),
  withdrawCash: () => set((state) => ({})),
});

export { IBankSlice, createBankSlice };
