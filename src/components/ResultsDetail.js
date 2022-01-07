import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function ResultsDetail({ isi }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: isi.image_url }} />
      <Text style={styles.name}>{isi.name}</Text>
      <Text>
        {isi.rating} Stars, {isi.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});
