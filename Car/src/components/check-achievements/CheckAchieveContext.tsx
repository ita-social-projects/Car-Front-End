import React from "react";
import BadgeProps from "../badge/BadgeProps";

const CheckAchieveContext = React.createContext({
    badges: Array<BadgeProps>()
});

export default CheckAchieveContext;