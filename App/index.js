import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import AddNewPaletteModal from './components/AddNewPalletteModal';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: 'white' } }}
      initialRouteName="Home">
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        options={({ route }) => ({ headerTitle: route.params.paletteName })}
        name="ColorPalette"
        component={ColorPalette}
      />
    </MainStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{ cardStyle: { backgroundColor: 'white' } }}
        mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          options={{ title: null, headerBackTitle: 'Home' }}
          name="AddNewPalette"
          component={AddNewPaletteModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
