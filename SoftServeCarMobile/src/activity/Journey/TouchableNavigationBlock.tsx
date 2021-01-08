import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import blockStyle from "./TouchableNavigationBlockStyle"

const TouchableNavigationBlock = (props: any) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate(props.navigationName)}>
                <LinearGradient style={blockStyle.blockContainer}
                    colors={[props.from, props.to]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
                    {props.reverse == true? (
                        <View style={blockStyle.viewContainer}>
                            <Text style={blockStyle.textStyle}>{props.blockName}</Text>
                            <Image style={{width:props.width, height:props.height, marginTop:15}}
                                source={props.blockImage} />
                        </View>
                    ) :
                        (
                            <View style={blockStyle.viewContainer}>
                                <Image style={{width:props.width, height:props.height, marginTop:15}}
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