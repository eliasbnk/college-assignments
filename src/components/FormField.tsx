import React from 'react';
import type { FC } from 'react';
import { Field, useField } from 'formik';
import type { FieldAttributes } from 'formik';
import { Form } from 'semantic-ui-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormField: FC<FieldAttributes<any>> = ({ ...props }) => {
  const [field, meta] = useField(props);

  if (field.name === 'state') {
    field.value = field.value.toUpperCase();
  }

  const errorText = meta.error && meta.touched ? meta.error : null;
  return (
    <Field
      {...(field.name === 'email' ? { autoFocus: true } : { autoFocus: false })}
      autoComplete={props.autoComplete}
      label={props.label}
      placeholder={props.placeholder}
      {...(field.name === 'address2' ? { required: false } : { required: true })}
      validate
      type='input'
      as={Form.Input}
      {...field}
      error={errorText}
    />
  );
};

export default FormField;
