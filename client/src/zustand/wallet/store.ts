import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CashSliceType, createCashSlice } from "./cashSlice";
import { IBankSlice, createBankSlice } from "./bankSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

type StoreType = CashSliceType & IBankSlice;

export const useWalletStore = create<StoreType>()(
  persist(
    (...a) => ({
      ...createCashSlice(...a),
      ...createBankSlice(...a),
    }),
    { name: "wallet", storage: createJSONStorage(() => AsyncStorage) }
  )
);
