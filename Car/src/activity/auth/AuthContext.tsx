import React from "react";
import User from "../../../models/User";

const AuthContext = React.createContext<{
    user: User;
    login: () => void;
    logout: () => void;
    loadStorageUser: () => void;
}>({
    user: null,
    login: () => {},
    logout: () => {},
    loadStorageUser: () => {}
});

export default AuthContext;
