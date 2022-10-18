import React from 'react';
import type { FC } from 'react';
import { Header, List, Icon } from 'semantic-ui-react';
import CheckboxLabel from './CheckboxLabel';
import { v4 as uuidv4 } from 'uuid';

const LabAssignment: FC<{
  number: number;
  assignment: {
    completed: boolean;
    name: string;
  }[];
  lab: {
    urlToFile: string;
    labName: string;
    gradeReceived: string;
  };
}> = ({ assignment, lab, number }) => {
  return (
    <div style={{ paddingBottom: '25px', marginLeft: '19px' }}>
      <Header as='h3'>ASSIGNMENT {number}:</Header>
      <List>
        {assignment.map((a) => {
          return (
            <List.Item key={uuidv4()}>
              <CheckboxLabel checked={a.completed}>{a.name}</CheckboxLabel>
            </List.Item>
          );
        })}
      </List>
      <div style={{ paddingBottom: '25px' }}>
        <Header as='h3'>ASSIGNMENT SUBMISSION:</Header>
        <b>
          <a href={lab.urlToFile} target='_blank' rel='noopener noreferrer'>
            <Icon name='lab' />
            {lab.labName}
          </a>{' '}
          {' - '}
          {lab.gradeReceived}
        </b>
      </div>
      <hr />
    </div>
  );
};

export default LabAssignment;
