import React from "react";

export interface ComponentsEnum<T> {
    [index:number]: React.FunctionComponent<T>;
}
