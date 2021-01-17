import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";
import {axiosInstance} from "../../../api-service/Interceptor";
import {routes} from '../../../environment';


const axiosInst = axiosInstance;

export default class SimpleMessageClass extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            isLoading: false
        }
    }

    componentDidMount() {
        axiosInst.get(routes.fakeUserUrl)
            .then(res => {
                const chats = res.data.chats;
                this.setState({data: chats});
            })
    }

    render() {
        return (
            <View style={{marginTop: 24}}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={({id}) => id.toString()}
                    renderItem={({item}) => (
                        <View style={styles.main}>
                            <View style={styles.button}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image style={styles.image} source={{uri: item.imageURL.toString()}}/>
                                    <View>
                                        <Text style={styles.fonts}>{item.name}</Text>
                                        <Text style={{fontSize: 11, paddingTop: 10}}>{item.position} </Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={{paddingTop: 12,}}
                                                  onPress={() => this.props.navigation.navigate("Chat", item.name)}>
                                    <View><Ionicons name={'chatbubbles'} size={20}/></View>
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
        borderBottomColor: '#C1C1C5',
        height: 68,
        alignContent: 'center',
        width: 344,
        alignSelf: 'center',
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
    },
    lottie: {
        width: 100,
        height: 100
    }

})
