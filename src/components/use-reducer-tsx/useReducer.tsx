import React, { useReducer } from 'react';
import { stateType, counterAction } from '../../types/types';

const UseReducerTSX = () => {
  const reducer = (state: stateType, action: counterAction) => {
    switch (action.type) {
      case 'increment':
        return {
          ...state,
          count: state.count + action.payload,
        };
      case 'decrement':
        return {
          ...state,
          count: state.count - action.payload,
        };
      case 'reset':
        return state;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 50 });
  return (
    <div>
      <p>{state.count}</p>
      <button
        onClick={() => dispatch({ type: 'increment', payload: 10 })}
        style={{
          marginRight: '30px',
          backgroundColor: 'green',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '0.5rem 1rem',
          color: 'white',
        }}
      >
        increment by 10
      </button>
      <button
        style={{
          marginRight: '30px',
          backgroundColor: 'red',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '0.5rem 1rem',
          color: 'white',
        }}
        onClick={() => dispatch({ type: 'decrement', payload: 5 })}
      >
        Decrement by 5
      </button>
      <button
        style={{
          marginRight: '30px',
          backgroundColor: 'red',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '0.5rem 1rem',
          color: 'white',
        }}
        onClick={() => dispatch({ type: 'reset' })}
      >
        reset
      </button>
    </div>
  );
};

export default UseReducerTSX;
