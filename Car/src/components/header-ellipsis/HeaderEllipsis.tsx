import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../theme/ThemeProvider";
import HeaderEllipsisStyle from "./HeaderEllipsisStyle";

const HeaderEllipsis = (props: any) => {
    const { colors } = useTheme();

    return(
        <TouchableOpacity onPress={props.onPress}>
            <Ionicons
                name={"ellipsis-horizontal"}
                size={30}
                color={colors.primary}
                style={HeaderEllipsisStyle.moreOptionsIcon}
            />
        </TouchableOpacity>
    );
};

export default HeaderEllipsis;
