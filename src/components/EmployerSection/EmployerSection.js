/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./EmployerSection.module.css";
import cardImg from "../../assets/images/Employee-card.png";
import arrowImg from "../../assets/images/ArrowIcon.png";

const features = [
  {
    icon: "",
    text: "Easy to use mobile & web platform",
  },
  {
    icon: "",
    text: "<strong>45,000+</strong> workers",
  },
  {
    icon: "",
    text: "Realtime <strong>tracking</strong>",
  },
  {
    icon: "",
    text: "<strong>95%</strong> fulfillment rate",
  },
  {
    icon: "",
    text: "Preferred worker list",
  },
];

const EmployerSection = () => {
  return (
    <section className={styles.employerSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Workforce</span> At Your
            Fingertips
          </h2>
          <ul className={styles.featureList}>
            {features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <span dangerouslySetInnerHTML={{ __html: feature.text }} />
              </li>
            ))}
          </ul>
          <a href="#" className={styles.learnMoreLink}>
            Learn More
            <img src={arrowImg} alt="arrow" className={styles.arrowIcon} />
          </a>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={cardImg}
            alt="Workforce management illustration"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default EmployerSection;
