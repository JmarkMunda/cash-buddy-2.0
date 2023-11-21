import { create } from "zustand";
import { CashSliceType, createCashSlice } from "./cashSlice";
import { IBankSlice, createBankSlice } from "./bankSlice";
import {
  TransactionSliceType,
  createTransactionSlice,
} from "./transactionSlice";

type StoreType = CashSliceType & IBankSlice & TransactionSliceType;

export const useWalletStore = create<StoreType>()((...a) => ({
  ...createCashSlice(...a),
  ...createBankSlice(...a),
  ...createTransactionSlice(...a),
}));
