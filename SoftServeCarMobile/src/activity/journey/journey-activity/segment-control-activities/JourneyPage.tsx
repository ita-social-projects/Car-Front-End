import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import MenuButton from '../../../../components/BottomPopup/MenuButton';
import BottomPopup from '../../../../components/BottomPopup/BottomPopup';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as RootNavigation from '../../../../components/navigation/RootNavigation';

const JourneyPage = (props: any) => {

    const myRef = React.useRef<BottomSheet>(null);
    const renderInner = () => (
        <View style={styles.panel}>
            <MenuButton text="View profile"></MenuButton>
            <MenuButton text="Message"></MenuButton>
        </View>
    )
    
    let index = props.isOpen ? 1 : 0;
    myRef?.current?.snapTo(index);

    const renderHeader = () => (
        <View style={styles.headerTitleStyle}>
            <Text style={styles.headerTextStyle}>More options</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <View>
                <View style={{ padding: 40 }}>
                    <TouchableOpacity>
                        <Button title='Applicant' color='black' onPress={() => { RootNavigation.navigate("Applicant Page", {}); }} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    panelContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    panel: {
        height: 200,
        backgroundColor: "white",
    },
    headerTitleStyle: {
        paddingLeft: 24,
        paddingBottom: 20,
        backgroundColor: "white",

    },
    headerTextStyle: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 0.2,
        alignItems: 'center'
    }
});