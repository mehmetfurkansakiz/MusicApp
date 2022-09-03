import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    padding: 10,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  info_container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  artist: {
    color: 'black',
    fontSize: 14,
  },
  year: {
    marginLeft: 10,
    color: 'gray',
    fontSize: 14,
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  soldout_title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
  },
  content_container: {
    flexDirection: 'row',
  },
  album_container: {
    marginTop: 15,
  },
  album_title: {
    color: 'black',
    fontWeight: 'bold',
  },
});
