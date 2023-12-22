import { FilterType, RecordType } from "./transactionSlice";

export const sortRecords = (
  records: RecordType[],
  type: FilterType["sortBy"]
) => {
  switch (type) {
    case "newest":
      return [...records].sort(
        (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
      );
    case "oldest":
      return [...records].sort(
        (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
      );
    case "amountLow":
      return [...records].sort((a, b) => +a.amount - +b.amount);
    case "amountHigh":
      return [...records].sort((a, b) => +b.amount - +a.amount);
    default:
      return [...records].sort((a, b) => b[type] - a[type]);
  }
};
