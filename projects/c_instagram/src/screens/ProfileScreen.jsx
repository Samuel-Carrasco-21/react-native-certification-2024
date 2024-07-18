import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Avatar, Text, Button, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

const ProfileScreen = ({ navigation }) => {
  const user = {
    name: "Paul3",
    email: "paul3@gmail.com",
    avatar: "https://www.example.com/avatar.jpg",
    posts: 50,
    followers: 1200,
    following: 180,
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sesión cerrada");
        navigation.replace('login'); 
      })
      .catch((error) => {
        console.error("Error al cerrar sesión: ", error);
      });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user.posts}</Text>
            <Text style={styles.statLabel}>Publicaciones</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user.followers}</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user.following}</Text>
            <Text style={styles.statLabel}>Seguidos</Text>
          </View>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.body}>
          <Button
            title="Editar Perfil"
            buttonStyle={styles.button}
            onPress={() => navigation.navigate('EditProfile')}
          />
          <Button
            title="Cerrar Sesión"
            buttonStyle={styles.button}
            onPress={handleSignOut}
          />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.gallery}>
          {/* Aquí puedes agregar una cuadrícula de imágenes para simular la galería de publicaciones de Instagram */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 20,
  },
  name: {
    color: '#fff',
    marginBottom: 10,
  },
  bio: {
    color: '#aaa',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#888',
    fontSize: 14,
  },
  divider: {
    width: '80%',
    backgroundColor: '#444',
    marginVertical: 20,
  },
  body: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0095f6',
    borderRadius: 5,
    width: '90%',
    marginBottom: 10,
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
  galleryImage: {
    width: '32%',
    aspectRatio: 1,
    marginBottom: 5,
  },
});

export default ProfileScreen;