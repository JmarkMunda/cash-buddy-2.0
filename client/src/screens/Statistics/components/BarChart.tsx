import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Dimensions } from "react-native";
import { BarChart as RNBC } from "react-native-gifted-charts";
import Text from "../../../components/Text";
import { useTransactionsStore } from "../../../zustand/transactions/store";
import formatDate from "../../../utils/formatDate";
import moment from "moment";
import e from "express";

const WIDTH = Dimensions.get("screen").width;

const BarChart = () => {
  const [records, incomes, expenses] = useTransactionsStore(
    ({ records, incomes, expenses }) => [records, incomes, expenses]
  );

  const dummyData = [
    {
      label: "M",
      day: "Monday",
      value: 10,
      // spacing: 8,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "",
    },
    {
      label: "T",
      day: "Tuesday",
      value: 0,
      // spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "",
    },
    {
      label: "W",
      day: "Wednesday",
      value: 10,
      // spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "",
    },
    {
      label: "T",
      day: "Thursday",
      value: 10,
      // spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "",
    },
    {
      label: "F",
      day: "Friday",
      value: 10,
      // spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "",
    },
    {
      label: "S",
      day: "Saturday",
      value: 10,
      // spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "",
    },
    {
      label: "S",
      day: "Sunday",
      value: 10,
      // spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "",
    },
  ];

  const [recordPerWeek, setRecordPerWeek] = useState(dummyData);

  const isDateWithinThisWeek = (date: Date) => {
    const date7DaysAgo = moment().subtract(7, "d");
    const dateTo = moment(date);
    return dateTo > date7DaysAgo;
  };

  const getDataPerWeek = () => {
    const data = records.filter((record) => isDateWithinThisWeek(record.date));

    let copiedRecord = [...recordPerWeek];

    data.forEach((item) => {
      // Sample Output: Monday
      const formatToDay = formatDate(item.date, "dddd");
      // Returns { day: "Monday", total: 0 }
      const recordFound = copiedRecord.find(
        (record) => record.day === formatToDay
      );
      // Directly modify total by adding the item amount
      recordFound.value += Number(item.amount);
      recordFound.frontColor = item.type === "incomes" ? "#17d57c" : "#ED6665";
    });

    setRecordPerWeek(copiedRecord);
  };

  useLayoutEffect(() => {
    getDataPerWeek();
  }, []);

  const renderTitle = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 16,
          }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: "#17d57c",
                marginRight: 8,
              }}
            />
            <Text
              style={{
                width: 60,
                height: 16,
              }}>
              Incomes
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: "#ED6665",
                marginRight: 8,
              }}
            />
            <Text
              style={{
                width: 60,
                height: 16,
              }}>
              Expenses
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        // backgroundColor: "#333340",
        borderRadius: 10,
      }}>
      {renderTitle()}
      <RNBC
        isAnimated
        barWidth={14}
        width={WIDTH}
        spacing={Math.floor(WIDTH / (recordPerWeek.length + 4))}
        noOfSections={4}
        barBorderRadius={4}
        frontColor="lightgray"
        data={recordPerWeek}
        initialSpacing={0}
        yAxisThickness={0}
        xAxisThickness={0}
        rulesLength={WIDTH / 1.2}
      />
    </View>
  );
};

export default BarChart;
