import { Theme } from "./src/utils/theme";

declare module "@react-navigation/native" {
  export function useTheme(): Theme;
}
