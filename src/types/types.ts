export type ArrayOfObjectsType = {
  names: {
    first: string;
    last: string;
  }[];
};

export type stringReceiverType = {
  status: 'loading' | 'error' | 'pending';
};

export type childPropReceiver = {
  children: string;
};

export type JSXReceiverType = {
  children: React.ReactNode;
};

export type buttonEventReceiverType = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export type handleClickFunction = (
  event: React.MouseEvent<HTMLButtonElement>,
  id: number
) => void;

export type handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement> | null,
  e: React.KeyboardEvent<HTMLInputElement> | null
) => void;

export type inputPropsType = {
  placeholder: string;
  value: string;
  handleChange: handleInputChange;
};

export type styleExportType = {
  styles: React.CSSProperties;
  value: string;
};

export type useStateUserType = {
  name: string;
  email: string;
};

export type stateType = {
  count: number;
};
export type actionType = {
  type: 'increment' | 'decrement';
  payload: number;
};

export type actionResetType = {
  type: 'reset';
};

export type counterAction = actionType | actionResetType;
