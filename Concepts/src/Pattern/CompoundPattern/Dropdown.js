// Dropdown.js
import React, { useState, createContext, useContext } from 'react';

// Create a context for the dropdown
const DropdownContext = createContext();

export const Dropdown = ({ children, isMultiSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  
  const handleSelect = (value) => {
    if (isMultiSelect) {
      setSelectedValues((prev) => 
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
    } else {
      setSelectedValues([value]);
      setIsOpen(false);
    }
  };

  return (
    <DropdownContext.Provider value={{ isOpen, toggleDropdown, handleSelect, selectedValues }}>
      <div className="dropdown">{children}</div>
    </DropdownContext.Provider>
  );
};

export const DropdownToggle = ({ children }) => {
  const { toggleDropdown } = useContext(DropdownContext);
  
  return (
    <button className="dropdown-toggle" onClick={toggleDropdown}>
      {children}
    </button>
  );
};

export const DropdownMenu = ({ children }) => {
  const { isOpen } = useContext(DropdownContext);
  
  return isOpen ? (
    <div className="dropdown-menu">
      {children}
    </div>
  ) : null;
};

export const DropdownItem = ({ value, children }) => {
  const { handleSelect, selectedValues } = useContext(DropdownContext);
  
  return (
    <div
      className={`dropdown-item ${selectedValues.includes(value) ? 'selected' : ''}`}
      onClick={() => handleSelect(value)}
    >
      {children}
    </div>
  );
};

export const DropdownPanel = () => {
  const { selectedValues } = useContext(DropdownContext);
  
  return (
    <div className="dropdown-panel">
      {selectedValues.length > 0 ? selectedValues.join(', ') : 'Select an option'}
    </div>
  );
};
