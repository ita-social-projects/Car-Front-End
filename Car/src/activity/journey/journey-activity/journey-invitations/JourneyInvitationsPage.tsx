import React, { useContext, useEffect, useState } from "react";
import {
    ScrollView,
    Text, TextInput, ToastAndroid, TouchableOpacity, View
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import UserService from "../../../../../api-service/user-service/UserService";
import Invitation from "../../../../../models/invitation/Invitation";
import InvitationType from "../../../../../models/invitation/InvitationType";
import AuthContext from "../../../../components/auth/AuthContext";
import * as navigation from "../../../../components/navigation/Navigation";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import { DELETE_COUNT, ZERO } from "../../../../constants/GeneralConstants";
import { CREATING_FONT_SIZE } from "../../../../constants/JourneyConstants";
import { CreateJourneyStyle } from "../create-journey/CreateJourneyStyle";
import JourneyInvitationsPageProps from "./JourneyInvitationsPageProps";
import { JourneyInvitationsPageStyle } from "./JourneyInvitationsPageStyle";
import { RideInvitation } from "../../../../../models/journey/RideInvitation";

const JourneyInvitationsPage = (props: JourneyInvitationsPageProps) => {
    const { colors } = useTheme();
    const params = props.route.params;
    const journey = params.journey;

    const allUsers = params.allUsers;
    const [existingInvitations] = useState<Invitation[]>(
        journey ?
            journey.invitations
            : []
    );
    const [user, setUser] = useState(useContext(AuthContext).user);
    const [invitedUsers, setInvitedUsers] = useState<RideInvitation[]>(
        params.newInvitations ?? []
    );

    const addInvitationPressHandler = (): void => {
        setInvitedUsers(prevState => [...prevState, new RideInvitation({ email: "", isCorrect: false })]);
    };

    const onInvitationDeleteIconPress = (invitationIndex : number): void => {
        let updatedInvitations = new Array(...invitedUsers);

        updatedInvitations.splice(invitationIndex, DELETE_COUNT);
        setInvitedUsers(updatedInvitations);
    };

    const checkForCorrectEmail = (email: string, invitationIndex: number): void => {
        let updatedInvitations = new Array(...invitedUsers);

        if(allUsers.map(u => u?.email).includes(email)
            && email !== user?.email
            && !invitedUsers?.some((x: RideInvitation) => x.email === email))
        {
            updatedInvitations[invitationIndex] = {
                email:email, isCorrect:true
            };
            setInvitedUsers(updatedInvitations);
        }
        else
        {
            updatedInvitations[invitationIndex] = {
                email: email,
                isCorrect:false
            };
            setInvitedUsers(updatedInvitations);
        }
    };

    const getUserEmail = (id: number): string => {
        return (id === ZERO) ? "" : allUsers.find((us) => us?.id === id)!.email;
    };

    useEffect(() => {
        UserService.getUser(user!.id).then((res) => setUser(res.data));
    }, []);

    return (
        <View style={{
            flexDirection: "column",
            flex: 1
        }}>
            <ScrollView style={[CreateJourneyStyle.container, { backgroundColor: colors.white }]}>
                {
                    existingInvitations.length > ZERO && (<View style={CreateJourneyStyle.commentsView}>
                        <Text style={[CreateJourneyStyle.commentsCaption, { color: colors.primary }]}>Existing
                        invitation</Text>
                        {existingInvitations.map((us, index) => (
                            <View key={index} style={JourneyInvitationsPageStyle.row}>
                                <Text style={[JourneyInvitationsPageStyle.emailText, { color: colors.hover }]}>{
                                    getUserEmail(existingInvitations[index]!.invitedUserId)}</Text>
                                <Text style={[JourneyInvitationsPageStyle.invitationStatusText,
                                    { color: colors.hover }]}>
                                    {InvitationType[existingInvitations[index]!.type]} </Text>
                            </View>
                        ))}

                    </View>)
                }

                <View style={CreateJourneyStyle.commentsView}>
                    <Text style={[CreateJourneyStyle.commentsCaption, { color: colors.primary }]}>New invitation</Text>
                    {invitedUsers.map((us, index) => (
                        <View key={index}>
                            <TextInput
                                style={[CreateJourneyStyle.invitationInputStyle,
                                    {
                                        borderColor: invitedUsers[index].isCorrect || invitedUsers[index].email === "" ?
                                            colors.primary : colors.accentRed,
                                        color: colors.primary, marginTop: 5
                                    }]}
                                maxLength={100}
                                placeholder={"Enter invited user email"}
                                placeholderTextColor={colors.hover}
                                value={invitedUsers[index].email}
                                onChangeText={text => checkForCorrectEmail(text, index)}
                            />

                            <TouchableOpacity
                                style={JourneyInvitationsPageStyle.icon}
                                onPress={() => onInvitationDeleteIconPress(index)}
                            >
                                <Ionicons
                                    style={[
                                        { transform: [{ rotate: "0deg" }], borderColor: colors.neutralLight }
                                    ]}
                                    name={
                                        invitedUsers[index].isCorrect || invitedUsers[index].email === "" ?
                                            "close" : "alert-circle-outline"
                                    }
                                    size={22}
                                    color={colors.hover}
                                />
                            </TouchableOpacity>

                            <Text style={[{ color: colors.accentRed }]}>
                                {invitedUsers[index].isCorrect || invitedUsers[index].email === "" ?
                                    "" : "This email is incorrect, or already exists"}
                            </Text>

                            {invitedUsers[index].email !== "" && (
                                <TouchableOpacity
                                    style={JourneyInvitationsPageStyle.icon}
                                    onPress={() =>{
                                        let statusInfo : string = invitedUsers[index].isCorrect ?
                                            "Great! We found user with such an email!"
                                            : "There is no user with such an email";

                                        ToastAndroid.show(statusInfo, ToastAndroid.SHORT);
                                    }}
                                >
                                    <Ionicons
                                        style={[
                                            { transform: [{ rotate: "0deg" }], borderColor: colors.neutralLight }
                                        ]}
                                        name={
                                            invitedUsers[index].isCorrect ?
                                                "close" : "alert-circle-outline"
                                        }
                                        size={22}
                                        color={invitedUsers[index].isCorrect ? colors.hover : colors.accentRed}
                                    />
                                </TouchableOpacity>
                            )}
                        </View>
                    ))}

                </View>
                <View style={CreateJourneyStyle.publishButtonContainer}>
                    <TouchableOpacity
                        style={[CreateJourneyStyle.publishButton,
                            // eslint-disable-next-line no-magic-numbers
                            !!invitedUsers?.length && !invitedUsers[invitedUsers?.length - 1].isCorrect ?
                                { backgroundColor: colors.disable, borderColor: colors.disable }
                                :
                                { backgroundColor: colors.hover, borderColor: colors.hover }
                        ]}
                        // eslint-disable-next-line no-magic-numbers
                        disabled={ !!invitedUsers?.length && !invitedUsers[invitedUsers?.length - 1].isCorrect }
                        onPress={addInvitationPressHandler}
                    >
                        <Text style={[CreateJourneyStyle.publishButtonText,
                            {
                                fontSize: CREATING_FONT_SIZE,
                                color: colors.white
                            }]}>
                            {"Add invitation"}
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            <View style={CreateJourneyStyle.saveButonContainer}>
                <TouchableOpacity
                    style={[CreateJourneyStyle.saveButton,
                        {
                            backgroundColor: colors.hover,
                            borderColor: colors.hover
                        }]}
                    onPress={() => navigation.navigate("Journey Details", { newInvitations: invitedUsers })
                    }
                >
                    <Text style={[CreateJourneyStyle.publishButtonText,
                        {
                            fontSize: CREATING_FONT_SIZE,
                            color: colors.white
                        }]}>
                        {"Save"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default JourneyInvitationsPage;
