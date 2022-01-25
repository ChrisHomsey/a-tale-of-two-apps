import React from 'react';
import styles from "./SideNav.module.css";

const Item = ({ name, path }) =>{
  return (
    <li className={styles.item}>
      <a href={path}>{name}</a>
    </li>
  )
}

const SideNav = () => {
  return (
    <aside className={styles.aside}>
      <h4>Contents</h4>
      <ul>
        <Item name="Introduction" path="#intro" />
        <Item name="Product Features" path="#features" />
        <Item name="Summary" path="#summary" />
      </ul>
    </aside>
  );
};

export default SideNav;
