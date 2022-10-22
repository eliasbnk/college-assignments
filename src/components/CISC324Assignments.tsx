import React from 'react';
import type { FC } from 'react';
import { List, Header, Icon } from 'semantic-ui-react';
import CheckboxLabel from './CheckboxLabel';

const CISC324Assignments: FC<{
  assignment: {
    id: string;
    question: string;
    possibleAnswers: {
      id: string;
      answer: string;
    }[];
    myAnswer: () => string[];
  }[];
  codeLink: string;
}> = ({ codeLink, assignment }) => {
  return (
    <div style={{ maxWidth: '550px', marginLeft: '19px' }}>
      <Header as='h3' style={{ textAlign: 'left', marginTop: '0px' }}>
        Hands-on Projects:{' '}
        <a href={`https://github.com/eliasbnk/cisc324/${codeLink}`} target='_blank' rel='noopener noreferrer'>
          <Icon name='github' style={{ marginRight: '1px' }} />
          Code
        </a>
      </Header>
      <Header as='h3' style={{ textAlign: 'left', marginTop: '0px' }}>
        Review Questions:
      </Header>
      <ol>
        {assignment.map((a, index) => {
          return (
            <List.Item as='li' key={a.id} style={{ paddingBottom: '15px' }}>
              <div
                style={
                  index === 19
                    ? { whiteSpace: 'pre-wrap', paddingBottom: '15px' }
                    : { whiteSpace: 'normal', paddingBottom: '15px' }
                }
              >
                {a.question}
              </div>
              <List.List as='ol' type='a'>
                {a.possibleAnswers.map((al) => {
                  return (
                    <div key={al.id} style={{ paddingBottom: '10px' }}>
                      <List.Item>
                        <CheckboxLabel checked={a.myAnswer().includes(al.id) ? true : false}>{al.answer}</CheckboxLabel>
                      </List.Item>
                    </div>
                  );
                })}
              </List.List>
            </List.Item>
          );
        })}
      </ol>
    </div>
  );
};

export default CISC324Assignments;
