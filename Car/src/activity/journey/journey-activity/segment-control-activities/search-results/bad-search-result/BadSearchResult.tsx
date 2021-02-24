import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BadSearchResultStyle from "./BadSearchResultStyle";
import * as navigation from "../../../../../../components/navigation/Navigation";

const BadSearchResult = () => {
    return (
        <View style={BadSearchResultStyle.container}>
            <View style={BadSearchResultStyle.textContainer}>
                <Text style={BadSearchResultStyle.text}>
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
                    style={BadSearchResultStyle.button}
                    onPress={() => {
                        navigation.navigate("Search Journey");
                    }}
                >
                    <Text style={BadSearchResultStyle.buttonText}>
                        Create Journey Request
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BadSearchResult;
