import { setJSExceptionHandler, setNativeExceptionHandler } from "react-native-exception-handler";
import ErrorAlert from "../error-alert/ErrorAlert";
import RNRestart from "react-native-restart";
import appInsights from "../telemetry/AppInsights";

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

setJSExceptionHandler(JSErrorHandler, true);

setNativeExceptionHandler(NativeErrorHandler);
