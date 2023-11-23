import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountSettingsScreen from "../screens/AccountSettingsScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import TransactionsScreen from "../screens/Transactions/TransactionsScreen";

const Stack = createNativeStackNavigator();

// Stack of all screens
const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabNavigator"
      screenOptions={{ animation: "default" }}>
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false, headerBackTitleVisible: false }}
      />
      <Stack.Screen name="Account Settings" component={AccountSettingsScreen} />
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
