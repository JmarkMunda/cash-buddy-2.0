import React from "react";
import { PieChart as RNPieChart } from "react-native-gifted-charts";
import { chartDataType } from "../../../../globals";
import { View } from "react-native";
import AppStyles from "../../../utils/styles";
import Text from "../../../components/Text";

interface IPieChart {
  data: chartDataType[];
  currentTab: string;
  handlePiePress: (item: chartDataType) => void;
}

const PieChart = ({ data, currentTab, handlePiePress }: IPieChart) => {
  return (
    <RNPieChart
      data={data}
      donut
      showGradient
      focusOnPress
      showText
      textColor="white"
      textSize={14}
      textBackgroundRadius={25}
      fontWeight="bold"
      strokeColor="white"
      strokeWidth={2}
      onPress={handlePiePress}
      centerLabelComponent={() => (
        <View style={AppStyles.flex_center}>
          <Text variant="labelLarge">{data.length.toString()}</Text>
          <Text variant="labelLarge">
            {currentTab[0].toUpperCase() + currentTab.slice(1)}
          </Text>
        </View>
      )}
    />
  );
};

export default PieChart;
