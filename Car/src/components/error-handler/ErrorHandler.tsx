import { setJSExceptionHandler, setNativeExceptionHandler } from "react-native-exception-handler";
import appInsights from "../telemetry/AppInsights";
import {
    getUnhandledPromiseRejectionTracker,
    setUnhandledPromiseRejectionTracker,
} from "react-native-promise-rejection-utils";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import ErrorHandlerContext from "./ErrorHandlerContext";
import NetInfo from "@react-native-community/netinfo";

const ErrorHandler = ({ children }) => {
    const [show, setShowPopup] = useState(false);
    const value1 = useMemo(
        () => ({ show }),
        [show]
    );

    async function GetConnection () {
        const connection = await NetInfo.fetch();

        if (connection.isInternetReachable === null)
            setTimeout(GetConnection);
        else if (!connection.isInternetReachable)
            setShowPopup(true);
    }

    useEffect(() => {
        GetConnection();

        return () => {
            GetConnection();
        };
    });

    const prevTracker = getUnhandledPromiseRejectionTracker();

    const JSErrorHandler = (error, isFatal) => {
        appInsights.trackException({ exception: error });
        if(isFatal){
            setShowPopup(true);
        }
    };

    const NativeErrorHandler = error => {
        appInsights.trackException({ exception: error });
        setShowPopup(true);
    };

    const UnhandledPromiseRejectionErrrorHandler = (id,error) => {
        if(!axios.isCancel(error))
        {
            if(axios.isAxiosError(error)) {
                setShowPopup(true);
            }
        }
        if (prevTracker !== undefined) {
            prevTracker(id, error);
        }
    };

    setUnhandledPromiseRejectionTracker(UnhandledPromiseRejectionErrrorHandler);

    setJSExceptionHandler(JSErrorHandler, true);

    setNativeExceptionHandler(NativeErrorHandler);

    return(
        <ErrorHandlerContext.Provider value={value1}>
            {children}
        </ErrorHandlerContext.Provider>
    );
};

export default ErrorHandler;