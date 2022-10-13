import React from 'react';
import type { FC } from 'react';
import Template from 'layout/Template';
import { Helmet } from 'react-helmet';

const PageNotFound: FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <Template>
        <h1>404 Error</h1>
        <h1>Page Not Found</h1>
      </Template>
    </>
  );
};

export default PageNotFound;
