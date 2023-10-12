import React, { useState } from "react";

import "./Modal.styles.css";

export const Modal = () => {
  const [showmodal, setShowModal] = useState(false);
  const onCloseButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <span className='modal-close' onClick={onCloseButtonClick}>
          &times; {/* HTML code for a multiplication sign */}
        </span>
        This is my modal
      </div>
    </div>
  );
};
