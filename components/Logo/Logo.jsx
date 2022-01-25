import React from "react";
import styles from "./Logo.module.css";

const Logo = ({ monochrome }) => {
  return (
    <h3 className={styles.logo}>
      Company
      <span className={monochrome ? styles.monochrome : styles.regular}>
        Logo
      </span>
    </h3>
  );
};

export default Logo;
