import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  page: {
    backgroundColor: '#3d3d3d',
    flex: 1,
    paddingTop: 20,
  },
  header_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#d1d1d1',
  },
  expertise: {
    color: '#a3a3a3',
    marginBottom: 20,
  },
  social_networks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%',
  },
  social_networks_icon: {
    color: '#000',
  },
  card_context_text: {
    color: '#b3b3b3',
    marginBottom: 15,
  },
});

export default style;
