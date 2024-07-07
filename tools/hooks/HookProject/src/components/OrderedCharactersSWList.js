import React, { useState, useEffect, useMemo } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import CommonCharacterSW from './CommonCharacterSW';


export default function OrderedCharactersSWList() {
  const [data, setData] = useState([]);
  const [originalCharacters, setOriginalCharacters] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);

  const getPeopleFromSW = async () => {
    await fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(json => {
        setData(json.results);
        setOriginalCharacters(json.results);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSortAsc = () => setSortOrder('asc');
  const handleSortDesc = () => setSortOrder('desc');
  const handleResetSort = () => {
    setSortOrder('');
    setData(originalCharacters);
  };

  const sortedCharacters = useMemo(() => {
    if (sortOrder === 'asc') {
      return [...data].sort((a, b) => a.height - b.height);
    }
    
    if (sortOrder === 'desc') {
      return [...data].sort((a, b) => b.height - a.height);
    }

    return data;
  }, [data, sortOrder]);

  const renderItem = ({ item }) => <CommonCharacterSW character={item} />;

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
      <Text style={styles.sortOrderText}>
        {sortOrder === 'asc' && 'Orden: Altura de menor a mayor'}
        {sortOrder === 'desc' && 'Orden: Altura de mayor a menor'}
        {sortOrder === '' && 'Orden: Original'}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Ordenar de menor a mayor" onPress={handleSortAsc}/>
        <Button title="Ordenar de mayor a menor" onPress={handleSortDesc} color={"red"}/>
        <Button title="Resetear Orden" onPress={handleResetSort} color={"green"}/>
      </View>
      <FlatList
        data={sortedCharacters}
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
    flexDirection: 'column',
  },
  sortOrderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 16,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
});
