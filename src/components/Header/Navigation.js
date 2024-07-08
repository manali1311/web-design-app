/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const navItems = [
    "Find Workers",
    "Find Jobs",
    "About Us",
    "Resources",
    "Contact",
  ];

  return (
    <nav className={styles.navigation}>
      {navItems.map((item, index) => (
        <React.Fragment key={item}>
          {index !== 0 && <div className={styles.divider} />}
          <a href="#" className={styles.navItem}>
            {item}
          </a>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Navigation;
