import styles from './Location.module.css';

const Location = () => {
  return (
    <section className={styles.locationSection}>
      <h1 className={styles.locationTitle}>Location</h1>

      {/* Google Maps iframe */}
      <iframe
        className={styles.mapIframe}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.971353796361!2d-79.50444332381684!3d43.7734534710966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cd330b767bfb%3A0xdbb899cc9da76d19!2sYork%20University!5e0!3m2!1sen!2sca!4v1755444109058!5m2!1sen!2sca"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <h2 className={styles.addressTitle}>Address</h2>
      <p className={styles.addressText}>
        4700 Keele St,<br />
        North York, ON M3J 1P3
      </p>

      <div className={styles.interactiveMapButton}></div>
      <a
        href="https://map.concept3d.com/?id=1200#!m/317129?s/?sbc/"
        className={styles.interactiveMapText}
        target="_blank"
        rel="noopener noreferrer"
      >
        View our interactive map
      </a>
    </section>
  );
};

export default Location;