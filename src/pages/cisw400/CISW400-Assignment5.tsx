/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Formik } from 'formik';
import { Button, Form } from 'semantic-ui-react';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';
import { CISW400Assignment5AssignmentData } from 'contexts/data';
import { Assignment5InitialValues, Assignment5ValidationSchema } from 'utils/form';
import FormField from '../../components/FormField';

const CISW400Assignment5: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISW 400 - Assignment 5</title>
      </Helmet>
      <Template>
        <Assignment assignment={CISW400Assignment5AssignmentData} />
        <Submissions>
          <Formik
            initialValues={Assignment5InitialValues}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              alert(`
              Email: ${values.email} \n
              Address: ${values.address1} ${values.address2}, ${values.city}, ${values.state} ${values.zip} \n
              `);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            validationSchema={Assignment5ValidationSchema}
          >
            {({ handleSubmit, isSubmitting, isValid, dirty }) => (
              <div>
                <Form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                  <FormField name='email' autoComplete='email' label='Email' placeholder='Email' />
                  <FormField
                    name='address1'
                    autoComplete='address-line1'
                    label='Street Address 1'
                    placeholder='Address'
                  />
                  <FormField
                    name='address2'
                    autoComplete='address-line2'
                    label='Street Address 2'
                    placeholder='Address'
                  />
                  <Form.Group unstackable widths='equal'>
                    <FormField name='city' autoComplete='address-level2' label='City' placeholder='City' />
                    <FormField name='state' autoComplete='address-level1' label='State' placeholder='State' />
                    <FormField name='zip' autoComplete='postal-code' label='Zip/postal code' placeholder='Zip' />
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
