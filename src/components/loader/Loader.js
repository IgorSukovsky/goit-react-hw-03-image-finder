import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

const LoaderAnimation = () => {
  return (
    <Loader
      className={styles.spinner}
      type="Rings"
      color="#00BFFF"
      height={80}
      width={80}
    />
  );
};

export default LoaderAnimation;
