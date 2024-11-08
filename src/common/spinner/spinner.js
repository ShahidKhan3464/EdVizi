import React from 'react';
import { Icons } from 'assets';

const Spinner = () => {
  return (
    <img
      alt="splash-screen"
      src={Icons.splashScreen}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default Spinner;
