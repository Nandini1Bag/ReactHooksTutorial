import React, { useRef, useState, useLayoutEffect } from 'react';

const WidthMeasurement = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  const measureWidth = () => {
    if (divRef.current) {
      const divWidth = divRef.current.getBoundingClientRect().width;
      setWidth(divWidth);
    }
  };

  useLayoutEffect(() => {
    // Measure the width on mount
    measureWidth();

    // Add resize event listener
    window.addEventListener('resize', measureWidth);
    
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', measureWidth);
    };
  }, []); // Empty dependency array to run only on mount

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: '50%',
          padding: '20px',
          background: 'lightblue',
          margin: '20px 0',
        }}
      >
        This is a box with dynamic width.
      </div>
      <p>The width of the box is: {width}px</p>
    </div>
  );
};

export default WidthMeasurement;
