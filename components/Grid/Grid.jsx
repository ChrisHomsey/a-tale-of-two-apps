import React from 'react';
import styles from "./Grid.module.css";

const Grid = ({ columns, children }) => {
  const columnStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  }
  return (
    <div className={styles.grid} style={columnStyle}>
      {children}
    </div>
  );
};

export default Grid;
