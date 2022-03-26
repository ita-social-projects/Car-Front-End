import React from "react";
import BadgeProps from "../badge/BadgeProps";

const CheckAchievContext = React.createContext({
    badges: Array<BadgeProps>()
});

export default CheckAchievContext;