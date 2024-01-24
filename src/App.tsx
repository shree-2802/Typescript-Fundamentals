import React from 'react';
import { ArrayOfObjects } from './constants/constants';
import ArrayOfObjects1 from './components/array-of-objects/ArrayOfObjects';
import StringPasser from './components/specific-string/stringPasser';
import Sender from './components/children-prop/sender';
import JSXSender from './components/jsx-child/jsxSender';
function App() {
  return (
    <div className='App'>
      <h1 style={{textAlign:'center'}}>REACT-TYPESCRIPT FUNDAMENTALS</h1>
      <h2>I. Passing Specific String</h2>
      <StringPasser/>
      <h2>II. Passing Array of Objects</h2>
      <ArrayOfObjects1 names={ArrayOfObjects} />
      <h2>III. Passing string child</h2>
      <Sender />
      <h2>IV. Passing JSX as a child</h2>
      <JSXSender/>
    </div>
  );
}

export default App;
