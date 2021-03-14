import React from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TouchableNavigationBlockStyle from "./TouchableNavigationBlockStyle";

const TouchableNavigationBlock = (props: any) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate(props.navigationName)}
            >
                <LinearGradient
                    style={TouchableNavigationBlockStyle.blockContainer}
                    colors={[props.from, props.to]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    {props.reverse ? (
                        <View
                            style={TouchableNavigationBlockStyle.viewContainer}
                        >
                            <Text
                                style={TouchableNavigationBlockStyle.textStyle}
                            >
                                {props.blockName}
                            </Text>
                            <Image
                                style={{
                                    width: props.width,
                                    height: props.height,
                                    marginTop: 15
                                }}
                                source={props.blockImage}
                            />
                        </View>
                    ) : (
                        <View
                            style={TouchableNavigationBlockStyle.viewContainer}
                        >
                            <Image
                                style={{
                                    width: props.width,
                                    height: props.height,
                                    marginTop: 15
                                }}
                                source={props.blockImage}
                            />
                            <Text
                                style={TouchableNavigationBlockStyle.textStyle}
                            >
                                {props.blockName}
                            </Text>
                        </View>
                    )}
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

export default TouchableNavigationBlock;
