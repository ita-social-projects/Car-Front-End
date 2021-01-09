import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import headerStyle from './AvatarLogoTitleStyle';
import "reflect-metadata";
import { container } from 'tsyringe';
import UserService from '../../services/APIService/UserService/UserService';
import { AuthContext } from '../../components/auth/AuthProvider';

function AvatarLogoTitle(props: any) {
    const userService = container.resolve(UserService);
    const { user } = useContext(AuthContext);
    const [avatar, setAvatar] = useState(
        <ActivityIndicator style={headerStyle.headerUserAvatar} size="large" color="black" />);

    useEffect(() => {
        userService.getAvatar(Number(user?.id))
            .then(result => {
                const byteOfImage = JSON.stringify(result.request._response);
                if (!result.data) {
                    setAvatar(<Image source={{ uri: 'data:image/png;base64,' + byteOfImage }}
                        style={headerStyle.headerUserAvatar} />)
                }
                else {
                    setAvatar(<Image source={require('../../../images/default-user-photo.jpg')}
                        style={headerStyle.headerUserAvatar} />)
                }
            })
            .catch(e => {
                console.log(e); 
                setAvatar(<Image source={require('../../../images/default-user-photo.jpg')}
                    style={headerStyle.headerUserAvatar} />)
            });
    }, []);

    return (
        <View style={headerStyle.headerContainer}>
            {avatar}
            <View style={headerStyle.headerUserInformation}>
                <Text style={headerStyle.headerUserName}>
                    {Object.entries(props.user).length ?
                        (props.user.name + " " + props.user.surname) : null}
                </Text>
                <Text style={headerStyle.headerUserAdditionalData}>
                    {Object.entries(props.user).length ? props.user.position : null}
                </Text>
                <Text style={headerStyle.headerUserAdditionalData}>
                    123 rides, 2 badges
                </Text>
            </View>
        </View>
    );
}

export default AvatarLogoTitle;