import React from "react";
import {
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "../theme/ThemeProvider";
import TouchableNavigationBlockStyle from "./TouchableNavigationBlockStyle";
import TouchableNavigationBlockProps from "./TouchableNavigationBlockProps";

const TouchableNavigationBlock = (props: TouchableNavigationBlockProps) => {
    const { colors } = useTheme();

    return (
        <View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate(props.navigationName)}
            >
                <LinearGradient
                    style={[TouchableNavigationBlockStyle.blockContainer, { borderColor: colors.white, }]}
                    colors={[props.from, props.to]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    {props.reverse ? (
                        <View
                            style={TouchableNavigationBlockStyle.viewContainer}
                        >
                            <Text
                                style={[TouchableNavigationBlockStyle.textStyle,
                                    TouchableNavigationBlockStyle.textStyleAddRide]}
                            >
                                {props.blockName}
                            </Text>
                            <Image
                                style={{
                                    flex: 1.5,
                                    width: props.width,
                                    height: props.height,
                                    marginTop: (Dimensions.get('screen').height > 600) ? ('3%') : ('3%'),
                                    transform:
                                        [{
                                            scaleX: -1
                                        }]
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
                                    flex: (Dimensions.get('screen').height > 600) ? (1) : (1),
                                    width: props.width,
                                    height: props.height,
                                    marginTop: (Dimensions.get('screen').height > 600) ? ('3.9%') : ('2.3%'),
                                    marginLeft: (Dimensions.get('screen').height > 600) ? ('-2.9%') : ('-3.6%'),
                                    borderBottomLeftRadius: 6
                                }}
                                source={props.blockImage}
                            />
                            <Text
                                style={[TouchableNavigationBlockStyle.textStyle,
                                    TouchableNavigationBlockStyle.textStyleFindRide]}
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
