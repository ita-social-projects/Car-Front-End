import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DM from "../styles/DM";
import TouchableMapBarStyle from "./TouchableMapBarStyle";

const TouchableMapBar = (props: any) => {
    let marginBottom = parseInt(props.marginBottom);
    let marginTop = parseInt(props.marginTop);
    let flex = parseInt(props.flex);

    return (
        <View>
            <TouchableOpacity
                style={[
                    TouchableMapBarStyle.container,
                    {
                        marginBottom: marginBottom,
                        marginTop: marginTop,
                        backgroundColor: DM("white"),
                    }
                ]}
            >
                <Text style={[TouchableMapBarStyle.insideText,
                    { color: DM("#909095"), }
                ]}>
                    {props.directionType + ":"}{" "}
                </Text>
                <Text
                    style={[TouchableMapBarStyle.directionText,
                        { flex: flex, color: DM("black"), }]}
                >
                    {props.defaultInputValue}{" "}
                </Text>
                <View>
                    <Ionicons
                        style={[
                            TouchableMapBarStyle.barIcon,
                            { transform: [{ rotate: "0deg" }], borderColor: DM("#EEEEEE") }
                        ]}
                        name={props?.iconName}
                        size={22}
                        color={"#414045"}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TouchableMapBar;
