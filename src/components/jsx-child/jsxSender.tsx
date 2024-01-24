import JSXReceiver from "./jsxReceiver";

const JSXSender = () => {
  return <div>
    <p>Hello I'm the JSX Sender</p>
    <JSXReceiver><p style={{display:'inline'}}>Did you get me? Leave a message</p></JSXReceiver>
  </div>;
};

export default JSXSender;
