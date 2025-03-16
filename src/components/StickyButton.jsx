import React, { useState } from 'react';
import RequestAQuote from './RequestAQuote';
import Button from './Button';

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed bottom-4 sm:bottom-8 md:bottom-10 right-4 sm:right-8 md:right-10 z-10">
      <Button className="bg-black" onClick={handleOpenModal}>Request a Quote</Button>
      <RequestAQuote isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ParentComponent;
