import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  BoxContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  Box: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

const PalettePreview = ({ title, handlePress, colors }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.Title}>{title}</Text>
      <View style={styles.BoxContainer}>
        {colors.map((color) => (
          <View
            key={color.hexCode}
            style={[styles.Box, { backgroundColor: color.hexCode }]}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default PalettePreview;
