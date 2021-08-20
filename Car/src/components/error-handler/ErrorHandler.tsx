import { setJSExceptionHandler, setNativeExceptionHandler } from "react-native-exception-handler";
import ErrorAlert from "../error-alert/ErrorAlert";

const JSErrorHandler = error => {
    ErrorAlert("Ups, something went wrong");
    console.log(error);
};

setJSExceptionHandler(JSErrorHandler, true);

setNativeExceptionHandler(JSErrorHandler);
