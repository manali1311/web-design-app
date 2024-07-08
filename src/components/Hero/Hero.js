import React from "react";
import styles from "./Hero.module.css";
import HeroContent from "./HeroContent";
import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <HeroContent />
        <HeroImages />
      </div>
    </section>
  );
};

export default Hero;
