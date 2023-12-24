import React from "react";
import Text from "../../../components/Text";
import { View } from "react-native";
import { RadioButton, SegmentedButtons } from "react-native-paper";
import spacings from "../../../utils/spacings";
import AppStyles from "../../../utils/styles";
import { sortByItems } from "../../../utils/constants";

const SortByButtons = ({ sortByValue, setSortByValue }) => {
  return (
    <View style={spacings.my16}>
      <Text variant="labelLarge" style={spacings.mb8}>
        Sort By:
      </Text>
      {sortByItems.map((item) => (
        <View
          key={item.value}
          style={[AppStyles.flex_row, AppStyles.items_center]}>
          <RadioButton.Android
            value={item.value}
            status={item.value === sortByValue ? "checked" : "unchecked"}
            onPress={() => setSortByValue(item.value)}
          />
          <Text variant="labelLarge">{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default SortByButtons;
