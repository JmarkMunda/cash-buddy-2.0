import { chartDataType } from "../../globals";

export const defaultTags = [
  {
    label: "💸 Funds",
    value: "💸 Funds",
  },
  {
    label: "🍕 Food",
    value: "🍕 Food",
  },
  {
    label: "🎸 Hobbies",
    value: "🎸 Hobbies",
  },
  {
    label: "🚖 Transportation",
    value: "🚖 Transportation",
  },
];

export const pieChartData: chartDataType[] = [
  {
    value: 800,
    label: "Food",
    color: "rgba(255, 195, 0, 0.5)",
    gradientCenterColor: "rgba(243, 219, 141, 0.829)",
    focused: false,
  },
  {
    value: 120,
    label: "Transportation",
    color: "rgba(94, 180, 239,0.5)",
    gradientCenterColor: "rgb(171, 200, 219)",
    focused: false,
  },
  {
    value: 2000,
    label: "Funds",
    color: "rgba(78, 190, 86, 0.5)",
    gradientCenterColor: "rgb(146, 230, 152)",
    focused: false,
  },
  {
    value: 70,
    label: "Hobbies",
    color: "rgba(239, 94, 238, 0.5)",
    gradientCenterColor: "rgb(250, 171, 250)",
    focused: false,
  },
  {
    value: 300,
    label: "School",
    color: "rgba(239, 94, 94, 0.5)",
    gradientCenterColor: "rgb(250, 193, 171)",
    focused: false,
  },
];

// BAR CHART STATIC DATA
const barData = [
  {
    value: 900,
    label: "M",
    spacing: 2,
    labelWidth: 15,
    labelTextStyle: { color: "gray" },
    frontColor: "#17d57c",
  },
  { value: 250, frontColor: "#ED6665" },
  {
    value: 50,
    label: "T",
    spacing: 2,
    labelWidth: 15,
    labelTextStyle: { color: "gray" },
    frontColor: "#17d57c",
  },
  { value: 40, frontColor: "#ED6665" },
  {
    value: 75,
    label: "W",
    spacing: 2,
    labelWidth: 15,
    labelTextStyle: { color: "gray" },
    frontColor: "#17d57c",
  },
  { value: 25, frontColor: "#ED6665" },
  {
    value: 15,
    label: "T",
    spacing: 2,
    labelWidth: 15,
    labelTextStyle: { color: "gray" },
    frontColor: "#17d57c",
  },
  { value: 20, frontColor: "#ED6665" },
  {
    value: 60,
    label: "F",
    spacing: 2,
    labelWidth: 15,
    labelTextStyle: { color: "gray" },
    frontColor: "#17d57c",
  },
  { value: 40, frontColor: "#ED6665" },
  {
    value: 65,
    label: "S",
    spacing: 2,
    labelWidth: 15,
    labelTextStyle: { color: "gray" },
    frontColor: "#17d57c",
  },
  { value: 30, frontColor: "#ED6665" },
  {
    value: 65,
    label: "S",
    spacing: 2,
    labelWidth: 15,
    labelTextStyle: { color: "gray" },
    frontColor: "#17d57c",
  },
  { value: 22, frontColor: "#ED6665" },
];
