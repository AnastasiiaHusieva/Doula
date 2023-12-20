import React from 'react';

const Popup = ({ eventInfo }) => {

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div  style={popupStyle}>
      <div className="popup-content">
        <div>{eventInfo._def.title}</div>
        <p>This is your pop-up content.</p>
      </div>
    </div>
  );
};

export default Popup;