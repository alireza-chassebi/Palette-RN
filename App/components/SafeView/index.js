import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
});

const SafeView = ({ children }) => {
  return <SafeAreaView style={styles.SafeArea}>{children}</SafeAreaView>;
};

export default SafeView;
