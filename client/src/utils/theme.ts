import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const MyLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(185, 238, 164)",
    secondary: "rgb(246, 248, 122)",
    tertiary: "rgb(204, 248, 187)",
    background: "rgb(201, 201, 201)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    description: "rgb(173, 173, 173)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "rgb(26, 70, 53)",
    secondary: "rgb(246, 248, 122)",
    tertiary: "rgb(3, 20, 7)",
    background: "rgb(43, 43, 43)",
    card: "rgb(24, 24, 24)",
    text: "rgb(255, 255, 255)",
    description: "rgb(173, 173, 173)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export type Theme = typeof MyLightTheme | typeof MyDarkTheme;
