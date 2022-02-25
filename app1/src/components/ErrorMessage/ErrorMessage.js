import React from "react";
import "./style.css";

const ErrorMessage = ({ children }) => (
    < div className="errorMessage"> {children}</div>
);

export default ErrorMessage;