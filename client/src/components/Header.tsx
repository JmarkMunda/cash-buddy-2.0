import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Header</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    minHeight: 40,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Header;
