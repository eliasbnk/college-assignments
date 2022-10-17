/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Field, Formik } from 'formik';
import { Button, Form } from 'semantic-ui-react';
import * as yup from 'yup';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';

const assignment = [
  {
    completed: true,
    name: 'a registration form which prompts the user for their City, State, Zip Code, and Email address.'
  },
  {
    completed: true,
    name: 'validation scripts to verify proper zip code, state, and email address input.'
  },
  {
    completed: true,
    name: 'autofocus for the first form field when the page loads.'
  }
];

interface MyFormValues {
  email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

const validationSchema = yup.object({
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

const CISW400Assignment5: FC = () => {
  const initialValues: MyFormValues = {
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  };
  return (
    <>
      <Helmet>
        <title>CISW 400 - Assignment 5</title>
      </Helmet>
      <Template>
        <Assignment assignment={assignment} />
        <Submissions>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              alert(`
              Email: ${values.email} \n
              Address: ${values.address1} ${values.address2 !== '' ? values.address2 : ''}, ${values.city}, ${
                values.state
              } ${values.zip}
              `);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, isSubmitting, errors, touched, isValid, dirty, values }) => (
              <div>
                <Form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                  <Field
                    autoComplete='email'
                    autoFocus
                    validate
                    as={Form.Input}
                    type='input'
                    error={errors.email && touched.email ? errors.email : null}
                    name='email'
                    required
                    label='Email'
                    placeholder='Email'
                  />
                  <Field
                    autoComplete='address-line1'
                    validate
                    as={Form.Input}
                    type='input'
                    name='address1'
                    error={errors.address1 && touched.address1 ? errors.address1 : null}
                    required
                    label='Street Address 1'
                    placeholder='Address'
                  />
                  <Field
                    autoComplete='address-line2'
                    validate
                    erroe={errors.address2 && touched.address2 ? errors.address2 : null}
                    as={Form.Input}
                    type='input'
                    name='address2'
                    label='Street Address 2'
                    placeholder='Address'
                  />

                  <Form.Group unstackable widths='equal'>
                    <Field
                      autoComplete='address-level2'
                      validate
                      error={errors.city && touched.city ? errors.city : null}
                      as={Form.Input}
                      type='input'
                      name='city'
                      required
                      label='City'
                      placeholder='City'
                    />
                    <Field
                      value={values.state.toUpperCase()}
                      autoComplete='address-level1'
                      validate
                      error={errors.state && touched.state ? errors.state : null}
                      as={Form.Input}
                      type='input'
                      name='state'
                      required
                      label='State'
                      placeholder='State'
                    />
                    <Field
                      autoComplete='postal-code'
                      validate
                      error={errors.zip && touched.zip ? errors.zip : null}
                      as={Form.Input}
                      type='input'
                      name='zip'
                      required
                      label='Zip/postal code'
                      placeholder='Zip'
                    />
                  </Form.Group>

                  <Button disabled={(dirty && !isValid) || isSubmitting} type='submit'>
                    Submit
                  </Button>
                </Form>
              </div>
            )}
          </Formik>
        </Submissions>
      </Template>
    </>
  );
};

export default CISW400Assignment5;
