import { buttonEventReceiverType } from '../../../types/types';

const ButtonEventReceiver = (props: buttonEventReceiverType) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 2)}>Shivan</button>
    </div>
  );
};

export default ButtonEventReceiver;
