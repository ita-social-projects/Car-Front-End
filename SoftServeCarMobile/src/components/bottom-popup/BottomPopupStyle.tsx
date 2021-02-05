import { StyleSheet } from 'react-native';

const BottomPopupStyle = StyleSheet.create({
  
  header: {
    backgroundColor: "white",
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  panelHeader: {
    alignItems: 'center',
  },
  
  panelHandle: {
    width: 74,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#000000',
    marginBottom: 26
  }
});

export default BottomPopupStyle;