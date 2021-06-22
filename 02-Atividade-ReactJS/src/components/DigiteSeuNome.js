import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

export default props => {
    const [nome, setNome] = useState('')
    return (
        <View>
            <Text>Seu nome é: {nome}</Text>
            <TextInput
                placeholder="Digite seu Nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    fonte: {
      backgroundColor: '#fff',
      textAlign: 'center',
      fontSize: 20
    },
  });