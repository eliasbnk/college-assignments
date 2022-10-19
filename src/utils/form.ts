import * as yup from 'yup';

interface MyFormValues {
  email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

export const validationSchema = yup.object({
  email: yup.string().email('please enter a valid e-mail address.').required('e-mail is required.'),
  address1: yup.string().required('address is required.'),
  address2: yup.string(),
  city: yup
    .string()
    .matches(/^[a-zA-Z]+$/, 'city can only contian letters.')
    .required('city is required.')
    .max(17),
  state: yup
    .string()
    .matches(/^[a-zA-Z]+$/, 'state can only contian letters.')
    .required('state is required.')
    .min(2, 'state must be exactly 2 letter long.')
    .max(2, 'state must be exactly 2 letters long.'),
  zip: yup
    .string()
    .matches(/^[0-9]+$/, 'zip code can only contian digits.')
    .required('zip code is required.')
    .min(5, 'zip code must be exactly 5 digits.')
    .max(5, 'zip code must be exactly 5 digits.')
});

export const initialValues: MyFormValues = {
  email: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: ''
};
