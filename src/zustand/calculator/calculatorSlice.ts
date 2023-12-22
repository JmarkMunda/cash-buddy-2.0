import { create, StateCreator } from "zustand";

type State = {
  total: number;
  expression: string;
  operator: string;
};

type Action = {
  handleTotal: (value: number) => void;
  handleExpression: (exp: string) => void;
  handleAC: () => void;
  handleClear: () => void;
  handleCE: () => void;
  handleOperator: (operator: string) => void;
  add: (num: number) => void;
  minus: (num: number) => void;
  multiply: (num: number) => void;
  divide: (num: number) => void;
};

type CalculatorSliceType = State & Action;

const initialState: State = {
  total: 0,
  expression: "",
  operator: "",
};

const createCalculatorSlice: StateCreator<CalculatorSliceType> = (set) => ({
  ...initialState,
  handleTotal: (value: number) => set({ total: value }),
  handleExpression: (exp) =>
    set((state) => ({ expression: state.expression + exp })),
  handleOperator: async (operator: string) =>
    await new Promise((resolve) => resolve(set(() => ({ operator })))),
  handleAC: () => set((state) => ({ total: 0, expression: "", operator: "" })),
  handleClear: () =>
    set((state) => ({ expression: state.expression.slice(0, -1) })),
  handleCE: () => set((state) => ({ expression: "" })),
  add: (num) => set((state) => ({ total: state.total + num })),
  minus: (num) => set((state) => ({ total: state.total - num })),
  multiply: (num) => set((state) => ({ total: state.total * num })),
  divide: (num) => set((state) => ({ total: state.total / num })),
});

export { CalculatorSliceType, createCalculatorSlice };
