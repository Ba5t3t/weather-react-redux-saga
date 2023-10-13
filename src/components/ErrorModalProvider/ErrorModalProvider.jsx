import React, { useState } from "react";
import { createContext } from "react";

import "./Modal.styles.css";
const Context = createContext();

export const ErrorModalProvider = ({ children }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const toggleErrorModal = () => setIsVisibleModal((prev) => !prev);

  const value = {
    toggleErrorModal,
    isVisibleModal,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
{
  /* <div className='modal-overlay'>
      <div className='modal'>
        <span className='modal-close'>&times;</span>
        This is my modal
      </div>
    </div> */
}
