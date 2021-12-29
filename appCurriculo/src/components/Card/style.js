import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#575757',
    shadowColor: '#000',
    elevation: 5,
  },
  card_header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  card_header_title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d1d1d1',
  },
});

export default style;
