import { inputPropsType } from '../../../types/types';

const InputPropsReceiver = (props: inputPropsType) => {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.handleChange(event, null)}
        onKeyDown={(e) => props.handleChange(null, e)}
      />
    </div>
  );
};

export default InputPropsReceiver;
