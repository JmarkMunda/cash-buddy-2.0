import React from "react";
import { useSettingsStore } from "../zustand/settings/store";
import { View } from "react-native";
import Text from "../components/Text";
import { Switch } from "react-native-paper";

const AccountSettingsScreen = () => {
  const [isDarkMode, toggleDarkMode] = useSettingsStore((state) => [
    state.isDarkMode,
    state.toggleDarkMode,
  ]);

  return (
    <View>
      <Text>Account Settings</Text>

      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      <Text>{`Dark Mode: ${isDarkMode}`}</Text>
    </View>
  );
};

export default AccountSettingsScreen;
