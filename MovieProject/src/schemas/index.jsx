import * as yup from "yup"

export const basicSchema = yup.object().shape({
    movieName: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, 'Only letters are allowed.')
    .required("Name is required."),
    movieType: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, 'Only letters are allowed.')
    .required("Type is required."),
    movieYear: yup
    .number()
    .min(1800,"Year must be greater than or equal to 1800.")
    .max(2023,"Year must be less than or equal to 2023.")
    .integer('Only integers are allowed.')
    .required("Year is required."),
    moviePoint: yup
    .number()
    .integer('Only integers are allowed')
    .min(0,"Point must be greater than or equal to 0.")
    .max(10,"Point must be less than or equal to 10.")
    .required("Point is required."),
})
