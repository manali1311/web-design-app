import React from "react";
import styles from "./JobSeekerSection.module.css";

const JobCard = () => (
  <div className={styles.jobCard}>
    <div className={styles.jobHeader}>
      <div className={styles.jobInfo}>
        <div>
          <h3 className={styles.jobTitle}>Food Production</h3>
          <p className={styles.jobLocation}>1234 Main Street</p>
        </div>
      </div>
      <div className={styles.jobPay}>
        <span className={styles.jobPayAmount}>$220</span>
        <span className={styles.jobPayDuration}>8.5 hrs</span>
      </div>
    </div>
    <div className={styles.jobTime}>
      <p>7:00 pm - 3:30 am PST 30 min paid break</p>
    </div>
  </div>
);

export default JobCard;
