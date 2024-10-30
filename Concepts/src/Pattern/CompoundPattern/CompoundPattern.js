// Compound pattern:-
// -------------------
// -> Multiple components come together to serve a common functionality
// - Ex: Select tag where select and option jointly help us create dropdowns.
// - React Context APIs plays an important role in Compound pattern
// - Use cases like: select, dropdown components, menu items

import { useState } from 'react';
import {Tab,TabItem,TabContent} from './Tab';
export default function CompoundPattern() {
  const [currentIndex, setIndex] = useState(0);

  const handleChange = (newIndex) => {
    setIndex(newIndex);
  };
  return (
    <div className='App'>
    <p>Compound Design Pattern</p>
      <Tab value={currentIndex} onChange={handleChange}>
        <Tab.Heads>
          <TabItem label={'Tab1'} index={0} />
          <TabItem label={'Tab2'} index={1} />
          <TabItem label={'Tab3'} index={2} />
        </Tab.Heads>
        <Tab.ContentWrapper>
          <TabContent index={0}>
            <h1>I am content 1</h1>
          </TabContent>
          <TabContent index={1}>
            <h1>I am content 2</h1>
          </TabContent>
          <TabContent index={2}>
            <h1>I am content 3</h1>
          </TabContent>
        </Tab.ContentWrapper>
      </Tab>
    </div>
  );
}