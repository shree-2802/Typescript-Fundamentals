import React from 'react';
import { ArrayOfObjects } from './constants/constants';
import ArrayOfObjects1 from './components/ArrayOfObjects';
function App() {
  return (
    <div className='App'>
      <ArrayOfObjects1 names={ArrayOfObjects} />
    </div>
  );
}

export default App;
