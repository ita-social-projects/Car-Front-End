import React from "react";

interface ComponentsEnum<T> {
    [index: number]: React.FunctionComponent<T>;
}

export default ComponentsEnum;
