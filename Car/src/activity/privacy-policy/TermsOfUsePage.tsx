import React from "react";
import { Text, View } from "react-native";
import PrivacyPolicyStyle from "./PrivacyPolicyStyle";
import { useTheme } from "../../components/theme/ThemeProvider";
import * as TermsOfUseText from "../../constants/TermsOfUseTextConstans";

const TermsOfUsePage = () => {
    const { colors } = useTheme();

    return (
        <View style={[PrivacyPolicyStyle.textContainer]}>
            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {TermsOfUseText.pageName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.importantText, { color: colors.text }]}>
                {TermsOfUseText.importantNote}
            </Text>

            <View style={[PrivacyPolicyStyle.titleTextContainer,
                { paddingBottom: 12, paddingTop: 12 }]}>
            </View>

            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {TermsOfUseText.firstParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {TermsOfUseText.secondParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {TermsOfUseText.secondParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {TermsOfUseText.thirdParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {TermsOfUseText.thirdParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {TermsOfUseText.fourthParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {TermsOfUseText.fourthParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {TermsOfUseText.fifthParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {TermsOfUseText.fifthParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {TermsOfUseText.sixthParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {TermsOfUseText.sixthParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.attentionText]}>
                    {TermsOfUseText.firstAttention}
                </Text>
            </View>

            <View style={[PrivacyPolicyStyle.titleTextContainer,
                { paddingTop: 0, paddingBottom: 0 }]}>
                <Text style={[PrivacyPolicyStyle.attentionText]}>
                    {TermsOfUseText.secondAttention}
                </Text>
            </View>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {TermsOfUseText.seventhParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {TermsOfUseText.seventhParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {TermsOfUseText.eighthParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {TermsOfUseText.eighthParagraphDescription}
            </Text>

            <View style={PrivacyPolicyStyle.titleTextContainer}>
                <Text style={[PrivacyPolicyStyle.titleText, { color: colors.text }]}>
                    {TermsOfUseText.ninthParagraphName}
                </Text>
            </View>
            <Text style={[PrivacyPolicyStyle.descriptionText, { color: colors.text }]}>
                {TermsOfUseText.ninthParagraphDescription}
            </Text>
        </View>

    );
};

export default TermsOfUsePage;