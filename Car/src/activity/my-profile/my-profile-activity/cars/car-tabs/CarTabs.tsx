import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { View } from "react-native";
import Cars from "../Cars";
import HeaderStyle from "../../../../../components/styles/HeaderStyle";
import HeaderBackButton from "../../../../../components/header-back-button/HeaderBackButton";
import { useTheme } from "../../../../../components/theme/ThemeProvider";
import HeaderRemoveCarButton from "../../../../../components/header-remove-car-button/HeaderRemoveCarButton";
import ConfirmModal from "../../../../../components/confirm-modal/ConfirmModal";
import * as navigation from "../../../../../components/navigation/Navigation";
import { MODAL_SLEEP_DURATION, sleep } from "../../../../../constants/AnimationConstants";
import { StatusCodes } from "../../../../../constants/Constants";
import CarService from "../../../../../../api-service/car-service/CarService";
import AddEditCars from "../car-activity/add-edit-cars/AddEditCars";

const StackTabs = createStackNavigator();

const CarTabs = () => {
    const { colors } = useTheme();
    const [modalVisibility, setModalVisibility] = useState(false);
    const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);
    const pressHandler = () => {
        setModalVisibility(true);
    };

    const hideDeleteConfirmModal = () => {
        setDeleteModalVisibility(false);
        (async () => sleep(MODAL_SLEEP_DURATION))().then(() => navigation.goBack());
    };

    const deleteCar = (carId : any) => {
        setModalVisibility(false);
        CarService.deleteCar(carId).then((response) => {
            response.status == StatusCodes.OK && hideDeleteConfirmModal();
        }).catch((error) => {
            error.response.status == StatusCodes.INTERNAL_SERVER_ERROR && setDeleteModalVisibility(true);
        });
    };

    return (
        <View style={{ flex: 1, alignSelf: "stretch" }}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Cars"
                    component={Cars}
                    options={{
                        headerTitle: "My Cars",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="AddCars"
                    options={{
                        headerTitle: "Add a Car",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                >
                    {() => <AddEditCars type={"add"} />}
                </StackTabs.Screen>
                <StackTabs.Screen
                    name="EditCars"
                    options={{
                        headerTitle: "Your Car",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton,
                        headerRight: () => HeaderRemoveCarButton({ onPress : pressHandler })
                    }}
                >
                    {(props: any) =>{
                        return (
                            <>
                                <AddEditCars type={"edit"} carId={props.route.params.carId} />
                                <ConfirmModal
                                    disableModal={() => setModalVisibility(false)}
                                    visible={modalVisibility}
                                    title={"ARE YOU SURE?"}
                                    subtitle={"Do you want to remove info about your car?"}
                                    confirmText={"Yes, delete it"}
                                    cancelText={"No, keep it"}
                                    onConfirm={() => deleteCar(props.route.params.carId)}
                                />
                                <ConfirmModal
                                    disableModal={() => setDeleteModalVisibility(false)}
                                    hideCancelButton={true}
                                    visible={deleteModalVisibility}
                                    title={"Unable to delete a car"}
                                    subtitle={"Car is involved in journey and can not be deleted"}
                                    confirmText={"Ok"}
                                    onConfirm={() => hideDeleteConfirmModal()}
                                />
                            </>
                        );
                    }}
                </StackTabs.Screen>
            </StackTabs.Navigator>
        </View>
    );
};

export default CarTabs;
