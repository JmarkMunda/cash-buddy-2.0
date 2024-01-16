import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Text from "../../../components/Text";
import AppStyles from "../../../utils/styles";
import { useAppTheme } from "../../../utils/theme";
import { chartDataType } from "../../../../globals";
import Container from "../../../components/Container";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

interface ILegends {
  data: chartDataType[];
  handlePiePress: (item: chartDataType) => void;
}

// TODO: replace all useTheme declaration with useAppTheme

const Legends = ({ data, handlePiePress }: ILegends) => {
  const { colors } = useAppTheme();
  const btbHeight = useBottomTabBarHeight();
  const sortedData = data.slice().sort((a, b) => b.value - a.value);

  return (
    <Container
      opacity={0.5}
      radius={16}
      style={[styles.rootContainer, { marginBottom: btbHeight }]}>
      <ScrollView style={[styles.container]}>
        {sortedData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.item,
              { backgroundColor: item.focused ? item.color : "transparent" },
            ]}
            onPress={() => handlePiePress(item)}>
            <View
              style={[AppStyles.flex_row, AppStyles.items_center, { flex: 2 }]}>
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor: item.focused
                      ? colors.background
                      : item.color,
                  },
                ]}
              />
              <Text
                variant="titleMedium"
                color={item.focused ? colors.outline : colors.text}>
                {item.label}
              </Text>
            </View>
            <View style={[{ flex: 1, alignItems: "flex-end" }]}>
              <Text
                variant="titleMedium"
                color={item.focused ? colors.outline : colors.text}>
                {`${item.value}`}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
  container: {
    flex: 1,
    gap: 16,
  },
  item: {
    ...AppStyles.flex_row,
    ...AppStyles.just_between,
    padding: 8,
    marginVertical: 4,
    borderRadius: 16,
  },
  badge: {
    width: 16,
    height: 16,
    marginRight: 8,
    borderRadius: 99,
  },
});

export default Legends;
