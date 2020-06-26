import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  Title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  Container: { flex: 1, flexDirection: 'row' },
  BoxContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center',
  },
  Box: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  IconContainer: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

const PalettePreview = ({ title, handlePress, colors, handleDelete, id }) => {
  return (
    <>
      {/* {console.log('rerenders')} */}
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.Title}>{title}</Text>
        <View style={styles.Container}>
          <View style={styles.BoxContainer}>
            {colors.map((color) => (
              <View
                key={color.hexCode}
                style={[styles.Box, { backgroundColor: color.hexCode }]}
              />
            ))}
          </View>
          <TouchableOpacity onPress={handleDelete} style={styles.IconContainer}>
            <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default PalettePreview;
