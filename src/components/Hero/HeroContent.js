import React from "react";
import styles from "./HeroContent.module.css";

const HeroContent = () => {
  return (
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>
        modern <br /> temp labour{" "}
        <span className={styles.highlight}>solutions</span>
      </h1>
      <div className={styles.buttonGroup}>
        <button className={styles.findWorkersButton}>Find Workers</button>
        <button className={styles.findJobButton}>Find a Job</button>
      </div>
    </div>
  );
};

export default HeroContent;
