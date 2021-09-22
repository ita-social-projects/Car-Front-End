import React, { useState } from "react";
import {
    ScrollView,
    Text, TextInput, ToastAndroid, TouchableOpacity, View
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Invitation from "../../../../../models/invitation/Invitation";
import InvitationType from "../../../../../models/invitation/InvitationType";
import * as navigation from "../../../../components/navigation/Navigation";
import DM from "../../../../components/styles/DM";
import { DELETE_COUNT, ZERO } from "../../../../constants/GeneralConstants";
import { CREATING_FONT_SIZE } from "../../../../constants/JourneyConstants";
import { CreateJourneyStyle } from "../create-journey/CreateJourneyStyle";
import JourneyInvitationsPageProps from "./JourneyInvitationsPageProps";
import { JourneyInvitationsPageStyle } from "./JourneyInvitationsPageStyle";

const JourneyInvitationsPage = (props: JourneyInvitationsPageProps) => {
    const params = props.route.params;
    const journey = params.journey;

    const allUsers = params.allUsers;
    const [existingInvitations] = useState<Invitation[]>(
        journey ?
            journey.invitations
            : []
    );
    const [invitedUsers, setInvitedUsers] = useState<{email:string; isCorrect: boolean}[]>(
        params.newInvitations ?? []
    );

    const addInvitationPressHandler = () => {
        setInvitedUsers(prevState => [...prevState, { email:"", isCorrect:false }]);
    };

    const onInvitationDeleteIconPress = (invitationIndex : number) => {
        let updatedInvitations = new Array(...invitedUsers);

        updatedInvitations.splice(invitationIndex, DELETE_COUNT);
        setInvitedUsers(updatedInvitations);
    };

    const checkForCorrectEmail = (email: string, invitationIndex: number) => {
        let updatedInvitations = new Array(...invitedUsers);

        if(allUsers.map(u => u?.email).includes(email))
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

    const getUserEmail = (id: number) => {
        return (id === ZERO) ? "" : allUsers.find((us) => us?.id === id)!.email;
    };

    return (
        <ScrollView style={[CreateJourneyStyle.container, { backgroundColor: DM("white") }]}>
            {
                existingInvitations.length > ZERO && (<View style={CreateJourneyStyle.commentsView}>
                    <Text style={[CreateJourneyStyle.commentsCaption, { color: DM("black") }]}>Existing
                        invitation</Text>
                    {existingInvitations.map((us, index) => (
                        <View key={index} style={JourneyInvitationsPageStyle.row}>
                            <Text style={{ color: DM("#686262"), paddingTop: 5 }}>{
                                getUserEmail(existingInvitations[index]!.invitedUserId)}</Text>
                            <Text style={{ color: DM("#686262"), paddingTop: 5 }}>
                                {InvitationType[existingInvitations[index]!.type]} </Text>
                        </View>
                    ))}

                </View>)
            }

            <View style={CreateJourneyStyle.commentsView}>
                <Text style={[CreateJourneyStyle.commentsCaption, { color: DM("black") }]}>New invitations</Text>
                {invitedUsers.map((us, index) => (
                    <View key={index}>
                        <TextInput
                            style={[CreateJourneyStyle.invitationInputStyle,
                                {
                                    borderColor: DM("black"),
                                    color: DM("black"), marginTop: 5
                                }]}
                            maxLength={100}
                            placeholder={"Enter invited user email"}
                            placeholderTextColor={DM("#686262")}
                            value={invitedUsers[index].email}
                            onChangeText={text => checkForCorrectEmail(text, index)}
                        />

                        <TouchableOpacity
                            style={JourneyInvitationsPageStyle.clearIcon}
                            onPress={() => onInvitationDeleteIconPress(index)}
                        >
                            <Ionicons
                                style={[
                                    { transform: [{ rotate: "0deg" }], borderColor: DM("#EEEEEE") }
                                ]}
                                name={"close"}
                                size={22}
                                color={DM("#414045")}
                            />
                        </TouchableOpacity>

                        {invitedUsers[index].email !== "" && (
                            <TouchableOpacity
                                style={JourneyInvitationsPageStyle.statusIcon}
                                onPress={() =>{
                                    let statusInfo : string = invitedUsers[index].isCorrect ?
                                        "Great! We found user with such an email!"
                                        : "There is no user with such an email";

                                    ToastAndroid.show(statusInfo, ToastAndroid.SHORT);
                                }}
                            >
                                <Ionicons
                                    style={[
                                        { transform: [{ rotate: "0deg" }], borderColor: DM("#EEEEEE") }
                                    ]}
                                    name={
                                        invitedUsers[index].isCorrect ?
                                            "checkmark-outline"
                                            : "alert-circle-outline"
                                    }
                                    size={22}
                                    color={DM("#414045")}
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                ))}

            </View>
            <View style={[CreateJourneyStyle.publishButtonContainer,
                { flexDirection: "row" }]}>
                <TouchableOpacity
                    style={[CreateJourneyStyle.publishButton,
                        {
                            backgroundColor: DM("black"),
                            borderColor: DM("black")
                        }]}
                    onPress={addInvitationPressHandler}
                >
                    <Text style={[CreateJourneyStyle.publishButtonText,
                        {
                            fontSize: CREATING_FONT_SIZE,
                            color: DM("white")
                        }]}>
                        {"Add invitation"}
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={[CreateJourneyStyle.publishButtonContainer,
                { flexDirection: "column" }]}>

                <TouchableOpacity
                    style={[CreateJourneyStyle.publishButton,
                        {
                            backgroundColor: DM("black"),
                            borderColor: DM("black")
                        }]}
                    onPress={() => navigation.navigate("Journey Details", { newInvitations: invitedUsers })
                    }
                >
                    <Text style={[CreateJourneyStyle.publishButtonText,
                        {
                            fontSize: CREATING_FONT_SIZE,
                            color: DM("white")
                        }]}>
                        {"Save"}
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
};

export default JourneyInvitationsPage;
