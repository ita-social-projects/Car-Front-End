import React from "react";
import User from "../../../models/User";

const returnType: any = {};

const AuthContext = React.createContext({
    user: null as User,
    login: () => returnType,
    logout: () => returnType,
    loadStorageUser: () => returnType,
});

export default AuthContext;
