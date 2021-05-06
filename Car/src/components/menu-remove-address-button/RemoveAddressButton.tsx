import React from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import RemoveAddressButtonStyle from "./RemoveAddressButtonStyle";
import RemoveAddressButtonProps from "./RemoveAddressButtonProps";

const RemoveAddressButton = (props: RemoveAddressButtonProps) => {

    return (
        <TouchableWithoutFeedback
            style={[
                RemoveAddressButtonStyle.panelButton
            ]}
            onPress={props.onPress}
        >
            <View>
                <View style={RemoveAddressButtonStyle.wrapper}>
                    <View style={RemoveAddressButtonStyle.container}>
                        <Text
                            style={[
                                RemoveAddressButtonStyle.panelButtonTitle
                            ]}
                        >
                            {props.text}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default RemoveAddressButton;