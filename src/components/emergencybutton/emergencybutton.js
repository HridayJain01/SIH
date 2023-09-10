import React from 'react';

import ReactDOM from 'react-dom';

const EmergencyButton = () => {
  return (
    <div className="emergency-button">
    <button onClick={() => window.location.href = 'https://www.example.com'}>E</button>
    </div>
  );

}