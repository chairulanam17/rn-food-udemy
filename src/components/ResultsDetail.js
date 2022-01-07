import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ResultsDetail({ isi }) {
  return (
    <View>
      <Text>{isi.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
