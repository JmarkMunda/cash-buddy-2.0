import React from "react";
import { useSettingsStore } from "../zustand/settings/store";
import { View } from "react-native";
import Text from "../components/Text";
import { Switch } from "react-native-paper";
import LinearContainer from "../components/LinearContainer";

const AccountSettingsScreen = () => {
  const [isDarkMode, toggleDarkMode] = useSettingsStore((state) => [
    state.isDarkMode,
    state.toggleDarkMode,
  ]);

  return (
    <LinearContainer>
      <Text>Account Settings</Text>

      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      <Text>{`Dark Mode: ${isDarkMode}`}</Text>
    </LinearContainer>
  );
};

export default AccountSettingsScreen;
