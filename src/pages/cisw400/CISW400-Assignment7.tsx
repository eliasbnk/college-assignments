/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Button, Form, Header } from 'semantic-ui-react';
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
    if (!cookies.theme) return;
    setTheme(cookies.theme);
  }, [cookies.theme]);

  const handleClick = async (value: string) => {
    await setCookie('theme', value, { path: '/cisw400/assignment-7' });
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
                color: ${!theme ? `black` : `white`}
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
              color: ${!theme ? `black` : fntColor};

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
              {({ handleSubmit, isSubmitting, isValid, dirty, handleReset, validateForm }) => (
                <div>
                  <Form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                    <FormField name='loanAmount' label='Loan Amount' placeholder='Loan Amount' />
                    <Form.Group widths='equal'>
                      <FormField name='termLength' label='Loan Term (years)' placeholder='Loan Term' />
                      <FormField name='interestRate' label='Interest Rate' placeholder='Interest Rate' />
                    </Form.Group>
                    <Button disabled={(dirty && !isValid) || isSubmitting} type='submit'>
                      Calculate
                    </Button>
                    <Button
                      onClick={() => {
                        handleReset();
                        validateForm(false);
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
