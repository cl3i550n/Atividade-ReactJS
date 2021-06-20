import React from 'react'
import { Text, View } from 'react-native'

export default props => {
    return (
        <View>
            <Text>O Resultado é:</Text>
            {props.num % 2 == 0
            ? <Text>Par</Text>
            : <Text>Impar</Text>
            }
        </View>
    )
}