import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BadSearchResultStyle from "./BadSearchResultStyle";
import * as navigation from "../../../../../../components/navigation/Navigation";
import DM from "../../../../../../components/styles/DM";

const BadSearchResult = () => {
    return (
        <View style={[BadSearchResultStyle.container, { backgroundColor: DM("#FFFFFF") }]}>
            <View style={BadSearchResultStyle.textContainer}>
                <Text style={[BadSearchResultStyle.text, { color: DM("#000000") }]}>
                    Couldn't find results from your search criteria
                </Text>
            </View>
            <View style={BadSearchResultStyle.imageContainer}>
                <Image
                    style={BadSearchResultStyle.image}
                    source={require("../../../../../../../assets/images/journey/bad-seacrh-result.png")}
                />
            </View>
            <View style={BadSearchResultStyle.buttonContainer}>
                <TouchableOpacity
                    style={[BadSearchResultStyle.button, { backgroundColor: DM("#000000") }]}
                    onPress={() => {
                        navigation.navigate("Search Journey");
                    }}
                >
                    <Text style={[BadSearchResultStyle.buttonText, { color: DM("#FFFFFF") }]}>
                        Create Journey Request
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BadSearchResult;
