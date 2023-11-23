import { create, StateCreator } from "zustand";

interface IDarkModeSlice {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const createDarkModeSlice: StateCreator<IDarkModeSlice> = (set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
});

export { IDarkModeSlice, createDarkModeSlice };
