/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./SocialLinks.module.css";
import facebookImg from "../../assets/images/logo-facebook.png";
import twitterImg from "../../assets/images/logo-twitter.png";
import instagramImg from "../../assets/images/logo-instagram.png";
import githubImg from "../../assets/images/logo-github.png";

const SocialLinks = () => {
  const socialIcons = [
    {
      src: facebookImg,
      alt: "Facebook",
    },
    {
      src: twitterImg,
      alt: "Twitter",
    },
    {
      src: instagramImg,
      alt: "Instagram",
    },
    {
      src: githubImg,
      alt: "GitHub",
    },
  ];

  return (
    <div className={styles.socialLinks}>
      {socialIcons.map((icon, index) => (
        <a key={index} href="#" className={styles.socialLink}>
          <img src={icon.src} alt={icon.alt} className={styles.socialIcon} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
