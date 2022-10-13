import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import './styles.css';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';

const assignment = [
  { completed: true, name: 'auto-centered 1-month calendar.' },
  { completed: true, name: 'month heading above calendar.' },
  {
    completed: true,
    name: 'atleast 5 media queries (for each breakpoint change the calendar width, text-size, and background color ).'
  }
];

const CISW308Assignment3: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISW 308 - Assignment 3</title>
      </Helmet>
      <Template>
        <Assignment assignment={assignment} />
        <Submissions>
          <div className='wrapper'>
            <h2>September 2022</h2>
            <table cellSpacing={0} cellPadding={35} style={{ textAlign: 'center' }}>
              <thead>
                <tr>
                  <td>S</td>

                  <td>M</td>

                  <td>T</td>

                  <td>W</td>

                  <td>T</td>

                  <td>F</td>

                  <td>S</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>01</td>
                  <td>02</td>
                  <td>03</td>
                </tr>

                <tr>
                  <td>04</td>
                  <td>05</td>
                  <td>06</td>
                  <td>07</td>
                  <td>08</td>
                  <td>09</td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                </tr>

                <tr>
                  <td>18</td>
                  <td>19</td>
                  <td style={{ backgroundColor: 'orange' }}>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                </tr>

                <tr>
                  <td>25</td>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td></td>
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
