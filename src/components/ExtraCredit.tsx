import React from 'react';
import type { FC } from 'react';
import { Header, List } from 'semantic-ui-react';
import CheckboxLabel from './CheckboxLabel';

const ExtraCredit: FC<{
  assignment: {
    id: string;
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
            <List.Item key={a.id}>
              <CheckboxLabel checked={a.completed}>{a.name}</CheckboxLabel>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default ExtraCredit;
