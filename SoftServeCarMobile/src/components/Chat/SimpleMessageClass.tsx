import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";


export default class SimpleMessageClass extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('http://10.0.2.2:61658/api/FakeUser')
            .then((response) => response.json())
            .then((json) => this.setState({
                data: json.chats,
            })).then(() => console.log(this.state.data));

    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={({ id }, index) => id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.main}>

                            <View style={styles.button}>
                                <View style={{ flexDirection: 'row' }}>https
                                    <Image style={styles.image} source={{ uri: item.imageURL.toString() }} />
                                    <View>
                                        <Text style={styles.fonts}>{item.name}</Text>
                                        <Text style={{ fontSize: 11, paddingTop: 10 }}>{item.position} </Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={{ paddingTop: 12, }} onPress={() => this.props.navigation.navigate("Chat", item.name)}>
                                    <View><Ionicons name={'chatbubbles'} size={20}></Ionicons></View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}
                />
            </View>
        );
    }
}








export const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        borderBottomWidth: 1,
        height: 68,
        alignContent: 'center'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    fonts: {
        fontFamily: 'opensans',
        fontWeight: 'bold',
        fontSize: 13
    },
    image: {

        width: 56,
        height: 56,
        borderRadius: 50
    }

})