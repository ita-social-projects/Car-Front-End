import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { container } from 'tsyringe';
import UserService from '../../../../../../api-service/user-service/UserService';
import { User } from '../../../../../../models/User';
import { JourneyApplicantStyle } from './JourneyApplicantStyle';

const JourneyApplicant = ({route}: any) => {
    const {userId} = route.params;
    const userService = container.resolve(UserService);
    const [user, setUser] = useState({} as User);
    const [avatar, setAvatar] = useState(
        <ActivityIndicator style={JourneyApplicantStyle.userAvatar} size="large" color="black" />);

    useEffect(() => {
        userService
          .getUser(userId)
          .then((res) => setUser(res.data))
          .catch((e) => console.log(e));
      }, []);
      
      useEffect(() => {
        userService.getAvatar(userId)
            .then(result => {
                const byteOfImage = JSON.stringify(result.request._response);

                if (byteOfImage !== "\"\"") {
                    setAvatar(<Image source={{ uri: 'data:image/png;base64,' + byteOfImage }}
                        style={JourneyApplicantStyle.userAvatar} />)
                }
                else {
                    setAvatar(<Image source={require('../../../../../../assets/images/default-user-photo.jpg')}
                        style={JourneyApplicantStyle.userAvatar} />)
                }
            })
            .catch(e => {
                console.log(e);
                setAvatar(<Image source={require('../../../../../../assets/images/default-user-photo.jpg')}
                    style={JourneyApplicantStyle.userAvatar} />)
            });
    }, []);

    return (
        <View style={JourneyApplicantStyle.mainContainer}>
            <View style={JourneyApplicantStyle.topContainer}>
                {avatar}
                <View style={JourneyApplicantStyle.userInformation}>
                    <Text style={JourneyApplicantStyle.userName}>
                        {user?.name + " " + user?.surname}
                    </Text>
                    <Text style={JourneyApplicantStyle.userAdditionalData}>
                        {user?.position }
                    </Text>
                    <Text style={JourneyApplicantStyle.userAdditionalData}>
                        123 rides, 2 badges
                    </Text>
                </View>
            </View>
            <View style = {JourneyApplicantStyle.buttonContainer}>
                <TouchableOpacity style={JourneyApplicantStyle.button} onPress = {() => {}}>
                    <Text style = {JourneyApplicantStyle.buttonText}>
                        <Ionicons name={'mail'}
                            style={JourneyApplicantStyle.buttonText}
                            color="#414045" />
                        Message
                    </Text>
                </TouchableOpacity>
            </View>          
            <View style = {JourneyApplicantStyle.separator} />
            <View style = {JourneyApplicantStyle.bottomContainer}>
                <Text style = {JourneyApplicantStyle.detailsText}>
                    Details
                </Text>
                <View style = {JourneyApplicantStyle.positionContainer}>
                    <Text style = {JourneyApplicantStyle.positionText}>
                        Position:
                    </Text>
                    <Text style = {JourneyApplicantStyle.positionData}>
                        {user?.position} 
                    </Text>
                </View>
                <View style = {JourneyApplicantStyle.locationContainer}>
                    <Text style = {JourneyApplicantStyle.locationText}>
                        Location:
                    </Text>
                    <Text style = {JourneyApplicantStyle.locationData}>
                        {user?.location}
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default JourneyApplicant;