import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import DashboardScreen from "./src/screens/DashboardScreen";
import DrawerNavigator from "./src/navigators/DrawerNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
}

