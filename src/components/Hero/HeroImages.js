import React from "react";
import styles from "./HeroImages.module.css";
import person1 from "../../assets/images/col_1.png";
import person2 from "../../assets/images/col_2.png";
import person3 from "../../assets/images/col_3.png";
import person4 from "../../assets/images/col_4.png";
import person5 from "../../assets/images/col_5.png";
import person6 from "../../assets/images/col_6.png";
import person7 from "../../assets/images/col_7.png";
import person8 from "../../assets/images/col_8.png";

const HeroImages = () => {
  return (
    <div className={styles.heroImages}>
      <div className={styles.leftColumn}>
        <img
          src={person1}
          alt="Hero illustration 1"
          className={styles.mainImage}
        />
        <img
          src={person2}
          alt="Hero illustration 2"
          className={styles.secondaryImage}
        />
        <img
          src={person3}
          alt="Hero illustration 3"
          className={styles.tertiaryImage}
        />
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.topRow}>
          <img
            src={person4}
            alt="Hero illustration 4"
            className={styles.smallImage}
          />
          <img
            src={person7}
            alt="Hero illustration 5"
            className={styles.mediumImage}
          />
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.imageStack}>
            <img
              src={person5}
              alt="Hero illustration 6"
              className={styles.stackImage}
            />
            <img
              src={person6}
              alt="Hero illustration 7"
              className={styles.stackImage}
            />
          </div>
          <img
            src={person8}
            alt="Hero illustration 8"
            className={styles.largeImage}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImages;
