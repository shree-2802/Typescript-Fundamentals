import { styleExportType } from '../../types/types';

const StyleReceiver = (props: styleExportType) => {
  return (
    <>
      <p>Receiver: Yeah Sure!</p>
      <button style={props.styles}>{props.value}</button>
    </>
  );
};

export default StyleReceiver;
