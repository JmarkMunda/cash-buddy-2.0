import React, { useState } from "react";
import { SegmentedButtons as RNSB } from "react-native-paper";

interface ISegmentedButtons {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

const SegmentedButtons = ({ currentTab, setCurrentTab }: ISegmentedButtons) => {
  return (
    <RNSB
      value={currentTab}
      onValueChange={setCurrentTab}
      buttons={[
        {
          value: "incomes",
          label: "Incomes",
        },
        { value: "expenses", label: "Expenses" },
      ]}
    />
  );
};

export default SegmentedButtons;
