import React from "react";

export const navigationRef = React.createRef<any>();

export const navigate = (name: string, params?: object) =>
    navigationRef.current?.navigate(name, params);

export const goBack = (params?: object) =>
    navigationRef.current?.goBack(params);
