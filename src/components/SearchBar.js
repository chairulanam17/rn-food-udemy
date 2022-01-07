import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.background}>
      <Ionicons
        name="search"
        size={30}
        color="black"
        style={styles.iconStyle}
      />
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: '#D3D3D3',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
