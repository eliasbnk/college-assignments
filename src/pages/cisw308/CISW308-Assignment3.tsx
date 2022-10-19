import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import './styles.css';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';
import {
  CISW308Assignment3AssignmentData,
  CISW308Assignment3DayData,
  CISW308Assignment3Week0Data,
  CISW308Assignment3Week1Data,
  CISW308Assignment3Week2Data,
  CISW308Assignment3Week3Data,
  CISW308Assignment3Week4Data
} from 'contexts/data';

const CISW308Assignment3: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISW 308 - Assignment 3</title>
      </Helmet>
      <Template>
        <Assignment assignment={CISW308Assignment3AssignmentData} />
        <Submissions>
          <div className='wrapper'>
            <h2>September 2022</h2>
            <table cellSpacing={0} cellPadding={35} style={{ textAlign: 'center' }}>
              <thead>
                <tr>
                  {CISW308Assignment3DayData.map((a) => {
                    return <td key={a.id}>{a.name}</td>;
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {CISW308Assignment3Week0Data.map((a) => {
                    return <td key={a.id}>{a.name}</td>;
                  })}
                </tr>
                <tr>
                  {CISW308Assignment3Week1Data.map((a) => {
                    return <td key={a.id}>{a.name}</td>;
                  })}
                </tr>
                <tr>
                  {CISW308Assignment3Week2Data.map((a) => {
                    return <td key={a.id}>{a.name}</td>;
                  })}
                </tr>
                <tr>
                  {CISW308Assignment3Week3Data.map((a) => {
                    return (
                      <td style={a.name === '20' ? { backgroundColor: 'orange' } : {}} key={a.id}>
                        {a.name}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  {CISW308Assignment3Week4Data.map((a) => {
                    return <td key={a.id}>{a.name}</td>;
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </Submissions>
      </Template>
    </>
  );
};

export default CISW308Assignment3;
