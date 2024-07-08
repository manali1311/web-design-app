import React from "react";
import styles from "./NewsletterSection.module.css";

const NewsletterSection = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Subscribe to our <span className={styles.highlight}>Newsletter</span>
        </h2>
        <p className={styles.description}>
          Keep up with the Grizzly Force team!
        </p>
        <form className={styles.subscribeForm}>
          <div className={styles.inputWrapper}>
            <label htmlFor="emailInput" className={styles.visuallyHidden}>
              Email Address
            </label>
            <input
              type="email"
              id="emailInput"
              placeholder="Enter your email"
              className={styles.emailInput}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
