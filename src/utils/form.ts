import * as yup from 'yup';

interface Assignment5FormValues {
  email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

interface Assignment7FormValues {
  loanAmount: number;
  termLength: number;
  interestRate: number;
}

export const Assignment5ValidationSchema = yup.object({
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

export const Assignment5InitialValues: Assignment5FormValues = {
  email: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: ''
};

export const Assignment7ValidationSchema = yup.object({
  loanAmount: yup
    .number()
    .typeError('you must specify a number')
    .min(1, 'number must be greater than 0')
    .required('loan amount is required.'),
  termLength: yup
    .number()
    .typeError('you must specify a number')
    .min(1, 'number must be greater than 0')
    .required('term length is required.'),
  interestRate: yup
    .number()
    .typeError('you must specify a number')
    .min(1, 'number must be greater than 0')
    .required('interest rate is required')
});

export const Assignment7InitialValues: Assignment7FormValues = {
  loanAmount: 0,
  termLength: 0,
  interestRate: 0
};
