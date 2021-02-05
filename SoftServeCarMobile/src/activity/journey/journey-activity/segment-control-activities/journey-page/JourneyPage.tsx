import React from 'react';
import { Text, View, Button } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import MenuButton from '../../../../../components/bottom-popup/menu-button/MenuButton';
import BottomPopup from '../../../../../components/bottom-popup/BottomPopup';
import * as RootNavigation from '../../../../../components/navigation/RootNavigation';
import JourneyPageStyle from './JourneyPageStyle';

const JourneyPage = (props: any) => {

    const myRef = React.useRef<BottomSheet>(null);
    const renderInner = () => (
        <View style={JourneyPageStyle.panel}>
            <MenuButton text="View profile"/>
            <MenuButton text="Message"/>
        </View>
    )

    let index = props.isOpen ? 1 : 0;
    myRef?.current?.snapTo(index);

    const renderHeader = () => (
        <View style={JourneyPageStyle.headerTitleStyle}>
            <Text style={JourneyPageStyle.headerTextStyle}>More options</Text>
        </View>
    )

    return (
        <View style={JourneyPageStyle.container}>
            <View>
                <View style={{ padding: 40 }}>
                    <Button title='Applicant' color='black' onPress={() => { RootNavigation.navigate("Applicant Page", {userId: 17}); }} />
                    <Button title='New Applicant' color='black' onPress={() => { RootNavigation.navigate("New Applicant Page", {}); }} />

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
