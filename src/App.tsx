import React from 'react';
import type { FC } from 'react';
import Helmet from 'react-helmet';
import Routing from 'routes';

const App: FC = () => {
  return (
    <>
      <Helmet>
        <style>{`#root {
  display: flex;
  flex-direction: column;
  height: 100%;
} body {height: 100%; margin: 0;
padding: 0;
background-color: lightgray; box-sizing: border-box;
  max-height: 100vh; }`}</style>
        <title>Home</title>
      </Helmet>

      <Routing />
    </>
  );
};

export default App;
