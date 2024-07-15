import { View, Text } from 'react-native'
import React from 'react'
import { useStore } from '../../hooks/useStore'

const HomeScreen = () => {
  const { currentUser: {email} } = useStore();

  return (
    <View>
      <Text>Usuario reciente obtenido: {email}</Text>
    </View>
  )
}

export default HomeScreen