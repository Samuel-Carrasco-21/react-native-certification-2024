import React, { memo, useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button, Text } from 'react-native-paper';

function CharacterURef({character}) {
  const item = { ...character };

  const [likes, setLikes] = useState(0);
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  const decrementLikes = () => {
    setLikes(likes > 0 ? likes - 1 : 0);
  };

  useEffect(() => {
    if (likes > 0 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [likes]);

  const sendMessage = () => {
    if (message.length>0) {
      Alert.alert(message);
      setMessage("");
    } 
  }

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
          <Text style={styles.likesText}>Likes: {likes}</Text>
          <Button mode="contained" onPress={incrementLikes}>+</Button>
        </View>
        <View style={styles.inputSection}>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Escribe algo"
            keyboardType='text'
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>
              Send
            </Text>
          </TouchableOpacity>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: 200,
    borderRadius: 10,
  },
  inputSection: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sendButton: {
    padding: 10,
    backgroundColor: 'purple',
    borderRadius: 20,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
});

export default memo(CharacterURef);
