import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import PrivacyPolicyStyle from "./PrivacyPolicyStyle";
import { useTheme } from "../../components/theme/ThemeProvider";
import LinearGradient from "react-native-linear-gradient";

const TermsOfUse = () => {
    const MINSCROLLSCREEN = 0;
    const MAXSCROLLSCREEN = 1150;
    const { colors } = useTheme();
    const [unScrolled, setUnScrolled] = useState(true);
    const [yOffset, setYOffset] = useState(MINSCROLLSCREEN);

    useEffect(() => {
        yOffset > MAXSCROLLSCREEN ? setUnScrolled(false) : null;
    }, [yOffset]);

    return(
        <View style={[PrivacyPolicyStyle.pageContainer]}>
            <LinearGradient style={PrivacyPolicyStyle.background} colors={["transparent", "white"]} />
            <ScrollView style={[PrivacyPolicyStyle.scroll]}
                onScroll={event => {
                    setYOffset(event.nativeEvent.contentOffset.y);
                }}
                onScrollEndDrag={event => {
                    setYOffset(event.nativeEvent.contentOffset.y);
                }}
                scrollEventThrottle={160}
            >
                <View style={[PrivacyPolicyStyle.textContainer]}>
                    <View style={PrivacyPolicyStyle.titleTextContainer}>
                        <Text style={[PrivacyPolicyStyle.titleText]}>Term of Use</Text>
                    </View>
                    <Text style={[PrivacyPolicyStyle.descriptionText]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                        ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
                        Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                        Morbi convallis convallis diam sit amet lacinia.
                        Aliquam in elementum tellus.
                    </Text>

                    <View style={PrivacyPolicyStyle.titleTextContainer}>
                        <Text style={[PrivacyPolicyStyle.titleText]}>Lorem1</Text>
                    </View>

                    <Text style={[PrivacyPolicyStyle.descriptionText]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                        ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
                        Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                        Morbi convallis convallis diam sit amet lacinia.
                        Aliquam in elementum tellus.
                    </Text>

                    <View style={PrivacyPolicyStyle.titleTextContainer}>
                        <Text style={[PrivacyPolicyStyle.titleText]}>Lorem2</Text>
                    </View>

                    <Text style={[PrivacyPolicyStyle.descriptionText]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                        ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
                        Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                        Morbi convallis convallis diam sit amet lacinia.
                        Aliquam in elementum tellus.
                    </Text>

                    <View style={PrivacyPolicyStyle.titleTextContainer}>
                        <Text style={[PrivacyPolicyStyle.titleText]}>Lorem3</Text>
                    </View>

                    <Text style={[PrivacyPolicyStyle.descriptionText]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                        ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
                        Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                        Morbi convallis convallis diam sit amet lacinia.
                        Aliquam in elementum tellus.
                    </Text>
                </View>
            </ScrollView>
            <View style={[PrivacyPolicyStyle.button]}>
                <TouchableOpacity
                    style={[PrivacyPolicyStyle.button, unScrolled ?
                        { backgroundColor: colors.neutralDark } :
                        { backgroundColor: colors.hover }]}
                    disabled={unScrolled}
                    onPress={() => {
                        console.log(yOffset);
                    }}
                >
                    <Text style={[PrivacyPolicyStyle.buttonText, { color: colors.white }]}>Accept</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TermsOfUse;