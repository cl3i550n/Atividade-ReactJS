import React from 'react'
import { Text, StyleSheet } from 'react-native'
import produtos from './produtos'

export default props => {
    function obterLista() {
        return produtos.map(p => {
            return (
                <Text key={p.id}>
                    {p.id} {p.nome} tem preço R$ {p.preco}
                </Text>
            )
        })
    }
    return (
        <>
            <Text style={styles.fonte}>
                Lista de Produtos V1
            </Text>
            {obterLista()}
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