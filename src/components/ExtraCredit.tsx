import React from 'react';
import type { FC } from 'react';
import { Header, List } from 'semantic-ui-react';
import CheckboxLabel from './CheckboxLabel';
import { v4 as uuidv4 } from 'uuid';

const ExtraCredit: FC<{
  assignment: {
    completed: boolean;
    name: string;
  }[];
}> = ({ assignment }) => {
  return (
    <div style={{ paddingBottom: '25px', marginLeft: '19px' }}>
      <Header as='h1'>EXTRA CREDIT:</Header>
      <List>
        {assignment.map((a) => {
          return (
            <List.Item key={uuidv4()}>
              <CheckboxLabel checked={a.completed}>{a.name}</CheckboxLabel>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default ExtraCredit;
