import React from "react";

const ErrorHandlerContext = React.createContext({
    show: false,
    setShowPopup: (action: boolean) => {action;}
});

export default ErrorHandlerContext;