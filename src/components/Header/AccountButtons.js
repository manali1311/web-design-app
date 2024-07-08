import React from "react";
import styles from "./AccountButtons.module.css";

const AccountButtons = () => {
  return (
    <div className={styles.accountButtons}>
      <button className={styles.loginButton}>Login</button>
      <button className={styles.signupButton}>Open an account</button>
    </div>
  );
};

export default AccountButtons;
