


import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import CreateNewShorten from './CreateNewShorten';

const ShortenPopUp = ({ open, setOpen, refetch }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="flex justify-center items-center h-full w-full bg-black bg-opacity-40">
        {/* Dark themed inner content */}
        <div className="bg-surface text-textPrimary rounded-md shadow-lg p-6 max-w-md w-full mx-4">
          <CreateNewShorten setOpen={setOpen} refetch={refetch} />
        </div>
      </Box>
    </Modal>
  );
};

export default ShortenPopUp;
