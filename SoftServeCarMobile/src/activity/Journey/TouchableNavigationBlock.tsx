import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import blockStyle from "./TouchableNavigationBlockStyle"

type ManageJourneys = {
    CreateJourney: any,
    SearchJourney: any,
}

interface PropsType {
    navigation: StackNavigationProp<ManageJourneys>,
    navigationName: any,
    from: string,
    to: string,
    reverse: boolean,
    width: number,
    height: number,
    blockName: string,
    blockImage: ImageSourcePropType,
}

const TouchableNavigationBlock = (props: PropsType) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate(props.navigationName)}>
                <LinearGradient style={blockStyle.blockContainer}
                    colors={[props.from, props.to]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
                    {props.reverse == true ? (
                        <View style={blockStyle.viewContainer}>
                            <Text style={blockStyle.textStyle}>{props.blockName}</Text>
                            <Image style={{ width: props.width, height: props.height, marginTop: 15 }}
                                source={props.blockImage} />
                        </View>
                    ) :
                        (
                            <View style={blockStyle.viewContainer}>
                                <Image style={{ width: props.width, height: props.height, marginTop: 15 }}
                                    source={props.blockImage} />
                                <Text style={blockStyle.textStyle}>{props.blockName}</Text>
                            </View>
                        )}
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}
export default TouchableNavigationBlock;
