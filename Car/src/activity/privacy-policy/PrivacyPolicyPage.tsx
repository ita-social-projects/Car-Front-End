import React from "react";
import { Text, View } from "react-native";
import PrivacyPolicyStyle from "./PrivacyPolicyStyle";
import { useTheme } from "../../components/theme/ThemeProvider";
import * as PrivacyPolicyText from "../../constants/PrivacyPolicyTextConstants";

const PrivacyPolicyPage = () => {
    const { colors } = useTheme();

    return (
        <View style={[PrivacyPolicyStyle.textContainer]}>
            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {PrivacyPolicyText.pageName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.importantText, { color: colors.text }]}>
                {PrivacyPolicyText.importantNote}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {PrivacyPolicyText.firstParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {PrivacyPolicyText.firstParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {PrivacyPolicyText.secondParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {PrivacyPolicyText.secondParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {PrivacyPolicyText.thirdParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {PrivacyPolicyText.thirdParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {PrivacyPolicyText.fourthParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {PrivacyPolicyText.fourthParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {PrivacyPolicyText.fifthParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {PrivacyPolicyText.fifthParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {PrivacyPolicyText.sixthParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {PrivacyPolicyText.sixthParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {PrivacyPolicyText.seventhParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {PrivacyPolicyText.secondParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {PrivacyPolicyText.eighthParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {PrivacyPolicyText.eighthParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {PrivacyPolicyText.ninthParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {PrivacyPolicyText.ninthParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {PrivacyPolicyText.tenthParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {PrivacyPolicyText.tenthParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {PrivacyPolicyText.eleventhParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {PrivacyPolicyText.eleventhParagraphDesription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {PrivacyPolicyText.twelfthParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {PrivacyPolicyText.twelfthParagraphDescription}
            </Text>
        </View>

    );
};

export default PrivacyPolicyPage;