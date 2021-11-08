import { setJSExceptionHandler, setNativeExceptionHandler } from "react-native-exception-handler";
import ErrorAlert from "../error-alert/ErrorAlert";
import RNRestart from "react-native-restart";
import appInsights from "../telemetry/AppInsights";
import {
    getUnhandledPromiseRejectionTracker,
    setUnhandledPromiseRejectionTracker,
} from "react-native-promise-rejection-utils";
import axios from "axios";

const prevTracker = getUnhandledPromiseRejectionTracker();

const JSErrorHandler = (error, isFatal) => {
    appInsights.trackException({ exception: error });
    if(isFatal){
        ErrorAlert("Ups, something went wrong", () => RNRestart.Restart());
    }
};

const NativeErrorHandler = error => {
    appInsights.trackException({ exception: error });
    ErrorAlert("Ups, something went wrong", () => RNRestart.Restart());
};

const UnhandledPromiseRejectionErrrorHandler = (id,error) => {
    if(!axios.isCancel(error))
    {
        if(axios.isAxiosError(error)) {
            ErrorAlert("Ups, something went wrong", () => RNRestart.Restart());
        }
    }
    if (prevTracker !== undefined) {
        prevTracker(id, error);
    }
};

setUnhandledPromiseRejectionTracker(UnhandledPromiseRejectionErrrorHandler);

setJSExceptionHandler(JSErrorHandler, true);

setNativeExceptionHandler(NativeErrorHandler);