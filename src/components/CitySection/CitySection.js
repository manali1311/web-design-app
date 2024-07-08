import React from "react";
import styles from "./CitySection.module.css";
import mapImg from "../../assets/images/map-image.png";

const CitySection = () => {
  return (
    <section className={styles.citySection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Grizzly Force Cities</h2>
          <h3 className={styles.subtitle}>
            Serving{" "}
            <span className={styles.highlight}>the Greater Vancouver</span>,{" "}
            <span className={styles.highlight}>Victoria</span>,{" "}
            <span className={styles.highlight}>Okanagan</span>,{" "}
            <span className={styles.highlight}>Calgary</span> &{" "}
            <span className={styles.highlight}>Toronto</span> areas
          </h3>
        </div>
        <div className={styles.mapContainer}>
          <img
            src={mapImg}
            alt="Map of served cities"
            className={styles.mapImage}
          />
        </div>
      </div>
    </section>
  );
};

export default CitySection;
