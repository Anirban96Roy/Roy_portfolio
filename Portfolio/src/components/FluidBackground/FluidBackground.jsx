import React, { useEffect, useRef } from 'react';
import './fluid-script.js'; // Make sure this path is correct

const FluidBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && window.initFluidSimulation) {
      window.initFluidSimulation(canvas);
    } else {
      console.error("Canvas or initFluidSimulation not available");
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="fluid-canvas"
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
};

export default FluidBackground;
