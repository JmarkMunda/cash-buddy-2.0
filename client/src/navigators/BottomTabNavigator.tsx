import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import DashboardScreen from "../screens/DashboardScreen";
import HistoryScreen from "../screens/HistoryScreen";
import CalculatorScreen from "../screens/CalculatorScreen";
import WalletScreen from "../screens/Wallet/WalletScreen";
import HeaderButton from "../components/HeaderButton";
import shadows from "../utils/shadows";
import Container from "../components/Container";
import { Platform, StyleSheet } from "react-native";

type IconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { colors } = useTheme();

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
        headerTransparent: true,
        headerLeft: (btnProps) => (
          <HeaderButton
            name="ios-chevron-back"
            size={32}
            onPress={() => {}}
            containerStyle={{ marginLeft: 16 }}
            {...btnProps}
          />
        ),
        headerRight: (btnProps) => (
          <HeaderButton
            name="settings-outline"
            size={32}
            onPress={() => props.navigation.openDrawer()}
            containerStyle={{ marginRight: 16 }}
            {...btnProps}
          />
        ),
        tabBarItemStyle: {
          height: Platform.OS === "android" ? 80 : 90,
          borderRadius: 99,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          ...shadows.md,
          borderRadius: 99,
          position: "absolute",
          bottom: 10,
          margin: 24,
          height: Platform.OS === "android" ? 80 : 90,
          borderTopWidth: 0,
        },
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.background,
        tabBarInactiveTintColor: colors.onBackground,
        tabBarBackground: () => (
          <Container
            intensity={50}
            radius={99}
            style={StyleSheet.absoluteFill}
          />
        ),
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
