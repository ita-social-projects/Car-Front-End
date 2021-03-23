import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DM from "../styles/DM";
import HeaderEllipsisStyle from "./HeaderEllipsisStyle";

const HeaderEllipsis = (props: any) => (
    <TouchableOpacity onPress={props.onPress}>
        <Ionicons
            name={"ellipsis-horizontal"}
            size={30}
            color={DM("black")}
            style={HeaderEllipsisStyle.moreOptionsIcon}
        />
    </TouchableOpacity>
);

export default HeaderEllipsis;
