import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import DrawerNavigator from "./src/navigators/DrawerNavigator";
import { useSettingsStore } from "./src/zustand/store/settings";
import { MyDarkTheme, MyLightTheme } from "./src/utils/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const isDarkMode = useSettingsStore((state) => state.isDarkMode);

  return (
    <SafeAreaProvider>
      <ApplicationProvider {...eva} theme={!isDarkMode ? eva.light : eva.dark}>
        <NavigationContainer theme={!isDarkMode ? MyLightTheme : MyDarkTheme}>
          <DrawerNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
