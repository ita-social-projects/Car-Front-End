import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import UserDTO from '../../models/UserDTO';
import headerStyle from './AvatarLogoTitleStyle';

function AvatarLogoTitle(props: any) {
    const [user, setUser] = useState({} as UserDTO);
    const navigation  = useNavigation();

    useEffect(() => {
        fetch('http://10.0.2.2:61658/api/user/3', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                fetch('http://10.0.2.2:61658/api/user/avatar/3',
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'text/plain; charset=utf-8',
                            'Content-Encoding': 'gzip'
                        }
                    })
                    .then(res => res.text()
                        .then(byteOfImage => {
                            let currentUser = { ...data };
                            currentUser.byteOfImage = byteOfImage;
                            setUser({ ...currentUser });
                        }))
            });
    }, []);

    return (
        <View style={headerStyle.headerContainer}>
            <Image source={{ uri: 'data:image/png;base64,' + user.byteOfImage }}
                style={headerStyle.headerUserAvatar} />
            <View style={headerStyle.headerUserInformation}>
                <Text style={headerStyle.headerUserName}>{user.name + " " + user.surname}</Text>
                <Text style={headerStyle.headerUserAdditionalData}>{user.position}</Text>
                <Text style={headerStyle.headerUserAdditionalData}>123 rides, 2 badges</Text>
            </View>
        </View>
    );
}

export default AvatarLogoTitle;