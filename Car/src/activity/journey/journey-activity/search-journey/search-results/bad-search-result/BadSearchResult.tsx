import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BadSearchResultStyle from "./BadSearchResultStyle";
import * as navigation from "../../../../../../components/navigation/Navigation";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";

const BadSearchResult = () => {
    const { DM } = useTheme();

    return (
        <View style={[BadSearchResultStyle.container, { backgroundColor: DM("#FFFFFF") }]}>
            <View style={BadSearchResultStyle.textContainer}>
                <Text style={[BadSearchResultStyle.text, { color: DM("#000000") }]}>
                    NO RESULTS MATCHING YOUR {"\n"} SEARCH FILTERS
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
                        navigation.navigate("Journey Request Page", { isRequest: true, isPreviousFilter: true });
                    }}
                >
                    <Text style={[BadSearchResultStyle.buttonText, { color: DM("#FFFFFF") }]}>
                        CREATE RIDE REQUEST
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BadSearchResult;
