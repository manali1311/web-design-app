import React from "react";
import styles from "./HowItWorks.module.css";
import StepCard from "./StepCard";
import icon1 from "../../assets/images/IconDual.png";
import icon2 from "../../assets/images/IconDual (1).png";
import icon3 from "../../assets/images/IconDual (2).png";
import icon4 from "../../assets/images/IconDual (3).png";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Quick Signup",
      description: "Sign up quickly and easily to get started.",
      icon: icon1,
    },
    {
      number: 2,
      title: "Post Jobs 24/7",
      description:
        "Use our mobile app or web platform from the office or on the go, any time of day",
      icon: icon2,
    },
    {
      number: 3,
      title: "View Matches",
      description:
        "With thousands of ready-to-go workers you can watch your jobs being filled in real time",
      icon: icon3,
    },
    {
      number: 4,
      title: "We Do The Rest!",
      description: "We take care of payroll, deductions and insurance",
      icon: icon4,
    },
  ];

  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>How</span> on-demand staffing works
        </h2>
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
