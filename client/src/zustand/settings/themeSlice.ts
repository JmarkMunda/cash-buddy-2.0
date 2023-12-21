import { create, StateCreator } from "zustand";

interface IThemeSlice {
  isDarkMode: boolean;
  isBankView: boolean;
  toggleDarkMode: () => void;
  toggleBankView: () => void;
}

const createThemeSlice: StateCreator<IThemeSlice> = (set) => ({
  isDarkMode: false,
  isBankView: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  toggleBankView: () => set((state) => ({ isBankView: !state.isBankView })),
});

export { IThemeSlice, createThemeSlice };
