import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';

const CISP301Lab1: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISP 301 - Lab 1</title>
      </Helmet>
      <Template>
        <div style={{ margin: '0 auto' }}>
          <pre
            style={{
              color: '#2d3b45',
              display: 'block',
              padding: '9px',
              margin: '0 0 12px',
              lineHeight: '1.2',
              wordBreak: 'break-all',
              wordWrap: 'break-word',
              whiteSpace: 'pre-wrap',
              borderRadius: '6px',
              backgroundColor: '#f5f5f5',
              border: '1px solid #c7cdd1',
              maxWidth: '90vw'
            }}
          >
            <code>
              {`// Program	  : Lab #1 - "Hello, World!" in C++
// Author	  : Ilya Babenko - w1793796
// Course	  : CISP 301/Krofchok (Spring 2023)
// Section	  : T/TH @ 1:00pm
// Description: This program displays a greeting to the user.

#include <iostream>
void hello();
int main()
{
	hello();
}

void hello()
{
	std::cout << "Hello, Ilya!" << std::endl;
	std::cout << "This is my first CISP 301 program!" << std::endl;
}`}
            </code>
          </pre>
        </div>
      </Template>
    </>
  );
};

export default CISP301Lab1;
