import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import { Card, Icon, Label } from 'semantic-ui-react';

import Template from 'layout/Template';
import Title from 'components/Title';
import { classesData } from 'contexts/data';

const HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <Title>Homepage</Title>
      </Helmet>
      <Template>
        <Title>CLASSES</Title>
        <Card.Group fluid centered>
          {classesData.map((collegeClass) => {
            return (
              <Card key={collegeClass.id} as={Link} to={collegeClass.link}>
                <Label
                  corner='right'
                  icon={collegeClass.complete === 'complete' ? 'check' : 'tasks'}
                  color={collegeClass.complete === 'complete' ? 'green' : 'orange'}
                />
                <Card.Content>
                  <Card.Header>{collegeClass.header}</Card.Header>
                  <Card.Meta>{collegeClass.meta}</Card.Meta>
                  <Card.Description>{collegeClass.description}</Card.Description>
                  <Card.Content extra align='right'>
                    <Icon name={collegeClass.iconName} color={collegeClass.iconColor} />
                  </Card.Content>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </Template>
    </>
  );
};

export default HomePage;
