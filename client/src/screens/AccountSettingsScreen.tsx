import React, { useState } from "react";
import { Layout, Text, Toggle } from "@ui-kitten/components";
import { useSettingsStore } from "../zustand/settings/store";

const AccountSettingsScreen = () => {
  const [isDarkMode, toggleDarkMode] = useSettingsStore((state) => [
    state.isDarkMode,
    state.toggleDarkMode,
  ]);

  return (
    <Layout>
      <Text>Account Settings</Text>

      <Toggle checked={isDarkMode} onChange={toggleDarkMode}>
        {`Dark Mode: ${isDarkMode}`}
      </Toggle>
    </Layout>
  );
};

export default AccountSettingsScreen;
