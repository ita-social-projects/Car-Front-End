import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { Animated, View } from "react-native";
import HeaderStyle from "../../../../../components/styles/HeaderStyle";
import AddressBook from "../AddressBook";
import HeaderBackButton from "../../../../../components/header-back-button/HeaderBackButton";
import { useTheme } from "../../../../../components/theme/ThemeProvider";
import AddLocation from "../address-book-activity/add-locations/AddLocation";
import EditLocation from "../address-book-activity/edit-locations/EditLocation";
import {
    MAX_OPACITY,
    ZERO_OPACITY,
} from "../../../../../constants/StylesConstants";
import {
    MODAL_SLEEP_DURATION,
    sleep
} from "../../../../../constants/AnimationConstants";
import { FIRST_ELEMENT_INDEX } from "../../../../../constants/GeneralConstants";
import RemoveAddressButton from "../../../../../components/menu-remove-address-button/RemoveAddressButton";
import * as navigation from "../../../../../components/navigation/Navigation";
import ConfirmModal from "../../../../../components/confirm-modal/ConfirmModal";
import LocationService from "../../../../../../api-service/location-service/LocationService";

const StackTabs = createStackNavigator();

export default function AddressBookTabs () {
    const { colors } = useTheme();
    const [modalVisibility, setModalVisibility] = useState(false);
    const [isVisible] = useState(false);
    const layoutOpacity = useState(new Animated.Value(ZERO_OPACITY))[FIRST_ELEMENT_INDEX];
    const addressOpacity = useState(new Animated.Value(MAX_OPACITY))[FIRST_ELEMENT_INDEX];

    const deleteLocation = (locationId : any) => {
        LocationService.delete(locationId).then(() => {
            setModalVisibility(false);
            (async () => sleep(MODAL_SLEEP_DURATION))().then(() => navigation.goBack());
        });
    };

    return (
        <View style={{ flex: 1, alignSelf: "stretch" }}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="AddressBook"
                    component={AddressBook}
                    options={{
                        headerTitle: "Address Book",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="AddLocation"
                    component={AddLocation}
                    options={{
                        headerTitle: "Add Address",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="EditLocation"
                    options={{
                        headerTitle: "Edit Address",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton,
                        headerRight:() => RemoveAddressButton({onPress: ()=> {
                            (async () => sleep(MODAL_SLEEP_DURATION))().then(
                                () => setModalVisibility(true)
                            );
                        },text: "Remove"})
                    }}
                >
                    {(props: any) => {
                        return (
                            <>
                                <Animated.View style={isVisible && [HeaderStyle.layout,
                                    { opacity: layoutOpacity, backgroundColor: colors.primary }
                                ]} />
                                <Animated.View style={[HeaderStyle.popUp,
                                    { opacity: addressOpacity, backgroundColor: colors.white }
                                ]}>
                                    <EditLocation locationId={props.route.params.carId}/>
                                </Animated.View>
                                <ConfirmModal
                                    disableModal={() => setModalVisibility(false)}
                                    visible={modalVisibility}
                                    title={"ARE YOU SURE?"}
                                    subtitle={"Do you want to delete your address information?"}
                                    confirmText={"Yes, delete it"}
                                    cancelText={"No, keep it"}
                                    onConfirm={() => deleteLocation(props.route.params.carId)}
                                />
                            </>
                        );
                    }}
                </StackTabs.Screen>
            </StackTabs.Navigator>
        </View>
    );
}
