import React, { useContext } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../auth/AuthProvider";
import * as RootNavigation from "../../components/navigation/RootNavigation";
import { ExceptionStyle } from "./ExceptionStyle";
import { useNavigation } from "@react-navigation/native";

export function Exception(props: any) {
    const navigation = useNavigation();
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
                        navigation.navigate("Login");
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
                        RootNavigation.navigate("AppTabs", {});
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
}
