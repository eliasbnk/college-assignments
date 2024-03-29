import React from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Card, Icon } from 'semantic-ui-react';
import Template from 'layout/Template';
import Title from 'components/Title';
import { CISW400HomePageAssignmentsData } from 'contexts/data';
import { CookiesProvider } from 'react-cookie';

const CISW400HomePage: FC = () => {
  return (
    <CookiesProvider>
      <Helmet>
        <title>CISW 400 - Homepage</title>
      </Helmet>
      <Template>
        <div style={{ margin: 'auto auto' }}>
          <Title>ASSIGNMENTS</Title>
          <Card.Group role='group' fluid centered>
            {CISW400HomePageAssignmentsData.map((assignment) => {
              return (
                <Card
                  key={assignment.id}
                  {...(assignment.extra === 'complete'
                    ? {
                        as: Link,
                        to: assignment.link
                      }
                    : null)}
                >
                  <Card.Content>
                    <Card.Header>{assignment.header}</Card.Header>
                    <Card.Meta style={{ color: '#747474' }}>{assignment.meta}</Card.Meta>
                    <Card.Description>{assignment.description}</Card.Description>
                    <Card.Content extra style={{ textAlign: 'right' }}>
                      {assignment.extra === 'complete' ? (
                        <Icon name='check circle' color='green' />
                      ) : (
                        <Icon name='lock' color='red' />
                      )}
                    </Card.Content>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
        </div>
      </Template>
    </CookiesProvider>
  );
};

export default CISW400HomePage;
