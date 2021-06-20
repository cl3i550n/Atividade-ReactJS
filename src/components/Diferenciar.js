import React from 'react'
import { Text, Platform } from 'react-native'

export default props => {
    if (Platform.OS == 'android') {
        return <Text>Android</Text>
    } else if (Platform.OS == 'ios') {
        return <Text>iOS</Text>
    } else if (Platform.OS == 'web') {
        return <Text>WEB</Text>
    } else {
        return <Text>Em que mundo você vive?</Text>
    }
}