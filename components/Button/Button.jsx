import React from 'react';
import style from "./Button.module.css";

const Button = ({ children, url }) => {
  if (url) {
    return <a href={url} className={style.link}>{children}</a>;
  }
  return <button className={style.button} onClick={(e) => e.preventDefault()}>{children}</button>
};

export default Button;
