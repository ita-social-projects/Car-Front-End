import React, { ComponentProps } from 'react';
import { Text, View } from 'react-native';

const SimpleMessage = (props) => {
        return(
            <View>
                <Text>{props.mes}</Text>
            </View>
        );
}

export default SimpleMessage;