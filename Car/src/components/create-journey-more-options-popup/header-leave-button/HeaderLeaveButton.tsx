import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import { useTheme } from "../../theme/ThemeProvider";
import HeaderLeaveButtonStyle from "./HeaderLeaveButtonStyle";

interface HeaderLeaveButtonProps {
    onPress?: () => void,
    text?: string
}

const HeaderLeaveButton = (props: HeaderLeaveButtonProps) => {

    const { colors } = useTheme();
    const [modalVisibility, setModalVisibility] = useState(false);

    return (
        <View>

            <TouchableOpacity
                style={HeaderLeaveButtonStyle.leaveButton}
                onPress={() => { setModalVisibility(true); }}
            //onPress={()=>{console.log("777");}}
            >
                <View style={HeaderLeaveButtonStyle.leaveButtonTextContainer}>
                    <Text style={[HeaderLeaveButtonStyle.leaveButtonText, { color: colors.greenGradientTo }]}>
                        Leave
                    </Text>
                </View>
            </TouchableOpacity>

            <ConfirmModal
                disableModal={() => props.onPress}
                visible={modalVisibility}
                title={"ARE YOU SURE?"}
                subtitle={"Do you want to leave this ride?"}
                confirmText={"Yes, leave it"}
                cancelText={"No, keep it"}
                onConfirm={() => { }}
            />
        </View>
    );
};

export default HeaderLeaveButton;