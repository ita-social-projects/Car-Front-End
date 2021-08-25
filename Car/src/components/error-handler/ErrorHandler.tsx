import { setJSExceptionHandler, setNativeExceptionHandler } from "react-native-exception-handler";
import ErrorAlert from "../error-alert/ErrorAlert";
import RNRestart from "react-native-restart";

const JSErrorHandler = (error, isFatal) => {
    if(isFatal){
        ErrorAlert("Ups, something went wrong", () => RNRestart.Restart());
    }
    console.log(error);
};

const NativeErrorHandler = error => {
    ErrorAlert("Ups, something went wrong", () => RNRestart.Restart());
    console.log(error);
};

setJSExceptionHandler(JSErrorHandler, true);

setNativeExceptionHandler(NativeErrorHandler);
