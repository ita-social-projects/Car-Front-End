import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {routes} from '../../../environment';


const SimpleMessage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(routes.valueUrl)
            .then((response) => response.json())
            .then((json) => {
                setData(json.chats as []);
                console.log(data);
            });

    }, []);


    return <View style={styles.container}/>;

}

export default SimpleMessage;

export const styles = StyleSheet.create({
    image: {

        width: 56,
        height: 56,
        borderRadius: 50
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        left: 5,
        right: 0,
        top: 5,
        bottom: 0,
        padding: 5,
        margin: 5
    },
    fonts: {
        fontFamily: "OpenSans",
        fontWeight: '700',
        top: 15
    },
    refIcon: {
        top: 6,
        width: 20,
        height: 20,
        left: 2,
        right: 0
    }

})
