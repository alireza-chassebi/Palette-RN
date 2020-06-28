import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  Input: {
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    borderRadius: 5,
    marginBottom: 40,
  },
  Title: {
    marginBottom: 5,
  },
  Button: {
    backgroundColor: 'teal',
    marginVertical: 10,
    borderRadius: 5,
  },
  ButtonText: {
    paddingVertical: 12,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },
  ColorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  Seperator: {
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});
