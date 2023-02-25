import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './Loader.styles';

const Loader = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Loader;
