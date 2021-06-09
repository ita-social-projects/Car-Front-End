import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import HeaderLogoutButtonStyle from "./HeaderLogoutButtonStyle";
import RNRestart from "react-native-restart";
import DM from "../styles/DM";
import ConfirmModal from "../confirm-modal/ConfirmModal";
import AuthManager from "../auth/AuthManager";

const HeaderLogoutButton = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableOpacity
                style={HeaderLogoutButtonStyle.requestButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={[HeaderLogoutButtonStyle.buttonText, { color: DM("#EC6400") }]}>
                    Logout
                </Text>
            </TouchableOpacity>
            <ConfirmModal
                visible={isModalVisible}
                title="ARE YOU SURE?"
                subtitle="You are about to logout from the App"
                confirmText="Yes, log out"
                cancelText="No, stay"
                onConfirm={() => {
                    (async () => { await AuthManager.signOutAsync(); })().then(() =>
                        RNRestart.Restart());
                }}
                disableModal={() => setModalVisible(false)}
            />
        </>
    );
};

export default HeaderLogoutButton;