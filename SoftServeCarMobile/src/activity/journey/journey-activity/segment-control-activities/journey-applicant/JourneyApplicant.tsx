import React, { useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { JourneyApplicantStyle } from './JourneyApplicantStyle';

const ApplicantProfile = (user: any) => {

    const [avatar] = useState(
        <ActivityIndicator style={JourneyApplicantStyle.headerUserAvatar} size="large" color="black" />);

    return (
        <>
            <View style={JourneyApplicantStyle.headerContainer}>
                {avatar}
                <View style={JourneyApplicantStyle.headerUserInformation}>
                    <Text style={JourneyApplicantStyle.headerUserName}>
                        {Object.entries(user).length ?
                            (user?.name + " " + user?.surname) : ''}
                    </Text>
                    <Text style={JourneyApplicantStyle.headerUserAdditionalData}>
                        {Object.entries(user).length ? user?.position : ''}
                    </Text>
                    <Text style={JourneyApplicantStyle.headerUserAdditionalData}>
                        123 rides, 2 badges
                    </Text>
                </View>
                <View style = {JourneyApplicantStyle.buttonContainer}>
                    <Icon.Button
                        name='message-text'
                        backgroundColor='#F2F2F2'
                        color='black'
                        borderRadius={0}
                        onPress = {() => {}}
                    >
                        <Text style = {JourneyApplicantStyle.buttonText}>Message</Text>
                    </Icon.Button>
                </View>
            </View>
            
            <View style = {JourneyApplicantStyle.footerContainer}>
                <Text style = {{height:50, width:300}}>
                    Details
                </Text>
                <Text style = {{height:50, width:300}}>
                    Position:
                </Text>
                <Text style = {{height:380, width:300}}>
                    Location:
                </Text>
            </View>
        </>
    );
}

export default ApplicantProfile;