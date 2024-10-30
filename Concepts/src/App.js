// App.js
import React,{useState} from 'react';
import withCounter from './Hoc/withCounter';
import Counter from './Hoc/Counter';
import Parent from './LiftingStateup/Parent';
import Modal from './Portals/Modal';
import CompoundPatternTab from './Pattern/CompoundPattern/CompoundPatternTab';
import CompoundPatternDropdown from './Pattern/CompoundPattern/CompoundPatternDropdown';

import './App.css';

const EnhancedCounter = withCounter(Counter);

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <EnhancedCounter initialCount={0} />
      <Parent/>
      <h1>React Portals Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is an example of a modal using React Portals!</p>
      </Modal>
      <CompoundPatternTab/>
      <CompoundPatternDropdown/>
    </div>
  );
};

export default App;
