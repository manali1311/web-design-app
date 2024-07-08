/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./CTASection.module.css";
import arrowImg from "../../assets/images/arrow.png";
import arrow1Img from "../../assets/images/arrow1.png";

const CTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaCard}>
          <h3 className={styles.ctaTitle}>Looking for additional help?</h3>
          <a href="#" className={styles.ctaLink}>
            Find Workers
            <img src={arrowImg} alt="Arrow icon" className={styles.arrowIcon} />
          </a>
        </div>
        <div className={styles.ctaCard}>
          <h3 className={styles.ctaTitle}>Looking for extra cash?</h3>
          <a href="#" className={styles.ctaLink}>
            Find a Job
            <img
              src={arrow1Img}
              alt="Arrow icon"
              className={styles.arrowIcon}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
