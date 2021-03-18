import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import TouchableMapBarStyle from "./TouchableMapBarStyle";

function TouchableMapBar (props: any) {
    let marginBottom = parseInt(props.marginBottom);
    let marginTop = parseInt(props.marginTop);
    let flex = parseInt(props.flex);

    return (
        <View>
            <TouchableOpacity
                style={[
                    TouchableMapBarStyle.container,
                    { marginBottom: marginBottom, marginTop: marginTop }
                ]}
            >
                <Text style={TouchableMapBarStyle.insideText}>
                    {props.directionType + ":"}{" "}
                </Text>
                <Text
                    style={[TouchableMapBarStyle.directionText, { flex: flex }]}
                >
                    {props.defaultInputValue}{" "}
                </Text>
                <View>
                    <Ionicons
                        style={[
                            TouchableMapBarStyle.barIcon,
                            { transform: [{ rotate: "0deg" }] }
                        ]}
                        name={props?.iconName}
                        size={22}
                        color={"#414045"}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default TouchableMapBar;
