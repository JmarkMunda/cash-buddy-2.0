import React, { SetStateAction, useState } from "react";
import DropDownPicker, { ValueType } from "react-native-dropdown-picker";
import { useTheme } from "react-native-paper";

interface IDropdown {
  items: { label: string; value: string }[];
  value: ValueType | ValueType[];
  setValue: () => void;
  onChangeValue?: (value: ValueType | ValueType[]) => void | null;
}

// TODO: Insert types

const Dropdown = (props: IDropdown) => {
  const { dark } = useTheme();

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(props.items);

  return (
    <DropDownPicker
      open={open}
      value={props.value}
      items={items}
      setOpen={setOpen}
      setValue={props.setValue}
      onChangeValue={props.onChangeValue}
      setItems={setItems}
      theme={dark ? "DARK" : "LIGHT"}
      {...props}
    />
  );
};

export default Dropdown;
