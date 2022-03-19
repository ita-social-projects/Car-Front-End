import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import HeaderStyle from "../../../components/styles/HeaderStyle";
import Notifications from "../Notifications";
import RouteView from "../../../components/journey-new-applicant/route-view/RouteView";
import HeaderBackButton from "../../../components/header-back-button/HeaderBackButton";
import JourneyNewApplicantView from "../../../components/journey-new-applicant/journey-new-applicant-view/JourneyNewApplicantView";
import { useTheme } from "../../../components/theme/ThemeProvider";
import StopView from "../../../components/stop-view/StopView";
import JourneyCancellationView from "../../../components/notifications/notifications-types/notifications-views/cancellation-view/JourneyCancellationView";
import PassengerWithdrawalView from "../../../components/notifications/notifications-types/notifications-views/withdrawn-view/PassengerWithdrawalView";
import InvitationView from "../../../components/notifications/notifications-types/notifications-views/invitation-view/InvitationView";
import AprovedView from "../../../components/notifications/notifications-types/notifications-views/request-approved-view/AprovedView";
import RejectedView from "../../../components/notifications/notifications-types/notifications-views/request-rejected-view/RejectedView";
import AprovedPassengerView from "../../../components/notifications/notifications-types/notifications-views/request-approved-passenger-view/AprovedPassengerView";
import RejectedPassengerView from "../../../components/notifications/notifications-types/notifications-views/request-rejected-passenger-view/RejectedPassengerView";

const StackTabs = createStackNavigator();

const NotificationsTabs = () => {
    const { colors } = useTheme();

    return (
        <View style={HeaderStyle.container}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Notifications"
                    component={Notifications}
                    options={{
                        headerTitle: "Notifications",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: () => <View />
                    }}
                />
                <StackTabs.Screen
                    name="Route View"
                    component={RouteView}
                    options={{
                        headerTitle: "View Stops",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="Stop View"
                    component={StopView}
                    options={{
                        headerTitle: "View Stops",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton,

                    }}
                />
                <StackTabs.Screen
                    name="New Applicant"
                    component={JourneyNewApplicantView}
                    options={{
                        headerTitle: "New Applicant",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="Ride is Canceled"
                    component={JourneyCancellationView}
                    options={{
                        headerTitle: "Canceled Ride",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="Withdrawal"
                    component={PassengerWithdrawalView}
                    options={{
                        headerTitle: "Withdrawal",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="Invitation"
                    component={InvitationView}
                    options={{
                        headerTitle: "Invitation",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="Invitation is Accepted"
                    component={AprovedView}
                    options={{
                        headerTitle: "Invitation is Accepted",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="Invitation is Rejected"
                    component={RejectedView}
                    options={{
                        headerTitle: "Invitation is Rejected",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="Request is Approved"
                    component={AprovedPassengerView}
                    options={{
                        headerTitle: "Request is Approved",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="Request is Rejected"
                    component={RejectedPassengerView}
                    options={{
                        headerTitle: "Request is Rejected",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default NotificationsTabs;
