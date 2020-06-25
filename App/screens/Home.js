import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import Container from '../components/Container';
import PalettePreview from '../components/PalettePreview';
import AsyncStorage from '@react-native-community/async-storage';
import COLOR_PALETTES from '../data/data';

const Home = ({ navigation: { navigate } }) => {
  const [palettes, setPalettes] = useState([]);
  const [error, setError] = useState(false);

  const handleFetchPalettes = useCallback(async () => {
    try {
      const response = await AsyncStorage.getItem('palettes');
      setPalettes(JSON.parse(response));
    } catch (error) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    handleFetchPalettes();
  }, []);

  return (
    <Container>
      {error ? (
        <Text>Error loading palettes</Text>
      ) : (
        <FlatList
          data={palettes}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item: { paletteName, colors } }) => (
            <PalettePreview
              title={paletteName}
              colors={colors.slice(0, 5)}
              handlePress={() =>
                navigate('ColorPalette', { paletteName, colors })
              }
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};

Home.defaultProps = {
  colorPalettes: COLOR_PALETTES,
};

export default Home;
