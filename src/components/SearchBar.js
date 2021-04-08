import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.wrapper}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#e8e6e6',
    height: 42,
    borderRadius: 5,
    margin: 15,
    paddingHorizontal: 10
  },
  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: 16
  },
  icon: {
    fontSize: 24,
    alignSelf: 'center'
  }
});

export default SearchBar;