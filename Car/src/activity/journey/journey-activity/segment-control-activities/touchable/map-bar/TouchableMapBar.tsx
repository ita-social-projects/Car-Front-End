import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import TouchableMapBarStyle from "./TouchableMapBarStyle";

function TouchableMapBar(props: any) {
    let marginBottom = parseInt(props.marB);
    let marginTop = parseInt(props.marT);
    
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
                <Text style={TouchableMapBarStyle.directionText}>
                    {props.defaultInputValue}{" "}
                </Text>
                <View>
                    <Ionicons
                        style={[
                            TouchableMapBarStyle.barIcon,
                            { transform: [{ rotate: 0 + "deg" }] }
                        ]}
                        name={props?.iconName}
                        size={20}
                        color={"black"}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default TouchableMapBar;
