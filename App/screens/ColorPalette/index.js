import React from 'react';
import { FlatList } from 'react-native';
import Container from '../../components/Container';
import ColorBox from '../../components/ColorBox';

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
