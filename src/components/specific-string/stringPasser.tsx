import StringReceiver from './stringReceiver';

const StringPasser = () => {
  return (
    <div>
      <p>What is the status?</p>
      <StringReceiver status={'loading'} />
    </div>
  );
};

export default StringPasser;
