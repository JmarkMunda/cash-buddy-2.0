import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import HistoryScreen from "../screens/HistoryScreen";
import CalculatorScreen from "../screens/CalculatorScreen";
import WalletScreen from "../screens/Wallet/WalletScreen";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import HeaderButton from "../components/HeaderButton";

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
      screenOptions={(props) => ({
        headerLeftContainerStyle: { paddingLeft: 16 },
        headerRightContainerStyle: { paddingRight: 16 },
        headerTransparent: true,
        headerLeft: (btnProps) => (
          <HeaderButton
            name="ios-chevron-back"
            size={32}
            onPress={() => {}}
            {...btnProps}
          />
        ),
        headerRight: (btnProps) => (
          <HeaderButton
            name="settings-outline"
            size={32}
            onPress={() => props.navigation.openDrawer()}
            {...btnProps}
          />
        ),
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          paddingVertical: 8,
          margin: 16,
          borderRadius: 16,
          // borderTopRightRadius: 24,
          // borderTopLeftRadius: 24,
        },
      })}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{ tabBarIcon: tab.icon }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
