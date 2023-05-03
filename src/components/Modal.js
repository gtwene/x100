import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

function Demo(setOpened) {

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="This is fullscreen modal!"
        fullScreen
      >
        {/* Modal content */}
      </Modal>

      {/* <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group> */}
    </>
  );
}