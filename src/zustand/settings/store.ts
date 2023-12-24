import { create } from "zustand";
import { ISettingsSlice, createSettingsSlice } from "./settingSlice";
import { IThemeSlice, createThemeSlice } from "./themeSlice";

export const useSettingsStore = create<ISettingsSlice & IThemeSlice>()(
  (...a) => ({
    ...createSettingsSlice(...a),
    ...createThemeSlice(...a),
  })
);
