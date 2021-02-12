import React from "react";

export interface IComponentsEnum<T> {
    [index:number]: React.FunctionComponent<T>;
}
