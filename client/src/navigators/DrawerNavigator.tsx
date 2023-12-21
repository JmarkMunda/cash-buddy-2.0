import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import MainNavigator from "./MainNavigator";
import { useSettingsStore } from "../zustand/settings/store";
import { Switch } from "react-native-paper";
import Text from "../components/Text";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import AppStyles from "../utils/styles";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [isDarkMode, toggleDarkMode] = useSettingsStore((state) => [
    state.isDarkMode,
    state.toggleDarkMode,
  ]);

  function CustomDrawerContent(props: DrawerContentComponentProps) {
    const drawers = [{ label: "Account Settings", route: "Account Settings" }];

    return (
      <DrawerContentScrollView style={{ padding: 16 }} {...props}>
        <View
          style={[
            AppStyles.flex_row,
            AppStyles.items_center,
            { justifyContent: "flex-end", gap: 8 },
          ]}>
          {!isDarkMode ? (
            <Entypo name="light-up" size={24} color="black" />
          ) : (
            <Ionicons name="ios-moon" size={24} color="white" />
          )}
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>

        {drawers.map((drawer) => (
          <DrawerItem
            key={drawer.label}
            label={drawer.label}
            onPress={() => props.navigation.navigate(drawer.route)}
          />
        ))}
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerType: "back",
      }}>
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
