import { childPropReceiver } from '../../types/types';

const Receiver = (props: childPropReceiver) => {
  console.log(props);
  return (
    <div>
      Receiver
      <p>From Sender: {props.children}</p>
      Receiver: Yeah I got the message here it is!
    </div>
  );
};

export default Receiver;
