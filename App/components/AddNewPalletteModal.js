import React, { useState, useCallback } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
  View,
  Switch,
} from 'react-native';
import Container from './Container';
import { COLORS } from '../data/data';
//had to use @3.4.0 since v7 does not work in RN
import uuid from 'uuid/v1';

const styles = StyleSheet.create({
  Input: {
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    borderRadius: 5,
    marginBottom: 40,
  },
  Title: {
    marginBottom: 5,
  },
  Button: {
    backgroundColor: 'teal',
    marginVertical: 10,
    borderRadius: 5,
  },
  ButtonText: {
    paddingVertical: 12,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },
  ColorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  Seperator: {
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

const initalValue = Array.from(Array(COLORS.length), () => false);

const AddNewPaletteModal = ({ navigation: { navigate } }) => {
  const [name, setName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const handleUpdate = useCallback(
    (color, newValue) => {
      if (newValue) {
        setSelectedColors((current) => {
          return [...current, color];
        });
      } else {
        setSelectedColors((current) => {
          return current.filter((c) => c.colorName !== color.colorName);
        });
      }
    },
    [setSelectedColors]
  );

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert('Please add a name to your color palette');
    } else if (selectedColors.length < 3) {
      Alert.alert('Please choose at least 3 colors');
    } else {
      const newColorPalette = {
        id: uuid(),
        paletteName: name,
        colors: selectedColors,
      };
      navigate('Home', {
        newColorPalette,
      });
    }
  }, [name, selectedColors]);
  return (
    <Container>
      <Text style={styles.Title}>Name of the palette</Text>
      <TextInput
        style={styles.Input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Palette name"
      />
      <FlatList
        data={COLORS}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item, index }) => (
          <View style={styles.ColorContainer}>
            <Text>{item.colorName}</Text>
            <Switch
              value={
                !!selectedColors.find(
                  (color) => color.colorName === item.colorName
                )
              }
              onValueChange={(newValue) => handleUpdate(item, newValue)}
            />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.Seperator} />}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
        <Text style={styles.ButtonText}>Submit</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default AddNewPaletteModal;
