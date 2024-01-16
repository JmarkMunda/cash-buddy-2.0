import * as yup from "yup";

export const walletSchema = yup
  .object()
  .shape({
    tag: yup.string().required().nonNullable(),
    notes: yup.string().notRequired().max(20),
    amount: yup.string().required(),
    color: yup.string().required(),
    type: yup.string().notRequired(),
    date: yup.date().notRequired(),
  })
  .required();
