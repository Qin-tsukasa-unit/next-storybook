import React from 'react';
import Text from './Text';

export default {
  title: 'Sandbox/Text',
  component: Text
};

export const isError: React.FC<{}> = () => (
  <div>
    <Text isError>
      <p>ホゲホゲホゲホゲ</p>
    </Text>
  </div>
);

export const notError: React.FC<{}> = () => (
  <div>
    <Text>
      <p>ホゲホゲホゲホゲ</p>
    </Text>
  </div>
);
