import { setJSExceptionHandler, setNativeExceptionHandler } from "react-native-exception-handler";
import ErrorAlert from "../error-alert/ErrorAlert";
import RNRestart from "react-native-restart";
import appInsights from "../telemetry/AppInsights";
import {
    setUnhandledPromiseRejectionTracker,
} from "react-native-promise-rejection-utils";
import axios from "axios";

const JSErrorHandler = (error, isFatal) => {
    console.log(error);
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

    console.log(error);
    if(!axios.isCancel(error))
    {
        ErrorAlert("Ups, something went wrong", () => RNRestart.Restart());
    }
};

setUnhandledPromiseRejectionTracker(UnhandledPromiseRejectionErrrorHandler);

setJSExceptionHandler(JSErrorHandler, true);

setNativeExceptionHandler(NativeErrorHandler);
