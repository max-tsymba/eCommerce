import React from 'react';

interface IContainerProps {
  children: React.ReactNode;
}

const Container: React.FunctionComponent<IContainerProps> = ({
  children,
}): JSX.Element => {
  return <div className="container">{children}</div>;
};

export default Container;
