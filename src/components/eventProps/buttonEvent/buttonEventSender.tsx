import ButtonEventReceiver from './buttonEventReceiver';
import { handleClickFunction } from '../../../types/types';

const ButtonEventSender = () => {
  const handleFunction: handleClickFunction = (event, id) => {
    const button = event.target as HTMLButtonElement;
    console.log(button.innerText, ' ', id);
  };

  return (
    <div style={{ paddingLeft: '80px' }}>
      <p>Hii here is the onclick function for you!</p>
      <ButtonEventReceiver
        handleClick={(event, id) => handleFunction(event, id)}
      />
    </div>
  );
};

export default ButtonEventSender;
