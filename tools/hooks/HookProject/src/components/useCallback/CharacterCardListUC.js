import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, FlatList, StyleSheet, ActivityIndicator, Button } from 'react-native';
import CharacterCardUC from './CharacterCardUC';
import { TextInput } from 'react-native-paper';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function CharacterCardListUC() {
  const [name, setName] = useLocalStorage('name', '');

  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actualCharacter, setActualCharacter] = useState("");
  const [showSmallCharacters, setShowSmallCharacters] = useState(false);

  const [buttonCounter, setButtonCounter] = useState(0);

  const incrementCounter = () => {
    setButtonCounter(buttonCounter + 1);
  };

  const getPeopleFromSW = async () => {
    await fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(json => {
        setData(json.results);
        setOriginalData(json.results);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const changeActualCharacter = useCallback((characterName) => {
    setActualCharacter(characterName);
  }, []);

  // CUIDADO!
  const changingShowSmallState = () => {
    setShowSmallCharacters(!showSmallCharacters);
    changingDataToShow();
  };

  const changingDataToShow = useCallback(() => {
    console.log(showSmallCharacters);
    if (showSmallCharacters) {
      const gottenData = [...data];
      const filteredData = [...gottenData.filter(item => item.height<=150)];
      setData(filteredData);
      return;
    }
    setData(originalData);
  }, [showSmallCharacters]);

  const renderItem = useCallback(({ item }) => (
    <CharacterCardUC character={item} changeActualCharacter={changeActualCharacter} />
  ), [changeActualCharacter]);

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
      <Button title={`Mostrar personajes pequeños: ${ showSmallCharacters ? 'SI' : 'NO' }`} onPress={changingShowSmallState} color="green" />
      <Button title={`Contador general ${buttonCounter}`} onPress={incrementCounter} />
      <View>
        <Text>Enter your name:</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Name"
          style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
        />
        <Button title="Save" onPress={() => setName(name)} />
        <Text>Your name is: {name}</Text>
      </View>
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

