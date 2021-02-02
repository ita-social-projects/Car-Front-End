import { StyleSheet } from 'react-native';

export const centerStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 30,
  },
  loginPageTextGreeting: {
    fontFamily: 'Proxima-Nova-Reg',
    fontWeight: 'bold',
    fontSize: 21,
    textTransform: 'uppercase',
    margin: 5,
    letterSpacing: 0.2,
  },
  loginPageTextName: {
    fontFamily: 'Proxima-Nova-Reg',
    fontWeight: 'bold',
    fontSize: 30,
    textTransform: 'uppercase',
    margin: 5,
    letterSpacing: 0.2,
  },
  loginButton: {
    display: 'flex',
    paddingHorizontal: 14,
    paddingVertical: 16,
    alignSelf: 'flex-end',
  },
  preferencesText: {
    padding: 30,
    textAlign: 'left',
    fontSize: 15,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  TextInputStyleClass: {
    height: 100,
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 15,
    paddingLeft: 10,
  },
  exceptionMessage: {
    fontSize: 40,
    padding: 20,
    textAlign: 'center',
  },
  exceptionCode: {
    fontWeight: 'bold',
    fontSize: 45,
  },
  exceptionLink: {
    fontSize: 40,
    color: 'blue',
  },
});
