import React, { useState, useCallback, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import Container from '../../components/Container';
import PalettePreview from '../../components/PalettePreview';
import AsyncStorage from '@react-native-community/async-storage';
import { COLOR_PALETTES } from '../../data/data';
import styles from './styles';

const useStorage = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getStorage = async () => {
      let data;
      try {
        const response = await AsyncStorage.getItem('palette');
        if (response !== null) {
          setResponse(JSON.parse(response));
        } else {
          setResponse(COLOR_PALETTES);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getStorage();
  }, []);

  useEffect(() => {
    const setStorage = async () => {
      await AsyncStorage.setItem('palette', JSON.stringify(response));
    };
    if (response !== null) {
      setStorage();
    }
  }, [response]);

  return [response, setResponse, error, setError, loading];
};

const Home = ({ navigation: { navigate }, route }) => {
  const [palettes, setPalettes, error, setError, loading] = useStorage();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;

  useEffect(() => {
    if (newColorPalette) {
      setPalettes((prev) => [...prev, newColorPalette]);
    }
  }, [newColorPalette]);

  const handleFetchPalettes = useCallback(async () => {
    // await AsyncStorage.clear();
    const response = await AsyncStorage.getItem('palette');
    if (response !== null) {
      setPalettes(JSON.parse(response));
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await handleFetchPalettes();
    } catch {
      setError(true);
    } finally {
      setTimeout(() => setIsRefreshing(false), 600);
    }
  }, []);

  const handleDelete = useCallback((id) => {
    setPalettes((prev) => prev.filter((palette) => palette.id !== id));
  }, []);

  return (
    <Container>
      {loading ? (
        <Text>Loading Palettes</Text>
      ) : (
        <FlatList
          ListHeaderComponent={
            <TouchableOpacity onPress={() => navigate('AddNewPalette')}>
              <Text style={styles.ListHeader}>Create New Palette </Text>
            </TouchableOpacity>
          }
          data={palettes}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item: { paletteName, colors, id } }) => (
            <PalettePreview
              title={paletteName}
              colors={colors.slice(0, 5)}
              handlePress={() =>
                navigate('ColorPalette', { paletteName, colors })
              }
              handleDelete={() => handleDelete(id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
      )}
      {error && <Text>error loading palettes</Text>}
    </Container>
  );
};

export default Home;
