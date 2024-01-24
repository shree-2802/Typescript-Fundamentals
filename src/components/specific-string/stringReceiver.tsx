import { stringReceiverType } from '../../types/types';

const StringReceiver = (props: stringReceiverType) => {
  return <div>Receiver echoes: {props.status}</div>;
};

export default StringReceiver;
