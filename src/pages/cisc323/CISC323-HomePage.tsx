import React from 'react';
import type { FC } from 'react';
import Helmet from 'react-helmet';
import Template from 'layout/Template';
import { calcGrade } from 'utils/grade-calc';
import LabAssignment from '../../components/LabAssignment';

const assignment1 = [
  {
    completed: true,
    name: 'Do the following Hands-on Project exercises: 1.3 - 1.17 with the exception of 1.13 and 1.14.'
  },
  {
    completed: true,
    name: 'Take screenshots of the screen output for the following exercises: 1.7.1, 1.11.4, 1.16.2, 1.17.5.'
  },
  {
    completed: true,
    name: 'Once you have completed the exercises take a screenshot of the screen output for the history command.'
  }
];
const lab1 = {
  urlToFile: 'https://drive.google.com/uc?export=download&id=1TWyWLsdkvCXJ_0MHBm7YVZze5AkAuYyk',
  labName: 'Lab 1',
  gradeReceived: `${calcGrade(50, 50)}`
};
const assignment2 = [
  {
    completed: true,
    name: 'Do the following Hands-on Project exercises: 2.1 - 2.12 with the exception of 2.2.'
  },
  {
    completed: true,
    name: 'Take screenshots of the screen output for the following exercises: 2.5.1, 2.7.4, 2.8.2, and 2.11.3.'
  },
  {
    completed: true,
    name: 'Once you have completed the exercises take a screenshot of the screen output for the history command.'
  }
];
const lab2 = {
  urlToFile: 'https://drive.google.com/uc?export=download&id=1Scuag1Lx4nHSaGpQHbTn74AqVCh9-z7K',
  labName: 'Lab 2',
  gradeReceived: `${calcGrade(50, 50)}`
};
const assignment3 = [
  {
    completed: true,
    name: 'Do the following Hands-on Project exercises: 3.1 - 3.14.'
  },
  {
    completed: true,
    name: 'Take screenshots of the screen output for the following exercises: 3.5.15, 3.9.3, 3.10.2, and 3.14.1.'
  },
  {
    completed: true,
    name: 'Once you have completed the exercises take a screenshot of the screen output for the history command.'
  }
];
const lab3 = {
  urlToFile: 'https://drive.google.com/uc?export=download&id=1sazoa_HS8DuGgRgk9ulsmVDLImiW9wx3',
  labName: 'Lab 3',
  gradeReceived: `${calcGrade(50, 50)}`
};
const assignment4 = [
  {
    completed: true,
    name: 'Do the following Hands-on Project exercises: 4.1 - 4.18.'
  },
  {
    completed: true,
    name: 'Take screenshots of the screen output for the following exercises: 4.4.5, 4.8.7,  4.10.9, and 4.11.3.'
  },
  {
    completed: true,
    name: 'Once you have completed the exercises take a screenshot of the screen output for the history command.'
  }
];
const lab4 = {
  urlToFile: 'https://drive.google.com/uc?export=download&id=1TfnGSMNoKj98MSTa7phNso60rP8n7Grx',
  labName: 'Lab 4',
  gradeReceived: `${calcGrade(50, 50)}`
};
const assignment5 = [
  {
    completed: true,
    name: 'Do the following Hands-on Project exercises: 5.1 - 5.20.'
  },
  {
    completed: true,
    name: 'Take screenshots of the screen output for the following exercises: 5.9.7, 5.11.2, 5.14.1, and 5.19.7'
  },
  {
    completed: true,
    name: 'Once you have completed the exercises take a screenshot of the screen output for the history command.'
  }
];
const lab5 = {
  urlToFile: 'https://drive.google.com/uc?export=download&id=1gw-D8izyfCzZl_XSJyno0aonFSddVyXT',
  labName: 'Lab 5',
  gradeReceived: `${calcGrade(50, 50)}`
};

const assignment6 = [
  {
    completed: true,
    name: 'Do the following Hands-on Project exercises: 6.1 - 6.14.'
  },
  {
    completed: true,
    name: 'Take screenshots of the screen output for the following exercises: 6.4.12,  6.7.8,  6.9.15, and 6.13.6.'
  },
  {
    completed: true,
    name: 'Once you have completed the exercises take a screenshot of the screen output for the history command.'
  }
];
const lab6 = {
  urlToFile: 'https://drive.google.com/uc?export=download&id=1F2HW95Yob-3DtKjWaHRPdZmi-vBdgQCS',
  labName: 'Lab 6',
  gradeReceived: `${calcGrade(50, 50)}`
};
const assignment7 = [
  {
    completed: true,
    name: 'Do the following Hands-on Project exercises: 6.15 - 6.20.'
  },
  {
    completed: true,
    name: 'Take screenshots of the screen output for the following exercises: 6.15.3, 6.16.7, 6.19.3, and 6.20.5.'
  },
  {
    completed: true,
    name: 'Once you have completed the exercises take a screenshot of the screen output for the history command.'
  }
];
const lab7 = {
  urlToFile: 'https://drive.google.com/uc?export=download&id=1_XV63Amgk15YIkpDtgUhbGHQAHaCxemL',
  labName: 'Lab 7 - Final Project',
  gradeReceived: `${calcGrade(100, 100)}`
};

const CISC323HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISC 323 - Homepage</title>
      </Helmet>
      <Template>
        <LabAssignment assignment={assignment1} lab={lab1} number={1} />
        <LabAssignment assignment={assignment2} lab={lab2} number={2} />
        <LabAssignment assignment={assignment3} lab={lab3} number={3} />
        <LabAssignment assignment={assignment4} lab={lab4} number={4} />
        <LabAssignment assignment={assignment5} lab={lab5} number={5} />
        <LabAssignment assignment={assignment6} lab={lab6} number={6} />
        <LabAssignment assignment={assignment7} lab={lab7} number={7} />
      </Template>
    </>
  );
};

export default CISC323HomePage;
