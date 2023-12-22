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

export const sortByItems = [
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Oldest",
    value: "oldest",
  },
  {
    label: "Amount: Low to High",
    value: "amountLow",
  },
  {
    label: "Amount: High to Low",
    value: "amountHigh",
  },
];

export const transactionTypeItems = [
  {
    value: "all",
    label: "All",
    showSelectedCheck: true,
    style: { borderRadius: 0 },
  },
  {
    value: "incomes",
    label: "Incomes",
    showSelectedCheck: true,
    style: { borderRadius: 0 },
  },

  {
    value: "expenses",
    label: "Expenses",
    showSelectedCheck: true,
    style: { borderRadius: 0 },
  },
];
