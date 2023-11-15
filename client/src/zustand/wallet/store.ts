import { create } from "zustand";
import { ICashSlice, createCashSlice } from "./cashSlice";
import { IBankSlice, createBankSlice } from "./bankSlice";

export const useBoundStore = create<ICashSlice & IBankSlice>()((...a) => ({
  ...createCashSlice(...a),
  ...createBankSlice(...a),
}));
