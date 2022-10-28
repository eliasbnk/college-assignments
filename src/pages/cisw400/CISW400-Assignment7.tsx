/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Button, Form, Header, Icon } from 'semantic-ui-react';
import {
  CISW400Assignment7AssignmentData,
  CISW400Assignment7AssignmentExtraCreditData,
  CISW400Assignment7ThemeOptions
} from 'contexts/data';
import { defaultTheme, fallTheme, springTheme, summerTheme, winterTheme } from 'utils/theme';
import { useCookies } from 'react-cookie';
import { Formik } from 'formik';
import FormField from 'components/FormField';
import { Assignment7InitialValues, Assignment7ValidationSchema } from 'utils/form';
import Submissions from 'components/Submissions';
import Assignment from 'components/Assignment';
import ExtraCredit from 'components/ExtraCredit';

const CISW400Assignment7: FC = () => {
  const [theme, setTheme] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [cookies, setCookie, getAll] = useCookies(['theme']);

  useEffect(() => {
    getAll('theme');
    if (!cookies.theme) {
      setCookie('theme', '', { path: '/cisw400/assignment-7' });
      setTheme('');
    }
    setTheme(cookies.theme);
  }, []);

  useEffect(() => {
    getAll('theme');
    setCookie('theme', theme, { path: '/cisw400/assignment-7' });
  }, [theme]);

  const handleClick = (value: string) => {
    setTheme(value);
  };
  const bgColor =
    {
      summer: summerTheme.body,
      spring: springTheme.body,
      winter: winterTheme.body,
      fall: fallTheme.body
    }[theme] || defaultTheme.body;

  const fntColor =
    {
      summer: summerTheme.fontColor,
      spring: springTheme.fontColor,
      winter: winterTheme.fontColor,
      fall: fallTheme.fontColor
    }[theme] || defaultTheme.fontColor;

  return (
    <>
      <Helmet
        style={[
          {
            cssText: `
            body {
                background-color: ${bgColor};
                color: ${fntColor};
            }
            .ui.form .field>label {
               color: ${fntColor};
            }
            #amount {
                color: ${theme && `white`}
            }
h1.ui.header{
  color: ${fntColor};
}
h2.ui.header{
  color: ${fntColor};
}
h3.ui.header{
  color: ${fntColor};
}
.ui.checkbox label{
  font-size: 1.2rem;
  color: black;
}
a{
  color: ${theme && `white`}
}
a:hover{
  color: ${theme && `black`}
}

            #theme-label{
              color: ${theme && fntColor};

            }
        `
          }
        ]}
      >
        <title>CISW 400 - Assignment 7</title>
      </Helmet>
      <Template>
        <Assignment assignment={CISW400Assignment7AssignmentData} />
        <ExtraCredit assignment={CISW400Assignment7AssignmentExtraCreditData} />
        <Submissions>
          <div>
            <Header as='h2' id='theme-label' style={{ textAlign: 'left' }}>
              Choose a Theme:
            </Header>

            {CISW400Assignment7ThemeOptions.map((option) => {
              return (
                <Button
                  inverted
                  key={option.id}
                  circular
                  icon={option.icon}
                  color={option.color}
                  onClick={() => handleClick(option.value)}
                />
              );
            })}
            <Button inverted circular icon='delete' color='red' onClick={() => handleClick('')} />
            <Header as='h3'>
              Theme set:{' '}
              {cookies.theme === 'winter'
                ? 'winter'
                : cookies.theme === 'fall'
                ? 'fall'
                : cookies.theme === 'spring'
                ? 'spring'
                : cookies.theme === 'summer'
                ? 'summer'
                : 'default'}
              &nbsp;
              <Icon
                name={
                  cookies.theme === 'winter'
                    ? 'snowflake'
                    : cookies.theme === 'fall'
                    ? 'rain'
                    : cookies.theme === 'spring'
                    ? 'leaf'
                    : cookies.theme === 'summer'
                    ? 'sun'
                    : 'adjust'
                }
              />
            </Header>
          </div>
          <br />
          <br />
          <Header as='h2' style={{ textAlign: 'left' }}>
            Mortgage Calculator
          </Header>
          <br />
          <div>
            <Formik
              initialValues={Assignment7InitialValues}
              onSubmit={({ loanAmount, termLength, interestRate }, actions) => {
                const total =
                  (loanAmount * (interestRate / 1200)) / (1 - Math.pow(1 + interestRate / 1200, termLength * 12 * -1));
                actions.setSubmitting(true);
                setMonthlyPayment(+total.toFixed(2));
                actions.setSubmitting(false);
              }}
              validationSchema={Assignment7ValidationSchema}
            >
              {({ handleSubmit, isSubmitting, isValid, dirty, handleReset, values }) => (
                <div>
                  <Form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                    <FormField name='loanAmount' label='Loan Amount' placeholder='Loan Amount' />
                    <Form.Group widths='equal'>
                      <FormField name='termLength' label='Loan Term (years)' placeholder='Loan Term' />
                      <FormField name='interestRate' label='Interest Rate' placeholder='Interest Rate' />
                    </Form.Group>
                    <Button
                      disabled={
                        values.interestRate === 0 ||
                        values.loanAmount === 0 ||
                        values.termLength === 0 ||
                        (dirty && !isValid) ||
                        isSubmitting
                      }
                      type='submit'
                    >
                      Calculate
                    </Button>
                    <Button
                      disabled={!dirty}
                      type='reset'
                      onClick={() => {
                        handleReset();
                        setMonthlyPayment(0);
                      }}
                    >
                      Clear
                    </Button>
                  </Form>
                </div>
              )}
            </Formik>
            <br />
            <Header as='h3'>
              Monthly Payment:<span id='amount'> $ {monthlyPayment}</span>
            </Header>
          </div>
        </Submissions>
      </Template>
    </>
  );
};

export default CISW400Assignment7;
