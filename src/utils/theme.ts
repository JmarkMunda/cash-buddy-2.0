import {
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme,
  configureFonts,
  useTheme,
} from "react-native-paper";

export const fontConfig = {
  fontFamily: "Signika_400Regular",
};

export const CustomLightTheme = {
  ...DefaultTheme,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    primary: "rgb(50, 107, 36)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(178, 244, 155)",
    onPrimaryContainer: "rgb(2, 33, 0)",
    secondary: "rgb(87, 77, 114)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(68, 54, 99)",
    onSecondaryContainer: "rgb(230, 225, 240)",
    tertiary: "rgb(168, 122, 29)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 221, 177)",
    onTertiaryContainer: "rgb(41, 24, 0)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(252, 253, 246)",
    onBackground: "rgb(26, 28, 24)",
    surface: "rgb(252, 253, 246)",
    onSurface: "rgb(26, 28, 24)",
    surfaceVariant: "rgb(223, 228, 215)",
    onSurfaceVariant: "rgb(67, 72, 63)",
    outline: "rgb(115, 121, 110)",
    outlineVariant: "rgb(195, 200, 188)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(47, 49, 45)",
    inverseOnSurface: "rgb(241, 241, 234)",
    inversePrimary: "rgb(151, 215, 130)",
    elevation: {
      level0: "transparent",
      level1: "rgb(242, 246, 236)",
      level2: "rgb(236, 241, 229)",
      level3: "rgb(230, 237, 223)",
      level4: "rgb(228, 236, 221)",
      level5: "rgb(224, 233, 217)",
    },
    surfaceDisabled: "rgba(26, 28, 24, 0.12)",
    onSurfaceDisabled: "rgba(26, 28, 24, 0.38)",
    backdrop: "rgba(44, 50, 41, 0.4)",
    text: "rgb(59, 61, 61)",
    onText: "rgb(255, 255, 255)",
    textContainer: "rgb(71, 84, 87)",
    onTextContainer: "rgb(26, 33, 34)",
  },
};

export const CustomDarkTheme = {
  ...MD3DarkTheme,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    primary: "rgb(151, 215, 130)",
    onPrimary: "rgb(5, 57, 0)",
    primaryContainer: "rgb(24, 82, 12)",
    onPrimaryContainer: "rgb(178, 244, 155)",
    secondary: "rgb(206, 189, 255)",
    onSecondary: "rgb(57, 5, 144)",
    secondaryContainer: "rgb(80, 44, 167)",
    onSecondaryContainer: "rgb(232, 221, 255)",
    tertiary: "rgb(124, 86, 25)",
    onTertiary: "rgb(68, 43, 0)",
    tertiaryContainer: "rgb(98, 64, 0)",
    onTertiaryContainer: "rgb(255, 221, 177)",
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
    text: "rgb(241, 241, 241)",
    onText: "rgb(50, 54, 54)",
    textContainer: "rgb(93, 100, 100)",
    onTextContainer: "rgb(243, 250, 252)",
  },
};

export type AppThemeType = typeof CustomLightTheme;

export const useAppTheme = () => useTheme<AppThemeType>();