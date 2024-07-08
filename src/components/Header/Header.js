import React from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import AccountButtons from "./AccountButtons";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
        <Navigation />
        <AccountButtons />
      </div>
    </header>
  );
};

export default Header;
