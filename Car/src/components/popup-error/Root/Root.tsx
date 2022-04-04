import React, { useContext } from "react";
import { View } from "react-native";

import Popup from "../Popup/Popup";
import RNRestart from "react-native-restart";
import ErrorContextHandler from "../../error-handler/ErrorHandlerContext";

const Root = ({ children }) => {
    const { show } = useContext(ErrorContextHandler);

    return (
        <View style={{ flex: 1 }}>
            {children}
            <Popup visible={show} func={() => RNRestart.Restart()}/>
        </View>
    );
};

export default Root;