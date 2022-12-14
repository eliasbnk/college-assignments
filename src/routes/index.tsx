import React from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, PageNotFound } from 'pages';
import {
  CISW308Assignment1,
  CISW308Assignment2,
  CISW308Assignment3,
  CISW308Assignment4,
  CISW308Assignment5,
  CISW308HomePage
} from 'pages/cisw308';
import {
  CISW400Assignment1,
  CISW400Assignment2,
  CISW400Assignment3,
  CISW400Assignment4,
  CISW400Assignment5,
  CISW400Assignment6,
  CISW400Assignment7,
  CISW400Assignment8,
  CISW400Assignment9,
  CISW400HomePage
} from 'pages/cisw400';
import { CISC305Assignment6, CISC305HomePage } from 'pages/cisc305';
import { CISC323HomePage } from 'pages/cisc323';
import { CISS300HomePage } from 'pages/ciss300';
import { CISC310HomePage } from 'pages/cisc310';
import { CISW327HomePage } from 'pages/cisw327';
import { CISC324Chapter7, CISC324HomePage } from 'pages/cisc324';

const Routing: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/cisc323' element={<CISC323HomePage />} />
        <Route path='/cisc324' element={<CISC324HomePage />} />
        <Route path='/cisc324/chapter-7' element={<CISC324Chapter7 />} />
        <Route path='/cisc310' element={<CISC310HomePage />} />
        <Route path='/ciss300' element={<CISS300HomePage />} />
        <Route path='/cisc305' element={<CISC305HomePage />} />
        <Route path='/cisc305/assignment-6' element={<CISC305Assignment6 />} />
        <Route path='/cisw327' element={<CISW327HomePage />} />
        <Route path='/cisw308' element={<CISW308HomePage />} />
        <Route path='/cisw308/assignment-1' element={<CISW308Assignment1 />} />
        <Route path='/cisw308/assignment-2' element={<CISW308Assignment2 />} />
        <Route path='/cisw308/assignment-3' element={<CISW308Assignment3 />} />
        <Route path='/cisw308/assignment-4' element={<CISW308Assignment4 />} />
        <Route path='/cisw308/assignment-5' element={<CISW308Assignment5 />} />
        <Route path='/cisw400' element={<CISW400HomePage />} />
        <Route path='/cisw400/assignment-1' element={<CISW400Assignment1 />} />
        <Route path='/cisw400/assignment-2' element={<CISW400Assignment2 />} />
        <Route path='/cisw400/assignment-3' element={<CISW400Assignment3 />} />
        <Route path='/cisw400/assignment-4' element={<CISW400Assignment4 />} />
        <Route path='/cisw400/assignment-5' element={<CISW400Assignment5 />} />
        <Route path='/cisw400/assignment-6' element={<CISW400Assignment6 />} />
        <Route path='/cisw400/assignment-7' element={<CISW400Assignment7 />} />
        <Route path='/cisw400/assignment-8' element={<CISW400Assignment8 />} />
        <Route path='/cisw400/assignment-9' element={<CISW400Assignment9 />} />
      </Routes>
    </Router>
  );
};

export default Routing;
