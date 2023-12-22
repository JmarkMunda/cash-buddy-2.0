import * as yup from "yup";

export const cashInSchema = yup
  .object()
  .shape({
    tag: yup.string().required().nonNullable(),
    notes: yup.string().notRequired().max(20),
    amount: yup.string().required(),
  })
  .required();
