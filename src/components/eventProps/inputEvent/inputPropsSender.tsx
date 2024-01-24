import { ChangeEvent, useState } from 'react';
import InputPropsReceiver from './inputPropsReceiver';
import { handleInputChange } from '../../../types/types';
const InputPropsSender = () => {
  const [userName, setUserName] = useState('');
  const handleChange: handleInputChange = (event, e) => {
    // if(event)
    if (event) {
      console.log(event);
      setUserName(event.target.value);
    }
    if (e) {
      if (e.key === 'Enter') setUserName('');
    }
  };
  return (
    <div style={{ paddingLeft: '80px' }}>
      <InputPropsReceiver
        placeholder='Name'
        value={userName}
        handleChange={handleChange}
      />
    </div>
  );
};

export default InputPropsSender;
