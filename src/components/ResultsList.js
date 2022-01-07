import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ResultsDetail from './ResultsDetail';

export default function ResultsList({ title, results }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return <ResultsDetail isi={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
