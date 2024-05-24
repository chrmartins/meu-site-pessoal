import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ErrorToast.css";

interface ErrorToastProps {
  message: string;
}

const ErrorToast: React.FC<ErrorToastProps> = ({ message }) => {
  React.useEffect(() => {
    toast.error(message);
  }, [message]);

  return <ToastContainer />;
};

export default ErrorToast;
