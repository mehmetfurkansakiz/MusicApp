import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={props.onSearch}
        placeholder="Search when you want to search 🔍"
      />
    </View>
  );
};

export default SearchBar;
