import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { AuthContext } from '../../../../components/auth/AuthProvider';
import { store } from '../../../../store/store';
import { PreferencesStyle } from './PreferencesStyle';
import ChooseOptionComponent from './ChooseOptionComponent';
import UserPreferences from '../../../../models/UserPreferences';

export default function Preferences(props:any){
    
    const [isSmokingAllowed, setSmokingAllowed] = useState(() => {
        return false;
    });

    const [isEatingAllowed, setEatingAllowed] = useState(() => {
        return false;
    });
    const [comments, setComments] = useState(() => {
        return '';
    });

    const { user } = useContext(AuthContext);

    const [userPreferences, setUserPreferences] = useState({} as UserPreferences)
   
    const preferencesService = store.getState().preferencesService;

    const updatePreferences =() => {       
        const preferences: UserPreferences = {
            id: userPreferences.id,
            userId: userPreferences.userId,
            doAllowSmoking: isSmokingAllowed,
            doAllowEating: isEatingAllowed,
            comments: comments           
        }      
        preferencesService.updateUserPreferences(preferences);           
    }         

    useEffect(() => {
        preferencesService.getUserPreferences(Number(user?.id))        
        .then(res => {
            setSmokingAllowed(res.data.doAllowSmoking);
            setEatingAllowed(res.data.doAllowEating);
            setComments(res.data.comments);
            setUserPreferences(res.data);                
        })
        .catch(e => console.log(e));
    }, []);     

    useEffect(() => {       
        props.navigation.addListener('blur', updatePreferences);
        return () => {           
            props.navigation.removeListener('blur',updatePreferences)
        } 
    },[updatePreferences]);    

    return (
        <View style={PreferencesStyle.mainContainer}>             
            <ChooseOptionComponent 
                text= {'Do you allow smoking in your car?'} 
                value={isSmokingAllowed}
                onValueChanged = {(value:any) => setSmokingAllowed(value)} 
            />
            <ChooseOptionComponent 
                text= {'Do you allow eating in your car?'} 
                value={isEatingAllowed}
                onValueChanged = {(value:any) => setEatingAllowed(value)} 
            />           
           <View style={PreferencesStyle.commentsView}>
                <Text style={PreferencesStyle.commentsCaption}>Comments</Text>
                <TextInput
                    style={PreferencesStyle.TextInputStyle}          
                    multiline={true}
                    maxLength={100}
                    numberOfLines={10}
                    value = {comments}    
                    onChangeText={text => setComments(text)}     
                />
                <Text>Up to 100 symbols</Text>
            </View>
        </View>        
    )
}


