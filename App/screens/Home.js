import React from 'react';
import { View, Text, Button } from 'react-native';
import Container from '../components/Container';

const Home = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <Text>hi</Text>
      <Button title="ColorPalete" onPress={() => navigate('ColorPalette')} />
    </Container>
  );
};

export default Home;
