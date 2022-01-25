import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = ({ heading, subHeading, backgroundImage }) => {
  return (
    <div className={styles.hero}>
      <Image className={styles.image} src={backgroundImage} layout="fill" />
      <div className={styles.overlay} />
      <header className={styles.content}>
        <h1>{heading}</h1>
        <span>{subHeading}</span>
      </header>
    </div>
  );
};

export default Hero;
