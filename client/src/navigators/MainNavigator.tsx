import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/DashboardScreen";
import AccountSettingsScreen from "../screens/AccountSettingsScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

// Stack of all screens
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false, headerBackTitleVisible: false }}
      />
      <Stack.Screen name="Account Settings" component={AccountSettingsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
