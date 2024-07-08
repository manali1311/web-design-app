import React from "react";
import styles from "./StepCard.module.css";

const StepCard = ({ number, title, description, icon }) => {
  return (
    <div className={styles.stepCard}>
      <div className={styles.iconContainer}>
        <img src={icon} alt={`Step ${number} icon`} className={styles.icon} />
      </div>
      <div className={styles.stepNumber}>Step {number}</div>
      <h3 className={styles.stepTitle}>{title}</h3>
      <p className={styles.stepDescription}>{description}</p>
    </div>
  );
};

export default StepCard;
