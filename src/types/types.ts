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
