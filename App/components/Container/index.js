import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;
