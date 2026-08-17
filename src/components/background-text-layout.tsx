import React, { ReactNode } from 'react';

const BackgroundTextLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        // Tiling behavior
        backgroundImage: 'url("/background.png")',
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'top left',
        backgroundSize: '100% auto', // Keeps image width fitted, height fixed by aspect ratio
        // Cropping short text
        overflow: 'hidden', 
        display: 'inline-block', // Shrinks container height to fit content
      }}
    >
      <div style={{ padding: '24px', backgroundColor: 'rgba(255, 255, 255, 0.35)' }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundTextLayout;