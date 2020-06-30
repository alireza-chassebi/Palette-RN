import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  Title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  Container: { flex: 1, flexDirection: 'row' },
  BoxContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center',
  },
  Box: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  IconContainer: {
    justifyContent: 'center',
  },
});
