import { JSXReceiverType } from '../../types/types';

const JSXReceiver = (props: JSXReceiverType) => {
  return (
    <div>
      <p> Receiver</p>
      <p style={{ display: 'inline' }}>From sender: {props.children}</p>
      <p>I got it!</p>
    </div>
  );
};

export default JSXReceiver;
