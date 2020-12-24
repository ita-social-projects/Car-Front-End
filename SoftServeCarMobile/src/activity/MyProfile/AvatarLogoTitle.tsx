import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native'
import UserWithAvatarDTO from '../../models/UserWithAvatarDTO';
import headerStyle from './AvatarLogoTitleStyle';
import "reflect-metadata";
import { container } from 'tsyringe';
import UserService from '../../services/APIService/UserService/UserService';

function AvatarLogoTitle(props: any) {
    const userService = container.resolve(UserService);
    
    const [user, setUser] = useState({} as UserWithAvatarDTO);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        userService.getUserAvatarBytesById(3)
            .then(res => {
                setUser({ ...props.user, byteOfImage: res.data });
                setLoading(false);
            })
            .catch(e => console.log(e));
    }, []);

    let userAvatar: Element;
    if (loading) {
        userAvatar = <ActivityIndicator style={headerStyle.headerUserAvatar} size="large" color="black" />
    }
    else {
        userAvatar = <Image source={{ uri: 'data:image/png;base64,' + user.byteOfImage }}
            style={headerStyle.headerUserAvatar} />
    }

    return (
        <View style={headerStyle.headerContainer}>
            {userAvatar}
            <View style={headerStyle.headerUserInformation}>
                <Text style={headerStyle.headerUserName}>
                    {props.user.name ? (props.user.name + " " + props.user.surname) : null}
                </Text>
                <Text style={headerStyle.headerUserAdditionalData}>
                    {props.user.position ? props.user.position : null}
                </Text>
                <Text style={headerStyle.headerUserAdditionalData}>
                    123 rides, 2 badges
                </Text>
            </View>
        </View>
    );
}

export default AvatarLogoTitle;