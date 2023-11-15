import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import MainNavigator from "./MainNavigator";
import { useSettingsStore } from "../zustand/settings/store";
import { Toggle } from "@ui-kitten/components";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [isDarkMode, toggleDarkMode] = useSettingsStore((state) => [
    state.isDarkMode,
    state.toggleDarkMode,
  ]);

  function CustomDrawerContent(props: DrawerContentComponentProps) {
    const drawers = [{ label: "Account Settings", route: "Account Settings" }];

    return (
      <DrawerContentScrollView {...props}>
        <Toggle checked={isDarkMode} onChange={toggleDarkMode}>
          {`Dark Mode: ${isDarkMode}`}
        </Toggle>

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
