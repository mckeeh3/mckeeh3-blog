import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { Pre, Line, LineNo, LineContent } from './styles';
import theme from 'prism-react-renderer/themes/nightOwl';

const codeIn = (children) => {
  if (typeof children === 'string') {
    return children;
  }

  const reducer = (code, child) => (typeof child === 'string' ? (code += child) : (code += child.props.children));
  return children.reduce(reducer, '');
};

const WithLineNumbers = (props) => {
  // console.log('props =====>', props.children.props.children);
  let code = codeIn(props.children.props.children);
  const language = props.className ? props.className.replace('language-', '') : '';

  return (
    <Highlight {...defaultProps} theme={theme} code={code.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default WithLineNumbers;
