import ButtonEventReceiver from './buttonEventReceiver';
const ButtonEventSender = () => {
  return (
    <div>
      <p>Hii here is the onclick function for you!</p>
      <ButtonEventReceiver
        handleClick={() => {
          console.log('hii')
        }}
      />
    </div>
  );
};

export default ButtonEventSender;
