/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

const LoadingScreen = ({ onLoadComplete }) => {
  const [isRiveLoaded, setIsRiveLoaded] = useState(false);
  
  const { RiveComponent, rive } = useRive({
    src: 'loading-animation.riv',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    onLoop: () => {
      // Wait for at least one loop of the animation before allowing content to load
      // Adjust the setTimeout duration based on your needs
      if (!isRiveLoaded) {
        setTimeout(() => {
          setIsRiveLoaded(true);
          // Notify parent component that loading can complete
          onLoadComplete();
        }, 1200); // Minimum display time for the animation
      }
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-36 h-36">
        <RiveComponent />
      </div>
    </div>
  );
};

export default LoadingScreen;