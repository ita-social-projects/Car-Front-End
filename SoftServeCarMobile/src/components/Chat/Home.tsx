import React, {useState, useEffect} from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

import {
    Actions,
} from 'react-native-router-flux'

const Home = (props) => {

    const [name, setName] = useState('');
    useEffect(() => {
        fetch('http://10.0.2.2:61658/api/value', {method: "GET"}).then(res => console.log(res)).catch(err => console.log(err));
    })
        
        return (
            <View>
                <Text>Hello</Text>
            </View>
        );
    }


export default Home;