import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, Image } from 'react-native'
import { headerStyle } from './NotificationStyle';
import "reflect-metadata";
import { container } from 'tsyringe';
import UserService from '../../../api-service/user-service/UserService';
import AvatarInitials from './AvatarInitials';

const AvatarComponent = (props:any) => {
    const userService = container.resolve(UserService);
    const [isImage, setIsImage] = useState(false)

    const [avatar, setAvatar] = useState(
        <ActivityIndicator style={headerStyle.headerUserAvatar} size="large" color="black" />);
        useEffect(() => {
            userService.getAvatar(Number(props.userId))
                .then(result => {
                    const byteOfImage = JSON.stringify(result.request._response);
                    if (!result.data) {
                        setAvatar(<Image source={{ uri: 'data:image/png;base64,' + byteOfImage }}
                            style={headerStyle.headerUserAvatar} />)
                        //setIsImage(true)
                    }
                    else {
                        setAvatar(<Image source={require('../../../assets/images/default-user-photo.jpg')}
                            style={headerStyle.headerUserAvatar} />)
                    }
                })
                .catch(e => {
                    console.log(e); 
                    setAvatar(<Image source={require('../../../assets/images/default-user-photo.jpg')}
                        style={headerStyle.headerUserAvatar} />)
                });
        }, []);

    return (
        <View>
            {isImage ? 
            (
                <View>
                    {avatar}
                </View>
            ):
            (
                <AvatarInitials
                userName = {props.userName}
                userColor = {props.userColor}
                ></AvatarInitials>
            )}            
        </View>
    )
}

export default AvatarComponent
