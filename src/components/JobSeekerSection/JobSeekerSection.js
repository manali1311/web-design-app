/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./JobSeekerSection.module.css";
import arrowImg from "../../assets/images/ArrowIcon.png";
import JobConfirmation from "./JobConfirmation";
import JobCard from "./JobCard";

const features = [
  {
    icon: "",
    text: "User friendly mobile app",
  },
  {
    icon: "",
    text: "New jobs <strong>everyday</strong>",
  },
  {
    icon: "",
    text: "Payout in <strong>24hrs</strong>",
  },
  {
    icon: "",
    text: "Employment benefits",
  },
  {
    icon: "",
    text: "Temporary & permanent positions",
  },
];

const JobSeekerSection = () => {
  return (
    <section className={styles.jobSeekerSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Connecting You With{" "}
            <span className={styles.highlight}>Flexible Work</span>
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
          <JobCard />
          <JobConfirmation />
        </div>
      </div>
    </section>
  );
};

export default JobSeekerSection;
