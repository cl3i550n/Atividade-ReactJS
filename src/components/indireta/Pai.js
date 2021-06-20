import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Filho from './Filho'

export default props =>{
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto){
        setNum(numero)
        setTexto(texto)
    }

    return(
        <>
            <Text>{texto}{num}</Text>
            <Filho funcao={exibirValor}/>
        </>
    )
}