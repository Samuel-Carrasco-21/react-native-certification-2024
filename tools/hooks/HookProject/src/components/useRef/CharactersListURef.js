import React, { useState, useEffect, useMemo } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import CharacterURef from './CharacterURef';


export default function CharactersListURef() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPeopleFromSW = async () => {
    await fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(json => {
        setData(json.results);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderItem = ({ item }) => <CharacterURef character={item} />;

  useEffect(() => {
    getPeopleFromSW();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

