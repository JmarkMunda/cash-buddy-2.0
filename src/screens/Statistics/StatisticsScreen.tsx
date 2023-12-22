import React, { useEffect, useState } from "react";
import { View, Dimensions, StyleSheet, ScrollView } from "react-native";
import { useTransactionsStore } from "../../zustand/transactions/store";
import { chartDataType } from "../../../globals";
import LinearContainer from "../../components/LinearContainer";
import Legends from "./components/Legends";
import AppStyles from "../../utils/styles";
import SegmentedButtons from "./components/SegmentedButtons";
import PieChart from "./components/PieChart";
import Empty from "../../components/Empty";
import { minus_wallet } from "../../../assets/images/assets";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const StatisticsScreen = () => {
  const records = useTransactionsStore(({ records }) => records);

  const [chartData, setChartData] = useState([]);
  const [currentTab, setCurrentTab] = useState("incomes");

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
        color: item.color,
        gradientCenterColor: "rgba(235, 234, 232, 0.829)",
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
        <Empty
          source={minus_wallet}
          title="No data to be displayed"
          description="This is a sample description"
        />
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
