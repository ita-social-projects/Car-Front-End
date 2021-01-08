import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TouchableNavigationBlock from './TouchableNavigationBlock'

function Journey(props: any) {
    return (
        <View style={{ backgroundColor: "white" }}>
            <TouchableNavigationBlock
                navigation={props.navigation}
                navigationName="CurrentJourney"
                blockImage={require("../../../images/journey/bermuda-116.png")}
                blockName="Current Journey"
                from="#E74394"
                to="#94308E"
                reverse={true}
                width={210}
                height={110} />
            <TouchableNavigationBlock navigation={props.navigation}
                navigationName="SearchJourney"
                blockImage={require("../../../images/journey/bermuda-searching.png")}
                blockName="Search for a Journey"
                from="#A5C500"
                to="#00A977"
                reverse={false}
                width={150}
                height={140} />
            <TouchableNavigationBlock navigation={props.navigation}
                navigationName="CreateJourney"
                blockImage={require("../../../images/journey/bermuda-delivery-car-service.png")}
                blockName="Create a Journey"
                from="#00A3CF"
                to="#5552A0"
                reverse={true}
                width={210}
                height={140} />
            <Text>Manage journeys</Text>
            
        </View>
    )
}
export default Journey;