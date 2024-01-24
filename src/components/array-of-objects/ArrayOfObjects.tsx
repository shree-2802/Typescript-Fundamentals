import { ArrayOfObjectsType } from '../../types/types';
const ArrayOfObjects = ({ names }: ArrayOfObjectsType) => {
  return (
    <div>
      {names.map((item, index) => {
        return (
          <p key={index}>
            {item.first} {item.last}
          </p>
        );
      })}
    </div>
  );
};

export default ArrayOfObjects;
