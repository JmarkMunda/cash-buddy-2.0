import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppTheme } from "../utils/theme";
import BottomTabNavigator from "./BottomTabNavigator";
import TransactionsScreen from "../screens/Transactions/TransactionsScreen";
import HeaderButton from "../components/HeaderButton";
import CalculatorScreen from "../screens/Calculator/CalculatorScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";

const Stack = createNativeStackNavigator();

// Stack of all screens
const MainNavigator = () => {
  const { colors } = useAppTheme();
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
      <Stack.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
