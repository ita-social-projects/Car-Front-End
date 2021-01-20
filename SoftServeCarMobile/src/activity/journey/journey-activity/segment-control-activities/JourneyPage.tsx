import React, { useRef } from 'react';
import {
    Text,
    View,
    Dimensions,
    FlatList,
    TouchableHighlight
} from 'react-native';
import BottomPopup from '../../../../components/bottom-popup/BottomPopup';
import BottomSheet from 'reanimated-bottom-sheet';





const data = [
    {
        id: 1,
        name: 'View profile'
    },
    {
        id: 2,
        name: 'Message'
    },
    {
        id: 2,
        name: 'Message'
    },
    {
        id: 2,
        name: 'Message'
    }
]



const renderSeparator = () => {
    return (
        <View
            style={{
                opacity: 0.3,
                backgroundColor: 'grey',
                height: 2
            }}
        />
    )
}



const JourneyPage = (props: any) => {

    const myRef = React.useRef<BottomSheet>(null);


    const renderContent = () => {
        return (
            <View>
                <FlatList
                    style={{ marginBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={renderItem}
                    extraData={data}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{
                        paddingBottom: 40
                    }}
                />
    
            </View>
        )
    }
    
    const renderItem = () => {
        return (
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#000000"
    
                onPress={() => console.log('Pressed!')}>
                <View style={{
                    width: '100%',
                    height: 44,
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginLeft: 24
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: '#000000',
                        fontWeight: 'bold',
                    }}>dsa</Text>
                </View>
            </TouchableHighlight>
    
        )
    }

    const content = () => {
        return (
            <View style={{ backgroundColor: 'white', height: Dimensions.get('window').height / 2 }}>
                <Text>Example</Text>
                <Text>Example2</Text>
            </View>
        );
    };

    if (props.isOpen == false) {
        myRef?.current?.snapTo(1)
    } else {
        myRef?.current?.snapTo(0)
    }


    return (
        <>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'papayawhip',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
            </View>
            <BottomPopup
                style={{ backgroundColor: 'white' }}
                refForChild={myRef}
                snapPoints={['0%', '30%']}
                renderContent={renderContent}
                initialSnap={0}>
            </BottomPopup>
        </>
    );
};
export default JourneyPage;