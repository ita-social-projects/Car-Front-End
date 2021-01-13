import React, {  } from 'react';
import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import {AuthContext} from "../../../auth/AuthProvider";
import {DetailsStyle} from './DetailsStyle';


const Details = () => {
    const { user, logout } = useContext(AuthContext);

    return (

        <View style={DetailsStyle.mainContainer}>
            <View style={DetailsStyle.detailsContainer}>
                <Text style={DetailsStyle.captionView}>Position</Text>
                <Text style={DetailsStyle.valueView}>{user?.position}</Text>
            </View>

            <View style={DetailsStyle.detailsContainer}>
                <Text style={DetailsStyle.captionView}>Location</Text>
                <Text style={DetailsStyle.valueColorView}>{user?.location}</Text>
            </View>

            <View style={DetailsStyle.detailsContainer}>
                <Text style={DetailsStyle.captionView}>Workspace</Text>
                <Text style={DetailsStyle.valueColorView}>{user?.location}</Text>
            </View>

            <View style = {DetailsStyle.logoutButton}>
            <Button title = 'Logout' onPress= {()=>{
                    logout();
                }}></Button>
            </View>
        </View>
    )
}

export default Details

