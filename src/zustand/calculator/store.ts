import { create } from "zustand";
import { CalculatorSliceType, createCalculatorSlice } from "./calculatorSlice";

export const useCalculatorStore = create<CalculatorSliceType>()((...a) => ({
  ...createCalculatorSlice(...a),
}));
