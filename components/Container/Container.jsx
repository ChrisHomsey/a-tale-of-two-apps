import React from 'react';
import styles from "./Container.module.css";

const Container = ({ children, fluid }) => {
  return (
    <div className={fluid ? styles.fluid : styles.container}>
      {children}
    </div>
  );
};

export default Container;
