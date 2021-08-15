import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

const Pre = (props) => {
  console.log('Pre props =====>', props);
  const { className, children, ...rest } = props;

  return (
    <pre className={className} {...rest}>
      {children}
    </pre>
  );
};

export default Pre;
