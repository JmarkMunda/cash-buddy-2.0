import { create } from "zustand";
import { IDarkModeSlice, createDarkModeSlice } from "./settingSlice";

export const useSettingsStore = create<IDarkModeSlice>()((...a) => ({
  ...createDarkModeSlice(...a),
}));
