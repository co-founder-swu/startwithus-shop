import React, { useState, useEffect } from 'react';
import RequestAQuoteLargeScreen from './RequestAQuoteLargeScreen';
import RequestAQuoteSmallScreen from './RequestAQuoteSmallScreen';

const RequestAQuote = ({ isOpen, onClose }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  const checkScreenSize = () => {
    setIsLargeScreen(window.innerWidth > 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <div>
      {isLargeScreen ? (
        <RequestAQuoteLargeScreen isOpen={true} onClose={onClose} />
      ) : (
        <RequestAQuoteSmallScreen isOpen={true} onClose={onClose} />
      )}
    </div>
  );
};

export default RequestAQuote;
