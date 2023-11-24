import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 10,
    flexDirection: 'row',
  },
  modalContainer: {
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
