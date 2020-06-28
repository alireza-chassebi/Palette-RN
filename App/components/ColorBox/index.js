import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const ColorBox = ({ colorName, hexCode }) => {
  const textColor =
    parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white';
  return (
    <Text style={[{ color: textColor, backgroundColor: hexCode }, styles.Box]}>
      {colorName + ' ' + hexCode}
    </Text>
  );
};

export default ColorBox;
