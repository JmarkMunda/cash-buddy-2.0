import React, { useState } from "react";
import Dropdown from "../../../components/Dropdown";
import { useController } from "react-hook-form";
import { View } from "react-native";

const ControlDropdown = ({
  items,
  value,
  setValue,
  name,
  control,
  ...props
}) => {
  const { field, fieldState } = useController({ name, control });

  return (
    <View style={{ marginVertical: 16, zIndex: 99 }}>
      <Dropdown
        value={value}
        setValue={setValue}
        onChangeValue={field.onChange}
        items={items}
        badgeDotColors={["red", "blue", "orange"]}
        {...(fieldState?.error?.message && { style: { borderColor: "red" } })}
        {...(fieldState?.error?.message && {
          dropDownContainerStyle: { borderColor: "red" },
        })}
        {...props}
      />
    </View>
  );
};

export default React.memo(ControlDropdown);
