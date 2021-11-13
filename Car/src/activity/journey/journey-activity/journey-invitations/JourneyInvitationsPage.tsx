import React, { useContext, useEffect, useState } from "react";
import {
    ScrollView,
    Text, TextInput, ToastAndroid, TouchableOpacity, View
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import UserService from "../../../../../api-service/user-service/UserService";
import { HTTP_STATUS_OK } from "../../../../constants/Constants";
import InvitationType from "../../../../../models/invitation/InvitationType";
import AuthContext from "../../../../components/auth/AuthContext";
import * as navigation from "../../../../components/navigation/Navigation";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import { DELETE_COUNT, ZERO, TYPING_TIMEOUT } from "../../../../constants/GeneralConstants";
import { CREATING_FONT_SIZE } from "../../../../constants/JourneyConstants";
import { CreateJourneyStyle } from "../create-journey/CreateJourneyStyle";
import JourneyInvitationsPageProps from "./JourneyInvitationsPageProps";
import { JourneyInvitationsPageStyle } from "./JourneyInvitationsPageStyle";
import Indicator from "../../../../components/activity-indicator/Indicator";

const JourneyInvitationsPage = (props: JourneyInvitationsPageProps) => {
    const { colors } = useTheme();
    const params = props.route.params;
    const journey = params.journey;

    const [existingInvitations, setExistingInvitations] =
        useState<{email:string; id: number | null; type: number}[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(useContext(AuthContext).user);
    const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null >(null);
    const [invitedUsers, setInvitedUsers] = useState<{email:string; id: number | null}[]>(
        params.newInvitations ?? []
    );

    const addInvitationPressHandler = () => {
        setInvitedUsers(prevState => [...prevState, { email:"", id:null }]);
    };

    const onInvitationDeleteIconPress = (invitationIndex : number) => {
        let updatedInvitations = new Array(...invitedUsers);

        updatedInvitations.splice(invitationIndex, DELETE_COUNT);
        setInvitedUsers(updatedInvitations);
    };

    const checkForCorrectEmail = (email: string, invitationIndex: number) => {
        let updatedInvitations = new Array(...invitedUsers);

        updatedInvitations[invitationIndex] = {
            email:email, id:updatedInvitations[invitationIndex].id
        };
        setInvitedUsers(updatedInvitations);

        if(searchTimeout) clearTimeout(searchTimeout);
        let timeoutId = setTimeout(() => {
            UserService.getUserByEmail(email).then(res => {
                updatedInvitations = new Array(...invitedUsers);

                if(res.status === HTTP_STATUS_OK)
                {
                    updatedInvitations[invitationIndex] = {
                        email:email, id: res.data?.id ?? null
                    };
                    setInvitedUsers(updatedInvitations);
                }
                else
                {
                    updatedInvitations[invitationIndex] = {
                        email: email,
                        id: null
                    };
                    setInvitedUsers(updatedInvitations);
                }
            });
        }, TYPING_TIMEOUT);

        setSearchTimeout(timeoutId);
    };

    useEffect(() => {
        UserService.getUser(user!.id).then((res) => setUser(res.data));

        const promises: Promise<any>[] = [];

        if(journey?.invitations)
            for(let invitation of journey.invitations) {
                promises.push(UserService.getUser(invitation!.invitedUserId).then((res) => {
                    setExistingInvitations(prevstate =>
                        [...prevstate, { email: res.data!.email, id: invitation!.invitedUserId,
                            type: invitation!.type }]);
                }));
            }

        Promise.all(promises).then(() => setIsLoading(false));
    }, []);

    return (
        <>
            {isLoading && (
                <Indicator
                    size="large"
                    color={colors.hover}
                    text={"Loading information..."}
                />
            )}
            {!isLoading && (
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
                                            // getUserEmail(existingInvitations[index]!.invitedUserId)}</Text>
                                            existingInvitations[index]["email"]}</Text>
                                        <Text style={[JourneyInvitationsPageStyle.invitationStatusText,
                                            { color: colors.hover }]}>
                                            {InvitationType[existingInvitations[index]!.type]} </Text>
                                    </View>
                                ))}

                            </View>)
                        }

                        <View style={CreateJourneyStyle.commentsView}>
                            <Text style={[CreateJourneyStyle.commentsCaption,
                                { color: colors.primary }]}>New invitations</Text>
                            {invitedUsers.map((us, index) => (
                                <View key={index}>
                                    <TextInput
                                        style={[CreateJourneyStyle.invitationInputStyle,
                                            {
                                                borderColor: colors.primary,
                                                color: colors.primary, marginTop: 5
                                            }]}
                                        maxLength={100}
                                        placeholder={"Enter invited user email"}
                                        placeholderTextColor={colors.hover}
                                        value={invitedUsers[index].email}
                                        onChangeText={text => checkForCorrectEmail(text, index)}
                                    />

                                    <TouchableOpacity
                                        style={JourneyInvitationsPageStyle.clearIcon}
                                        onPress={() => onInvitationDeleteIconPress(index)}
                                    >
                                        <Ionicons
                                            style={[
                                                { transform: [{ rotate: "0deg" }], borderColor: colors.neutralLight }
                                            ]}
                                            name={"close"}
                                            size={22}
                                            color={colors.hover}
                                        />
                                    </TouchableOpacity>

                                    {invitedUsers[index].email !== "" && (
                                        <TouchableOpacity
                                            style={JourneyInvitationsPageStyle.statusIcon}
                                            onPress={() =>{
                                                let statusInfo : string = invitedUsers[index].id != null ?
                                                    "Great! We found user with such an email!"
                                                    : "There is no user with such an email";

                                                ToastAndroid.show(statusInfo, ToastAndroid.SHORT);
                                            }}
                                        >
                                            <Ionicons
                                                style={[
                                                    { transform: [{ rotate: "0deg" }],
                                                        borderColor: colors.neutralLight }
                                                ]}
                                                name={
                                                    invitedUsers[index].id != null ?
                                                        "checkmark-outline"
                                                        : "alert-circle-outline"
                                                }
                                                size={22}
                                                color={invitedUsers[index].id != null ? colors.hover : colors.accentRed}
                                            />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            ))}

                        </View>
                        <View style={CreateJourneyStyle.publishButtonContainer}>
                            <TouchableOpacity
                                style={[CreateJourneyStyle.publishButton,
                                    {
                                        backgroundColor: colors.primary,
                                        borderColor: colors.primary
                                    }]}
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
                                    backgroundColor: colors.primary,
                                    borderColor: colors.primary
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
            )}
        </>
    );
};

export default JourneyInvitationsPage;
