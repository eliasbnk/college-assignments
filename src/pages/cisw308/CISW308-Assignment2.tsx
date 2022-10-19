import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Header, List } from 'semantic-ui-react';
import Submissions from 'components/Submissions';
import {
  CISW308Assignment2AssignmentData,
  CISW308Assignment2DataQuestion3List,
  CISW308Assignment2DataQuestion4List,
  CISW308Assignment2DataResposiveList,
  CISW308Assignment2DataUnresposiveList
} from 'contexts/data';

const CISW308Assignment2: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISW 308 - Assignment 2</title>
      </Helmet>
      <Template>
        <div style={{ paddingBottom: '25px', marginLeft: '19px' }}>
          <Header as='h1'>ASSIGNMENT:</Header>
          <List ordered>
            {CISW308Assignment2AssignmentData.map((a) => {
              return <List.Item key={a.id}>{a.name}</List.Item>;
            })}
          </List>
        </div>
        <Submissions>
          <List ordered>
            <List.Item>
              <br />
              <List.List>
                Unresponsive:
                <br />
                {CISW308Assignment2DataUnresposiveList.map((i) => {
                  return (
                    <List.Item key={i.id}>
                      <a style={{ paddingLeft: '15px' }} href={i.link} target='_blank' rel='noopener noreferrer'>
                        {i.link}
                      </a>
                    </List.Item>
                  );
                })}
                Responsive:
                <br />
                {CISW308Assignment2DataResposiveList.map((i) => {
                  return (
                    <List.Item key={i.id}>
                      <a style={{ paddingLeft: '15px' }} href={i.link} target='_blank' rel='noopener noreferrer'>
                        {i.link}
                      </a>
                    </List.Item>
                  );
                })}
              </List.List>
            </List.Item>
            <br />
            <List.Item>
              <br />
              <List.List>
                {CISW308Assignment2DataQuestion3List.map((a) => {
                  return (
                    <List.Item key={a.id}>
                      <p style={{ paddingLeft: '15px' }}>{a.name}</p>
                    </List.Item>
                  );
                })}
              </List.List>
            </List.Item>
            <br />
            {CISW308Assignment2DataQuestion4List.map((a) => {
              return (
                <List.Item key={a.id}>
                  <p style={{ paddingLeft: '15px' }}>{a.name}</p>
                </List.Item>
              );
            })}
          </List>
        </Submissions>
      </Template>
    </>
  );
};

export default CISW308Assignment2;
