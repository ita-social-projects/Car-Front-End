import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HeaderEllipsisStyle from "../header-ellipsis/HeaderEllipsisStyle";
import ShadowedBottomPopup from "../shadowed-bottom-popup/ShadowedBottomPopup";
import { useTheme } from "../theme/ThemeProvider";
import HeaderRequestButtonStyle from "./HeaderRequestButtonStyle";

const HeaderRequestButton = () => {
    const { colors } = useTheme();

    return(
        <TouchableOpacity
            style={HeaderRequestButtonStyle.requestButton}
            onPress={() => {
                if(ShadowedBottomPopup)
                    ShadowedBottomPopup.pressHandle();
            }}
        >
            <Ionicons
                name={"ellipsis-horizontal"}
                size={30}
                color={colors.primary}
                style={HeaderEllipsisStyle.moreOptionsIcon}
            />
        </TouchableOpacity>
    );
};

export default HeaderRequestButton;