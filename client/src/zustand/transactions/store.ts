import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  TransactionSliceType,
  createTransactionSlice,
} from "./transactionSlice";

type StoreType = TransactionSliceType;

export const useTransactionsStore = create<StoreType>()(
  persist((...a) => ({ ...createTransactionSlice(...a) }), {
    name: "transactions",
    storage: createJSONStorage(() => AsyncStorage),
  })
);
