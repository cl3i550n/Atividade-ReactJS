import React, { useState } from 'react'
import { Text, Button } from 'react-native'

export default props =>{
    const [numero, setNumero] = useState(props.inicial)
    
    function inc() {
        setNumero(numero + props.passo)
    }

    function dec() {
        setNumero(numero - props.passo)
    }

    return (
        <>
            <Text>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>
    )
}