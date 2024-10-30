// App.js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownPanel } from './Dropdown';

const App = () => {
  return (
    <div style={{padding:50}}>
      <h1>Custom Dropdown Example</h1>
      <Dropdown isMultiSelect={true}>
        <DropdownToggle>Toggle Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem value="apple">Apple</DropdownItem>
          <DropdownItem value="banana">Banana</DropdownItem>
          <DropdownItem value="cherry">Cherry</DropdownItem>
        </DropdownMenu>
        <DropdownPanel />
      </Dropdown>
    </div>
  );
};

export default App;
