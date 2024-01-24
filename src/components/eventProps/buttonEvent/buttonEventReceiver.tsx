export type buttonEventReceiverType = {
  handleClick: () => void;
};
const ButtonEventReceiver = (props: buttonEventReceiverType) => {
  return (
    <div>
      <button onClick={() => props.handleClick()}>Shivan</button>
    </div>
  );
};

export default ButtonEventReceiver;
