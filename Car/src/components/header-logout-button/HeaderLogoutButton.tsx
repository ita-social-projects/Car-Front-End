import React, { useContext, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import HeaderLogoutButtonStyle from "./HeaderLogoutButtonStyle";
import RNRestart from "react-native-restart";
import DM from "../styles/DM";
import ConfirmModal from "../confirm-modal/ConfirmModal";
import AuthContext from "../auth/AuthContext";

const HeaderLogoutButton = () => {
    const { logout } = useContext(AuthContext);
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
                onConfirm={async () => {
                    await logout();
                    RNRestart.Restart();
                }}
                disableModal={() => setModalVisible(false)}
            />
        </>
    );
};

export default HeaderLogoutButton;