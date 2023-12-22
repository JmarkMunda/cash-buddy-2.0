import React from "react";
import { SegmentedButtons as RNSB } from "react-native-paper";
import { transactionTypeItems } from "../../../utils/constants";

const SegmentedButtons = ({ value, setValue }) => {
  return (
    <RNSB
      value={value}
      onValueChange={setValue}
      buttons={transactionTypeItems}
      style={{ borderEndEndRadius: 8 }}
    />
  );
};

export default SegmentedButtons;
