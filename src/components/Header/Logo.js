import React from "react";
import styles from "./Logo.module.css";
import logoImg from "../../assets/images/logo.png";

const Logo = () => {
  return <img src={logoImg} alt="Grizzly Force Logo" className={styles.logo} />;
};

export default Logo;
