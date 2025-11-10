import React, { useState } from 'react';
import raj from './raj.jpg'; // ✅ Image is in the same folder as this component

function ImageManipulation() {
  // State variables for image dimensions
  const [imgHeight, setImgHeight] = useState(200);
  const [imgWidth, setImgWidth] = useState(300);

  return (
    <div style={{ border: '2px solid black', width: '420px', padding: '10px' }}>
      <h3>Image Manipulation</h3>

      {/* Image Display */}
      <div>
        <img
          src={raj}
          alt="Sample"
          style={{ height: `${imgHeight}px`, width: `${imgWidth}px` }}
        />
      </div>

      {/* Buttons for resizing */}
      <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <button onClick={() => setImgHeight(imgHeight + 20)}>Increase Height</button>
        <button onClick={() => setImgHeight(imgHeight - 20)}>Decrease Height</button>
        <button onClick={() => setImgWidth(imgWidth + 20)}>Increase Width</button>
        <button onClick={() => setImgWidth(imgWidth - 20)}>Decrease Width</button>
        <button onClick={() => { setImgHeight(200); setImgWidth(300); }}>Reset</button>
      </div>

      
    </div>
  );
}

export default ImageManipulation;
