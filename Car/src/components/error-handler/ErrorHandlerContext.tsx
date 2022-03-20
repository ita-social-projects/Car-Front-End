import React from "react";

const ErrorHandlerContext = React.createContext({
    show: false,
    setShowPopup: (a: boolean) => {a!=undefined;}
});

export default ErrorHandlerContext;