// import { Theme } from "./src/utils/theme";

// declare module "@react-navigation/native" {
//   export function useTheme(): Theme;
// }

export type chartDataType = {
  id?: string;
  value: number;
  label: string;
  color: string;
  gradientCenterColor: string;
  focused: boolean;
  text?: string;
};
