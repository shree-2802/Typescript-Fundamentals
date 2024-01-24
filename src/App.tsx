import React from 'react';
import { ArrayOfObjects } from './constants/constants';
import ArrayOfObjects1 from './components/array-of-objects/ArrayOfObjects';
import StringPasser from './components/specific-string/stringPasser';
import Sender from './components/children-prop/sender';
import JSXSender from './components/jsx-child/jsxSender';
import { ButtonSender, InputProp } from './components/eventProps';
import StyleSender from './components/style-props/styleSender';
import UseStateTSX from './components/use-state-tsx/useState';
import UseReducerTSX from './components/use-reducer-tsx/useReducer';
function App() {
  return (
    <div className='App'>
      <h1 style={{ textAlign: 'center' }}>REACT-TYPESCRIPT FUNDAMENTALS</h1>
      <h2>I. Passing Specific String</h2>
      <StringPasser />
      <h2>II. Passing Array of Objects</h2>
      <ArrayOfObjects1 names={ArrayOfObjects} />
      <h2>III. Passing string child</h2>
      <Sender />
      <h2>IV. Passing JSX as a child</h2>
      <JSXSender />
      <h2>V. Passing Events</h2>
      <p style={{ paddingLeft: '40px' }}>1. Button Event</p>
      <ButtonSender />
      <p style={{ paddingLeft: '40px' }}>2. Input Event Handling</p>
      <InputProp />
      <h2>VI. Passing CSS Styles</h2>
      <StyleSender />
      <h2>VII. UseState Type Defining</h2>
      <UseStateTSX />
      <h2>VIII. UseReducer Type Defining</h2>
      <UseReducerTSX/>
    </div>
  );
}

export default App;
