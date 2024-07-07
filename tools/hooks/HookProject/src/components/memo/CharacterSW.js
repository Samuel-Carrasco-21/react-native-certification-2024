import React, { memo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button, Text } from 'react-native-paper';

function CharacterSW({character, changeActualCharacter, actualCharacter}) {
  const item = {...character};

  // imprimiendo este log cuando la card se renderiza
  console.log(`Se renderiza el personaje ${item.name}; Actual: ${actualCharacter}`);

  const [likes, setLikes] = useState(0);

  const incrementLikes = () => {
    setLikes(likes + 1);
    console.log(item?.name);
    changeActualCharacter(item.name);
  };

  const decrementLikes = () => {
    setLikes(likes > 0 ? likes - 1 : 0);
    changeActualCharacter(item.name);
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>Height: {item.height}</Paragraph>
        <Paragraph>Mass: {item.mass}</Paragraph>
        <Paragraph>Hair Color: {item.hair_color}</Paragraph>
        <Paragraph>Skin Color: {item.skin_color}</Paragraph>
        <Paragraph>Eye Color: {item.eye_color}</Paragraph>
        <Paragraph>Birth Year: {item.birth_year}</Paragraph>
        <Paragraph>Gender: {item.gender}</Paragraph>
        <View style={styles.likesContainer}>
          <Button mode="contained" onPress={decrementLikes}>-</Button>
          <Text style={styles.likesText}>{likes}</Text>
          <Button mode="contained" onPress={incrementLikes}>+</Button>
        </View>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  likesText: {
    marginHorizontal: 20,
    fontSize: 18,
  },
});

export default memo(CharacterSW, (prevProps, nextProps) => {
  const actualCharacterPrev = prevProps.actualCharacter;
  const actualCharacterNext = nextProps.actualCharacter;
  const namePrev = prevProps.character.name;
  const nameNext = nextProps.character.name;

  return actualCharacterPrev !== actualCharacterNext && namePrev === nameNext;
});

// export default CharacterSW;
