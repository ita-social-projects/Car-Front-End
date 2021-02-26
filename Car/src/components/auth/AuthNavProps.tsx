import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AuthParamList from "./AuthParamList";

type AuthNavProps<T extends keyof AuthParamList> = {
    navigation: StackNavigationProp<AuthParamList, T>;
    route: RouteProp<AuthParamList, T>;
};

export default AuthNavProps;
