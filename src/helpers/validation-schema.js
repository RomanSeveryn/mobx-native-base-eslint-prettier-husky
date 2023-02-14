import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  terms: yup.boolean().required().isTrue(),
  password: yup.string().required(),
});
