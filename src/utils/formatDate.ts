import moment from "moment";

const formatDate = (date: Date, format: string) => {
  const formattedDate = moment(date).format(format);
  return formattedDate;
};

export default formatDate;
