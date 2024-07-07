import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, ActivityIndicator, Button } from 'react-native';
import CharacterSW from './CharacterSW';

export default function CharactersSWList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actualCharacter, setActualCharacter] = useState("");

  const changeActualCharacter = (characterName) => {
    setActualCharacter(characterName);
  };

  const [buttonCounter, setButtonCounter] = useState(0);

  const incrementCounter = () => {
    setButtonCounter(buttonCounter + 1);
  };

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
    // console.log(data);
  };

  const renderItem = ({ item }) => <CharacterSW character={item} changeActualCharacter={changeActualCharacter} actualCharacter={actualCharacter}/>;

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

  console.log("\n--- RENDERIZADO LISTA ---\n");

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
      <Text style={styles.bottomText}>
        Personaje actual: {actualCharacter}
      </Text>
      <Button title={`Contador general ${buttonCounter}`} onPress={incrementCounter} />
    </View>
  )
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomText: {
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
    color: 'white',
    backgroundColor: 'red',
  },
});
