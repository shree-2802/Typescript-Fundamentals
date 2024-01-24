import Receiver from './receiver';
const Sender = () => {
  return (
    <div>
      <p>Hii I'm the sender of child prop</p>
      <Receiver>Did you get the child I sent?</Receiver>
    </div>
  );
};

export default Sender;
