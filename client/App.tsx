import "react-native-gesture-handler";
import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import DrawerNavigator from "./src/navigators/DrawerNavigator";
import { useSettingsStore } from "./src/zustand/settings/store";
import { MyDarkTheme, MyLightTheme } from "./src/utils/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { SheetProvider } from "react-native-actions-sheet";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const isDarkMode = useSettingsStore((state) => state.isDarkMode);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo.font);

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
      <ApplicationProvider {...eva} theme={!isDarkMode ? eva.light : eva.dark}>
        <SheetProvider>
          <NavigationContainer
            theme={!isDarkMode ? MyLightTheme : MyDarkTheme}
            onReady={onLayoutRootView}>
            <DrawerNavigator />
          </NavigationContainer>
        </SheetProvider>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
