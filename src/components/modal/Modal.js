import React, { Component } from "react";

import style from "./Modal.module.css";

import PropTypes from "prop-types";

class Modal extends Component {
  state = {};

  componentDidMount() {
    document.addEventListener("keydown", this.closeModalWindow, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.closeModalWindow, false);
  }
  render() {
    return (
      <div onClick={this.props.closeModalWindow} className={style.Overlay}>
        <div className={style.Modal}>
          <img src={this.props.urlLarge} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  urlLarge: PropTypes.string.isRequired,
  closeModalWindow: PropTypes.func.isRequired,
};

export default Modal;
