// App.js
import React from 'react';
import withCounter from './withCounter';
import Counter from './Counter';

const EnhancedCounter = withCounter(Counter);

const App = () => {
  return (
    <div>
      <EnhancedCounter initialCount={0} />
    </div>
  );
};

export default App;
