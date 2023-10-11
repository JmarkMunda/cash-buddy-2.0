import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import HistoryScreen from "../screens/HistoryScreen";
import CalculatorScreen from "../screens/CalculatorScreen";
import WalletScreen from "../screens/WalletScreen";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

type IconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const tabs = [
    {
      name: "Wallet",
      component: WalletScreen,
      icon: (props: IconProps) => <Entypo name="wallet" {...props} />,
    },
    {
      name: "Dashboard",
      component: DashboardScreen,
      icon: (props: IconProps) => <Ionicons name="stats-chart" {...props} />,
    },
    {
      name: "History",
      component: HistoryScreen,
      icon: (props: IconProps) => <FontAwesome name="history" {...props} />,
    },
    {
      name: "Calculator",
      component: CalculatorScreen,
      icon: (props: IconProps) => <Entypo name="calculator" {...props} />,
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="Wallet"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: 8,
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
        },
      }}>
      {tabs.map((tab) => (
        <Tab.Screen
          name={tab.name}
          component={tab.component}
          options={{ tabBarIcon: tab.icon }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
