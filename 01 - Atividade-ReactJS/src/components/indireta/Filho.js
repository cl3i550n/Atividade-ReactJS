import React from 'react'
import { Button } from 'react-native'

export default props => {
    function gerarNumero() {
        return Math.random()
    }

    return (
        <Button
            title="Executar"
            onPress={function () {
                const n = gerarNumero()
                props.funcao(n, 'O Valor é: ')
            }}
        />
    )
}