import React, { useContext, useState } from "react";
import { createContext } from "react";

const Context = createContext({});
export const useErrorModal = () => useContext(Context);

export const ErrorModalProvider = ({ children }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const toggleErrorModal = () => setIsVisibleModal((prev) => !prev);

  const [errorText, setErrorText] = useState({});

    const setErrorModal = (name, message) => {
      setErrorText({
        name,
        message,
      })
    }
    
  const value = {
    toggleErrorModal,
    isVisibleModal,
    errorText,
    setErrorModal
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};


