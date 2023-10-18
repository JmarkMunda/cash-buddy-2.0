import { create, StateCreator } from "zustand";

interface DarkModeSlice {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const createDarkModeSlice: StateCreator<DarkModeSlice> = (set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
});

export const useSettingsStore = create<DarkModeSlice>()((...a) => ({
  ...createDarkModeSlice(...a),
}));
