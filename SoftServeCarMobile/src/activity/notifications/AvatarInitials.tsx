import React from 'react'
import { View, Text } from 'react-native'

const AvatarInitials = (props:any) => {
    const getInitials = (name: string) => {        
        let names = name.split(' ')
        return names[0][0]+ names[names.length-1][0]
    }
    
    return (
        <View style={{borderRadius: 40, backgroundColor: props.userColor, padding: 20}}>
            <Text style={{color: 'white', fontSize: 20}}>{getInitials(props.userName)}</Text>
        </View>
    )
}

export default AvatarInitials
