import React from 'react';
import type { FC } from 'react';
import { Button, Label } from 'semantic-ui-react';

const TriggerButton: FC<{ setOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setOpen }) => {
  return (
    <>
      <Button onClick={() => setOpen(true)}>Check My Browser</Button>
      <Label color='blue' pointing='left'>
        show pop-up button
      </Label>
    </>
  );
};

export default TriggerButton;
