import React from 'react'
import { Button, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as RootNavigation from '../../../../components/navigation/RootNavigation';

const JourneyPage = () => {
    return (
        <View>
            <View style={{padding: 40}}>
                <TouchableOpacity>
                    <Button  title = 'Applicant' color= 'black' onPress= {() => { RootNavigation.navigate("Applicant Page", {}); }} />
             </TouchableOpacity>
            </View>
        </View>
    )
}
export default JourneyPage;
