import React, { useContext } from "react";
import { Text, View } from "react-native";
import * as navigation from "../../components/navigation/Navigation";
import AuthContext from "../auth/AuthContext";
import ExceptionStyle from "./ExceptionStyle";

const Exception = (props: any) => {
    const { logout } = useContext(AuthContext);
    const userMessage =
        props.route.params.errorMessage == 401
            ? "You are unauthorized. You have to log in to the app."
            : props.route.params.errorMessage == "Network error"
            ? "The site can’t be reached"
            : "Internal Server Error";
    const process401 = () => {
        return (
            <View>
                <Text
                    style={ExceptionStyle.exceptionLink}
                    onPress={() => {
                        logout();
                        navigation.navigate("Login", {});
                    }}
                >
                    Login{" "}
                </Text>
            </View>
        );
    };
    const processOtherErrors = () => {
        return (
            <View>
                <Text
                    style={ExceptionStyle.exceptionLink}
                    onPress={() => {
                        navigation.navigate("AppTabs", {});
                    }}
                >
                    Back to app
                </Text>
            </View>
        );
    };
    let action =
        props.route.params.errorMessage == 401 ||
        props.route.params.errorMessage == "Network error"
            ? process401
            : processOtherErrors;
    return (
        <View style={ExceptionStyle.container}>
            <Text style={ExceptionStyle.exceptionCode}>
                {props.route.params.errorMessage}
            </Text>
            <Text style={ExceptionStyle.exceptionMessage}>{userMessage}</Text>
            {action()}
        </View>
    );
};

export default Exception;
