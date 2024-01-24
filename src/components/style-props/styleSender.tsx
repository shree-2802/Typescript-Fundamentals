import StyleReceiver from './styleReceiver';
const StyleSender = () => {
  return (
    <div>
      <p>
        Hii I'm gonna send you the value and styles. Can you please gimme a
        button with those props.
      </p>
      <StyleReceiver
        styles={{
          padding: '0.5rem 1rem',
          fontSize: '16px',
          backgroundColor: 'green',
          color: 'white',
          border: '1px solid black',
          borderRadius: '3px',
        }}
        value={'shivan'}
      />
    </div>
  );
};

export default StyleSender;
