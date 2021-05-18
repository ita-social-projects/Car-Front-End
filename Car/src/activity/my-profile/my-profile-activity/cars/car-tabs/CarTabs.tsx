import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { View } from "react-native";
import AddCars from "../car-activity/add-cars/AddCars";
import Cars from "../Cars";
import EditCars from "../car-activity/edit-cars/EditCars";
import HeaderStyle from "../../../../../components/styles/HeaderStyle";
import HeaderBackButton from "../../../../../components/header-back-button/HeaderBackButton";
import DM from "../../../../../components/styles/DM";
import HeaderRemoveCarButton from "../../../../../components/header-remove-car-button/HeaderRemoveCarButton";
import ConfirmModal from "../../../../../components/confirm-modal/ConfirmModal";
import * as navigation from "../../../../../components/navigation/Navigation";
import { MODAL_SLEEP_DURATION, sleep } from "../../../../../constants/AnimationConstants";
import CarService from "../../../../../../api-service/car-service/CarService";

const StackTabs = createStackNavigator();

const CarTabs = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    const pressHandler = () => {
        setModalVisibility(true);
    };

    const deleteCar = (carId : any) => {
        setModalVisibility(false);
        CarService.deleteCar(carId).then(() => {
            (async () => sleep(MODAL_SLEEP_DURATION))().then(() => navigation.goBack());
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
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="AddCars"
                    component={AddCars}
                    options={{
                        headerTitle: "Add a Car",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="EditCars"
                    options={{
                        headerTitle: "Your Car",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton,
                        headerRight: () => HeaderRemoveCarButton({ onPress : pressHandler })
                    }}
                >
                    {(props: any) =>{
                        return (
                            <>
                                <EditCars props={props} />
                                <ConfirmModal
                                    disableModal={() => setModalVisibility(false)}
                                    visible={modalVisibility}
                                    title={"ARE YOU SURE?"}
                                    subtitle={"Do you want to remove info about your car?"}
                                    confirmText={"Yes, delete it"}
                                    cancelText={"No, keep it"}
                                    onConfirm={() => deleteCar(props.route.params.carId)}
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