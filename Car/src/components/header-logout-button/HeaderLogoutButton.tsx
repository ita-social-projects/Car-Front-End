import React, { useContext, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import HeaderLogoutButtonStyle from "./HeaderLogoutButtonStyle";
import { useTheme } from "../theme/ThemeProvider";
import ConfirmModal from "../confirm-modal/ConfirmModal";
import AuthContext from "../auth/AuthContext";

const HeaderLogoutButton = () => {
    const { colors } = useTheme();
    const { logout } = useContext(AuthContext);
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableOpacity
                style={HeaderLogoutButtonStyle.requestButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={[HeaderLogoutButtonStyle.buttonText, { color: colors.accentOrange }]}>
                    Log out
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
                }}
                disableModal={() => setModalVisible(false)}
            />
        </>
    );
};

export default HeaderLogoutButton;