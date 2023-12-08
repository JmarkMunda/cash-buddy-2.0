import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import DashboardScreen from "../screens/DashboardScreen";
import HistoryScreen from "../screens/HistoryScreen";
import WalletScreen from "../screens/Wallet/WalletScreen";
import AccountSettingsScreen from "../screens/AccountSettingsScreen";
import HeaderButton from "../components/HeaderButton";
import shadows from "../utils/shadows";
import Container from "../components/Container";
import { Platform, StyleSheet, View } from "react-native";
import { useSettingsStore } from "../zustand/settings/store";
import AppStyles from "../utils/styles";
import spacings from "../utils/spacings";

type IconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { colors } = useTheme();
  const isBankView = useSettingsStore(({ isBankView }) => isBankView);

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
      name: "Account Settings",
      component: AccountSettingsScreen,
      icon: (props: IconProps) => <Entypo name="calculator" {...props} />,
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="Wallet"
      screenOptions={(props) => ({
        headerTransparent: true,
        headerRight: (btnProps) => (
          <View style={[AppStyles.flex_row, spacings.mx16, { gap: 16 }]}>
            <HeaderButton
              name="calculator-outline"
              size={32}
              onPress={() => props.navigation.navigate("Calculator")}
              {...btnProps}
            />
            <HeaderButton
              name="settings-outline"
              size={32}
              onPress={() => props.navigation.openDrawer()}
              {...btnProps}
            />
          </View>
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
          bottom: 0,
          margin: 24,
          height: Platform.OS === "android" ? 80 : 90,
          borderTopWidth: 0,
        },
        tabBarActiveBackgroundColor: colors.secondaryContainer,
        tabBarActiveTintColor: colors.background,
        tabBarInactiveTintColor: colors.onBackground,
        tabBarBackground: () => (
          <Container
            opacity={0.8}
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
