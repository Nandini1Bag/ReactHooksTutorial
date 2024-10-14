import React from 'react';
import ReactDOM from 'react-dom';

// React Portals provide a way to render children into a DOM node that exists 
// outside the hierarchy of the parent component. This can be particularly useful for modals, 
// tooltips, and dropdowns, where you want to avoid issues related to CSS overflow, 
// z-index, and positioning.

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={modalStyle}>
      <div style={overlayStyle} onClick={onClose} />
      <div style={contentStyle}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // The DOM node to which the modal will be rendered
  );
};

// Styles for the modal
const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const contentStyle = {
  position: 'relative',
  background: 'white',
  padding: '20px',
  borderRadius: '5px',
};

export default Modal;
