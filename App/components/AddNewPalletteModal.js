import React, { useState, useCallback, FlatList } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Container from './Container';

const styles = StyleSheet.create({
  Input: {
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    borderRadius: 5,
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
});

const AddNewPaletteModal = ({ navigation: { navigate } }) => {
  const [name, setName] = useState('');
  const handleSubmit = useCallback(() => {
    if (!name) Alert.alert('Please enter a palette name!');
    else {
      const newColorPalette = { paletteName: name, colors: [] };
      navigate('Home', { newColorPalette });
    }
  }, [name]);
  return (
    <Container>
      <Text style={styles.Title}>Name of the palette</Text>
      <TextInput
        style={styles.Input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Palette name"
      />

      <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
        <Text style={styles.ButtonText}>Submit</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default AddNewPaletteModal;
