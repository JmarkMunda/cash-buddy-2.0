import React from "react";
import { View } from "react-native";
import Text from "../../../components/Text";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const Form = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text>Welcome to UI Kitten 😻</Text>
      <Input placeholder="Enter title" />
      <Input placeholder="Enter description" />
      <Input placeholder="Enter amount" />
      <Button status="basic">Put money</Button>
    </View>
  );
};

export default Form;
