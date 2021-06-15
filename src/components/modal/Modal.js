import React from "react";
import style from "./Modal.module.css";

import PropTypes from "prop-types";

const Modal = ({ urlLarge, closeModalWindow }) => {
  return (
    <div onClick={closeModalWindow} className={style.Overlay}>
      <div className={style.Modal}>
        <img src={urlLarge} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  urlLarge: PropTypes.string.isRequired,
  closeModalWindow: PropTypes.func.isRequired,
};
export default Modal;
