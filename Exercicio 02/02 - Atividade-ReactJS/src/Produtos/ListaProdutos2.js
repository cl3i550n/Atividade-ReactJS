import React from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import produtos from './produtos'

export default props =>{
    const produtoRender = ({ item: p}) =>{
        return <Text> {p.id} {p.nome} - {p.preco} </Text>
    }
    return (
        <>
            <Text style={styles.fonte}>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </>
    )
}

const styles = StyleSheet.create({
    fonte: {
      backgroundColor: '#fff',
      textAlign: 'center',
      fontSize: 20
    },
  });