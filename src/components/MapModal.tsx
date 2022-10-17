import React, { useState } from 'react';
import type { FC } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import MapContainer from './MapContainer';

const MapModal: FC<{
  userCoords: {
    lat: number;
    lng: number;
  };

  placeCoords: {
    lat: number;
    lng: number;
  };
}> = ({ placeCoords, userCoords }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    try {
      window.open(
        `https://www.google.es/maps/dir/'${userCoords?.lat},${userCoords?.lng}'/'${placeCoords?.lat},${placeCoords?.lng}'`,
        '_blank',
        'noopener,noreferrer'
      );
    } catch ({ message }) {
      console.error(message);
    }
  };

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>SHOW MAP</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Header style={{ textAlign: 'center' }}>
        <Button onClick={handleClick}>GET DIRECTIONS</Button>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <MapContainer placeCoords={placeCoords} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default MapModal;
