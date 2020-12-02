import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthNavProps } from '../components/navigation/AuthParamList'
import {AuthContext} from "../components/navigation/AuthProvider";

/*export default class Login extends Component {
    constructor({navigation}: AuthNavProps<"Login">){
        super({navigation});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
            </View>
        )
    }
}*/

export function Login({navigation}: AuthNavProps<"Login">){
    const { login } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title="log me in"
            onPress={()=>{
                login();
            }} />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

