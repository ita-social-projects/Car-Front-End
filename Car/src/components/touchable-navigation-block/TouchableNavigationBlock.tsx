import React from "react";
import {
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {
    ZERO_SIZE_INDENT
} from "../../constants/GeneralConstants";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "../theme/ThemeProvider";
import TouchableNavigationBlockStyle from "./TouchableNavigationBlockStyle";
import TouchableNavigationBlockProps from "./TouchableNavigationBlockProps";

const TouchableNavigationBlock = (props: TouchableNavigationBlockProps) => {
    const { colors } = useTheme();

    const sizeOfScreenComparerHeight = 600;
    const screenResComparerHeight = 850;
    const screenHeight = Dimensions.get("screen").height;

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
                                    marginTop: "3%",
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
                                    flex: 1,
                                    borderBottomLeftRadius: 6,
                                    width: props.width,
                                    aspectRatio: 1.17,
                                    // height: props.height,
                                    marginTop: (screenHeight > sizeOfScreenComparerHeight) ? ("2.5%") : ("1.9%"),
                                    marginLeft: (screenHeight > sizeOfScreenComparerHeight) ? ("-2.9%") : ("-3.6%"),
                                    top: (screenHeight > sizeOfScreenComparerHeight) &&
                                        (screenHeight < screenResComparerHeight) ?
                                        ("2.7%") : (ZERO_SIZE_INDENT),
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
