import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Box: {
    marginVertical: 10,
    padding: 10,
    textAlign: 'center',
    fontWeight: '700',
  },
});

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
