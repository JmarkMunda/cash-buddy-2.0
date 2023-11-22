import "react-native-gesture-handler";
import React, { useCallback, useEffect, useState } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme as RNDarkTheme,
} from "@react-navigation/native";
import { PaperProvider, adaptNavigationTheme } from "react-native-paper";

import DrawerNavigator from "./src/navigators/DrawerNavigator";
import { useSettingsStore } from "./src/zustand/settings/store";
import { CustomDarkTheme, CustomLightTheme } from "./src/utils/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useFonts, Signika_400Regular } from "@expo-google-fonts/signika";
import { SheetProvider } from "react-native-actions-sheet";
import "./src/utils/sheets";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
});
const { DarkTheme } = adaptNavigationTheme({
  reactNavigationDark: RNDarkTheme,
});

export default function App() {
  const isDarkMode = useSettingsStore((state) => state.isDarkMode);
  const [appIsReady, setAppIsReady] = useState(false);
  useFonts({ Signika_400Regular });

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.log(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <SafeAreaProvider>
      <StatusBar translucent />
      <SheetProvider>
        <PaperProvider
        //  theme={!isDarkMode ? CustomLightTheme : CustomDarkTheme}
        >
          <NavigationContainer
            onReady={onLayoutRootView}
            // theme={!isDarkMode ? LightTheme : DarkTheme}
          >
            <DrawerNavigator />
          </NavigationContainer>
        </PaperProvider>
      </SheetProvider>
    </SafeAreaProvider>
  );
}
