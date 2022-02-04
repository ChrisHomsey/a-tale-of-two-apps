import React from 'react';
import Button from '../Button/Button';
import styles from "./FeatureCard.module.css";

const FeatureCard = ({ title, description, url }) => {
  // Javascript
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      {/* <a href={url}>Learn More &rarr;</a> */}
      <Button href={url}>Learn More &rarr;</Button>
    </div>
  );
};

export default FeatureCard;
