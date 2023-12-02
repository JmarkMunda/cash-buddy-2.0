import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountSettingsScreen from "../screens/AccountSettingsScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import TransactionsScreen from "../screens/Transactions/TransactionsScreen";
import { useSettingsStore } from "../zustand/settings/store";
import { useTheme } from "react-native-paper";
import HeaderButton from "../components/HeaderButton";

const Stack = createNativeStackNavigator();

// Stack of all screens
const MainNavigator = () => {
  const { colors } = useTheme();
  // const isBankView = useSettingsStore(({ isBankView }) => isBankView);
  // const headerBg = isBankView ? colors.primary : colors.tertiary;

  return (
    <Stack.Navigator
      initialRouteName="BottomTabNavigator"
      screenOptions={{
        headerTintColor: colors.background,
        headerStyle: { backgroundColor: colors.secondaryContainer },
      }}>
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
