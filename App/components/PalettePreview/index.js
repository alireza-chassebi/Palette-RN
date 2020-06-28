import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

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
