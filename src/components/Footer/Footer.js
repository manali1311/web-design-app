import React from "react";
import styles from "./Footer.module.css";
import Logo from "../Header/Logo";
import FooterNavigation from "./FooterNavigation";
import SocialLinks from "./SocialLinks";
import playStoreImg from "../../assets/images/Play Store.png";
import appStoreImg from "../../assets/images/App Store.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logoSection}>
            <Logo />
            <p className={styles.companyDescription}>
              Grizzly is a private virtual network that has unique features and
              has high security.
            </p>
            <div className={styles.appStores}>
              <img
                src={playStoreImg}
                alt="Google Play"
                className={styles.appStoreIcon}
              />
              <img
                src={appStoreImg}
                alt="App Store"
                className={styles.appStoreIcon}
              />
            </div>
          </div>
          <FooterNavigation />
        </div>
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © 2022 Grizzly, Inc. All rights reserved
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
