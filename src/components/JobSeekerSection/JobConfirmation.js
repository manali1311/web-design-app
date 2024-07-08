import React from "react";
import styles from "./JobSeekerSection.module.css";
import confirmImg from "../../assets/images/Confirmation.png";

const JobConfirmation = () => (
  <div className={styles.jobConfirmation}>
    <img
      src={confirmImg}
      alt="confirmation"
      className={styles.confirmationIcon}
    />
    <h3 className={styles.confirmationTitle}>
      Congrats! Job has been awarded!
    </h3>
    <p className={styles.confirmationText}>
      You can now start preparing for your job.
    </p>
  </div>
);

export default JobConfirmation;
