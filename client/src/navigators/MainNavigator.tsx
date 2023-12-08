import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountSettingsScreen from "../screens/AccountSettingsScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import TransactionsScreen from "../screens/Transactions/TransactionsScreen";
import { useSettingsStore } from "../zustand/settings/store";
import { useTheme } from "react-native-paper";
import HeaderButton from "../components/HeaderButton";
import CalculatorScreen from "../screens/Calculator/CalculatorScreen";

const Stack = createNativeStackNavigator();

// Stack of all screens
const MainNavigator = () => {
  const { colors } = useTheme();
  // const isBankView = useSettingsStore(({ isBankView }) => isBankView);
  // const headerBg = isBankView ? colors.primary : colors.tertiary;

  // TODO: Apply same header to all components

  return (
    <Stack.Navigator
      initialRouteName="BottomTabNavigator"
      screenOptions={(props) => ({
        headerTransparent: true,
        headerLeft: (btnProps) => (
          <HeaderButton
            name="ios-chevron-back"
            size={32}
            onPress={() => props.navigation.goBack()}
            containerStyle={{ marginRight: 16 }}
            {...btnProps}
          />
        ),
      })}>
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false, headerBackTitleVisible: false }}
      />
      <Stack.Screen name="Calculator" component={CalculatorScreen} />
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
