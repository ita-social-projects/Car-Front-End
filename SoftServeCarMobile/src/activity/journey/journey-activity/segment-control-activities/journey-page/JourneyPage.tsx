import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import MenuButton from '../../../../../components/BottomPopup/menu-button/MenuButton';
import BottomPopup from '../../../../../components/BottomPopup/BottomPopup';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import JourneyApplicant from '../journey-applicant/JourneyApplicant';
import { JourneyPageStyle } from './JourneyPageStyle';

const StackTabs = createStackNavigator();

const JourneyPage = (props: any) => {

    const myRef = React.useRef<BottomSheet>(null);
    const renderInner = () => (
        <View style={JourneyPageStyle.panel}>
            <MenuButton text="View profile"></MenuButton>
            <MenuButton text="Message"></MenuButton>
        </View>
    )
    
    let index = props.isOpen ? 1 : 0;
    myRef?.current?.snapTo(index);

    const renderHeader = () => (
        <View style={JourneyPageStyle.headerTitleStyle}>
            <Text style={JourneyPageStyle.headerTextStyle}>More options</Text>
        </View>
    )

    const navigation = useNavigation();

    return (
        <View style={JourneyPageStyle.container}>
            <StackTabs.Navigator>
                <StackTabs.Screen name='Applicant Page' options={{title: 'SoftServian'}} component={JourneyApplicant}/>
            </StackTabs.Navigator>
            <View>
                <View style={{ padding: 40 }}>
                    <TouchableOpacity>
                        <Button title='Applicant' color='black' onPress={() => { navigation.navigate("Applicant Page", {userId: 52}); }} />
                    </TouchableOpacity>
                </View>
            </View>
            <BottomPopup
                refForChild={myRef}
                snapPoints={[0, 200]}
                renderContent={renderInner}
                initialSnap={0}
                renderHeader={renderHeader}
                enabledInnerScrolling={false}
                onCloseEnd={() => props.setIsOpen(false)}
            />
        </View>
    )
}
export default JourneyPage;