import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import yelp from '../api/yelp';

export default function ResultShowScreen() {
  //   console.log('ini data restonya', result);
  const [result, setResult] = useState(null);
  //   const id = navigation.getParam('id');
  const route = useRoute();

  //   console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(route.params.id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
