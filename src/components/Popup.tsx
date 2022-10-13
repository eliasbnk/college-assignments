import React from 'react';
import type { FC } from 'react';
import { Header, Modal } from 'semantic-ui-react';
import TriggerButton from './TriggerButton';

const Popup: FC<{
  style:
    | {
        backgroundColor: string;
        color: string;
      }
    | {
        backgroundColor?: undefined;
        color?: undefined;
      };
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  browserName: string | undefined;
  browserVersion: string | undefined;
  osName: string | undefined;
  osVersion: string | undefined;
}> = ({ browserName, browserVersion, osName, osVersion, open, setOpen, style }) => {
  return (
    <Modal
      style={style}
      closeIcon
      open={open}
      trigger={<TriggerButton setOpen={setOpen} />}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Header>Browser Detected</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>
            You are viewing this page with {browserName} v{browserVersion} on {osName} {osVersion}
          </Header>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default Popup;
