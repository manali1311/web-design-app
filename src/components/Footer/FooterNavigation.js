/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./FooterNavigation.module.css";

const FooterNavigation = () => {
  const navigationSections = [
    {
      title: "Product",
      links: [
        "Download",
        "Pricing",
        "Locations",
        "Server",
        "Countries",
        "Blog",
      ],
    },
    {
      title: "Engage",
      links: [
        "Grizzling?",
        "FAQ",
        "Tutorials",
        "About Us",
        "Privacy Policy",
        "Terms of Service",
      ],
    },
    {
      title: "Earn Money",
      links: ["Affiliate", "Become Partner"],
    },
  ];

  return (
    <nav className={styles.footerNavigation}>
      {navigationSections.map((section, index) => (
        <div key={index} className={styles.navSection}>
          <h3 className={styles.sectionTitle}>{section.title}</h3>
          <ul className={styles.linkList}>
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href="#" className={styles.link}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default FooterNavigation;
