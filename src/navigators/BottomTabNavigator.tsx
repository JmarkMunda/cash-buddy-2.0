import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import HistoryScreen from "../screens/HistoryScreen";
import WalletScreen from "../screens/Wallet/WalletScreen";
import HeaderButton from "../components/HeaderButton";
import shadows from "../utils/shadows";
import Container from "../components/Container";
import { Platform, StyleSheet, View } from "react-native";
import { useSettingsStore } from "../zustand/settings/store";
import spacings from "../utils/spacings";
import CalendarScreen from "../screens/Calendar/CalendarScreen";
import StatisticsScreen from "../screens/Statistics/StatisticsScreen";
import { useAppTheme } from "../utils/theme";
import CalculatorScreen from "../screens/Calculator/CalculatorScreen";

type IconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { colors } = useAppTheme();
  const isBankView = useSettingsStore(({ isBankView }) => isBankView);

  const tabs = [
    {
      name: "Wallet",
      component: WalletScreen,
      icon: (props: IconProps) => <Entypo name="wallet" {...props} />,
    },
    {
      name: "Statistics",
      component: StatisticsScreen,
      icon: (props: IconProps) => <Ionicons name="stats-chart" {...props} />,
    },
    {
      name: "Calendar",
      component: CalendarScreen,
      icon: (props: IconProps) => <Entypo name="calendar" {...props} />,
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
        // headerLeft: (btnProps) => (
        //   <HeaderButton
        //     name="calculator-outline"
        //     size={32}
        //     onPress={() => props.navigation.navigate("Calculator")}
        //     containerStyle={spacings.mx16}
        //     {...btnProps}
        //   />
        // ),
        headerRight: (btnProps) => (
          <HeaderButton
            name="settings-outline"
            size={32}
            onPress={() => props.navigation.openDrawer()}
            containerStyle={spacings.mx16}
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
          // backgroundColor: "transparent",
          borderRadius: 99,
          position: "absolute",
          bottom: 0,
          margin: 24,
          height: Platform.OS === "android" ? 80 : 90,
          borderTopWidth: 0,
        },
        tabBarActiveBackgroundColor: colors.secondaryContainer,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: colors.text,
        tabBarBackground: () => (
          <Container
            opacity={0.5}
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
