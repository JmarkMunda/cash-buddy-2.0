import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import MainNavigator from "./MainNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  function CustomDrawerContent(props: DrawerContentComponentProps) {
    const drawers = [{ label: "Account Settings", route: "Account Settings" }];

    return (
      <DrawerContentScrollView {...props}>
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
      }}>
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
