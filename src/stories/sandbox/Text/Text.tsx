import React from 'react';
import './text.css';

interface TextProps {
  children: React.ReactNode;
  isError?: boolean;
}

const Text: React.FC<TextProps> = ({
  children,
  isError = false
}: TextProps) => {
  if (isError) {
    return (<span className="storybook-text--error">エラーが発生しています。</span>)
  } else {
    return (<>{children}</>);
  }
};

export default Text;
