import spacing from "./spacings";
import { StyleSheet } from "react-native";
import shadows from "./shadows";

const AppStyles = StyleSheet.create({
  container: {
    ...spacing.p16,
  },
  flex: {
    flex: 1,
  },
  flex_row: {
    flexDirection: "row",
  },
  flex_center: {
    alignItems: "center",
    justifyContent: "center",
  },
  just_center: {
    justifyContent: "center",
  },
  just_between: {
    justifyContent: "space-between",
  },
  just_even: {
    justifyContent: "space-evenly",
  },
  just_around: {
    justifyContent: "space-around",
  },
  items_center: {
    alignItems: "center",
  },
});
export default AppStyles;
