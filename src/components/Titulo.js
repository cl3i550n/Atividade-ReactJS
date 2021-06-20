import React from 'react'
import { Text } from 'react-native';

export default props => {
    return (
        <>
        <Text>{props.principal}</Text>
        <Text>{props.secundario}</Text>
        </>
    )
}