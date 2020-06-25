import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Container from '../components/Container';
import ColorBox from '../components/ColorBox';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'left',
  },
});

const ColorPalette = ({
  route: {
    params: { colors },
  },
}) => {
  return (
    <Container>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default ColorPalette;
