import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [list, setList] = useState(music_data);
  const renderSong = ({item}) => <SongCard song={item} />;

  const renderSeperator = () => <View style={styles.seperator} />;

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle =
        song.title.toLowerCase() +
        song.album.toLowerCase() +
        song.artist.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        key={music_data.id}
        ItemSeparatorComponent={renderSeperator}
        data={list}
        renderItem={renderSong}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default App;
