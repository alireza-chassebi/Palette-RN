import React, { useState, useCallback, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Container from '../components/Container';
import PalettePreview from '../components/PalettePreview';
import AsyncStorage from '@react-native-community/async-storage';

const styles = {
  ListHeader: {
    fontSize: 30,
    fontWeight: '700',
    color: 'teal',
    marginBottom: 20,
  },
};

const Home = ({ navigation: { navigate }, route }) => {
  const [palettes, setPalettes] = useState([]);
  const [error, setError] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;

  useEffect(() => {
    if (newColorPalette) {
      setPalettes((prev) => [...prev, newColorPalette]);
    }
  }, [newColorPalette]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchPalettes();
    //make sure user knows something happened
    setTimeout(() => setIsRefreshing(false), 600);
  }, []);

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
          ListHeaderComponent={
            <TouchableOpacity onPress={() => navigate('AddNewPalette')}>
              <Text style={styles.ListHeader}>launch modal</Text>
            </TouchableOpacity>
          }
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
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
      )}
    </Container>
  );
};

export default Home;
