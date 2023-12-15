import React, { useEffect, useState } from "react";
import { View, Dimensions, StyleSheet, ScrollView } from "react-native";
import { useTransactionsStore } from "../../zustand/transactions/store";
import { chartDataType } from "../../../globals";
import LinearContainer from "../../components/LinearContainer";
import Legends from "./components/Legends";
import AppStyles from "../../utils/styles";
import Text from "../../components/Text";
import SegmentedButtons from "./components/SegmentedButtons";
import PieChart from "./components/PieChart";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const StatisticsScreen = () => {
  const records = useTransactionsStore(({ records }) => records);

  const [chartData, setChartData] = useState([]);
  const [currentTab, setCurrentTab] = useState("expenses");

  useEffect(() => {
    const computeData = () => {
      let statsData = [];
      if (currentTab === "all") {
        statsData = records;
      } else {
        statsData = records.filter((record) => record.type === currentTab);
      }

      const data = statsData.map((item) => ({
        id: item.id,
        value: +item.amount,
        label: item.tag,
        color: "rgba(255, 195, 0, 0.5)",
        gradientCenterColor: "rgba(243, 219, 141, 0.829)",
        focused: false,
      }));

      const total = data.reduce((prev, acc) => prev + acc.value, 0);
      const dataWithPercentage = data.map((item) => ({
        ...item,
        text: Math.round((item.value / total) * 100) + "%",
      }));

      setChartData(dataWithPercentage);
    };

    computeData();
  }, [records, currentTab]);

  const handlePiePress = (item: chartDataType) => {
    const newData = chartData.map((data) => {
      if (data.id === item.id) {
        return { ...data, focused: !data.focused };
      }
      return { ...data, focused: false };
    });
    setChartData(newData);
  };

  return (
    <LinearContainer>
      <SegmentedButtons currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {!chartData.length ? (
        <View style={AppStyles.items_center}>
          <Text variant="titleLarge">No data to be displayed</Text>
        </View>
      ) : (
        <>
          <View style={[AppStyles.items_center]}>
            <PieChart
              data={chartData}
              currentTab={currentTab}
              handlePiePress={handlePiePress}
            />
          </View>
          <Legends data={chartData} handlePiePress={handlePiePress} />
        </>
      )}
    </LinearContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
});

export default StatisticsScreen;
