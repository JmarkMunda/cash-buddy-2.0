// import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { Platform } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme,
  configureFonts,
} from "react-native-paper";

export const fontConfig = {
  fontFamily: "Signika_400Regular",
};

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
  // ...DarkTheme,
  colors: {
    // ...DarkTheme.colors,
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

export const CustomLightTheme = {
  ...DefaultTheme,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    primary: "rgb(50, 107, 36)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(179, 243, 155)",
    onPrimaryContainer: "rgb(2, 33, 0)",
    secondary: "rgb(104, 71, 192)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(232, 221, 255)",
    onSecondaryContainer: "rgb(33, 0, 93)",
    tertiary: "rgb(121, 89, 0)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 223, 160)",
    onTertiaryContainer: "rgb(38, 26, 0)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(253, 253, 246)",
    onBackground: "rgb(26, 28, 24)",
    surface: "rgb(253, 253, 246)",
    onSurface: "rgb(26, 28, 24)",
    surfaceVariant: "rgb(223, 228, 215)",
    onSurfaceVariant: "rgb(67, 72, 63)",
    outline: "rgb(115, 121, 110)",
    outlineVariant: "rgb(195, 200, 188)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(47, 49, 45)",
    inverseOnSurface: "rgb(241, 241, 234)",
    inversePrimary: "rgb(152, 215, 130)",
    elevation: {
      level0: "transparent",
      level1: "rgb(243, 246, 236)",
      level2: "rgb(237, 241, 229)",
      level3: "rgb(231, 237, 223)",
      level4: "rgb(229, 236, 221)",
      level5: "rgb(225, 233, 217)",
    },
    surfaceDisabled: "rgba(26, 28, 24, 0.12)",
    onSurfaceDisabled: "rgba(26, 28, 24, 0.38)",
    backdrop: "rgba(44, 50, 41, 0.4)",
  },
};

export const CustomDarkTheme = {
  ...MD3DarkTheme,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    primary: "rgb(152, 215, 130)",
    onPrimary: "rgb(6, 57, 0)",
    primaryContainer: "rgb(25, 82, 12)",
    onPrimaryContainer: "rgb(179, 243, 155)",
    secondary: "rgb(206, 189, 255)",
    onSecondary: "rgb(57, 5, 144)",
    secondaryContainer: "rgb(80, 43, 167)",
    onSecondaryContainer: "rgb(232, 221, 255)",
    tertiary: "rgb(248, 189, 42)",
    onTertiary: "rgb(64, 45, 0)",
    tertiaryContainer: "rgb(92, 67, 0)",
    onTertiaryContainer: "rgb(255, 223, 160)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(26, 28, 24)",
    onBackground: "rgb(226, 227, 220)",
    surface: "rgb(26, 28, 24)",
    onSurface: "rgb(226, 227, 220)",
    surfaceVariant: "rgb(67, 72, 63)",
    onSurfaceVariant: "rgb(195, 200, 188)",
    outline: "rgb(141, 147, 135)",
    outlineVariant: "rgb(67, 72, 63)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(226, 227, 220)",
    inverseOnSurface: "rgb(47, 49, 45)",
    inversePrimary: "rgb(50, 107, 36)",
    elevation: {
      level0: "transparent",
      level1: "rgb(32, 37, 29)",
      level2: "rgb(36, 43, 33)",
      level3: "rgb(40, 49, 36)",
      level4: "rgb(41, 50, 37)",
      level5: "rgb(44, 54, 39)",
    },
    surfaceDisabled: "rgba(226, 227, 220, 0.12)",
    onSurfaceDisabled: "rgba(226, 227, 220, 0.38)",
    backdrop: "rgba(44, 50, 41, 0.4)",
  },
};

export type Theme = typeof MyLightTheme | typeof MyDarkTheme;
