import styles from './Location.module.css';

const Location = () => {
  return (
    <section className={styles.locationSection}>

      <h1 className={styles.locationTitle}>Location</h1>

      {/* Google Maps iframe */}
      <iframe
        className={styles.mapIframe}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.014446736064!2d-79.50196532407767!3d43.772558944703164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e24bfaaaaab%3A0xd359cc0577e68c34!2sAccolade%20East%20Building!5e0!3m2!1sen!2sca!4v1769287273681!5m2!1sen!2sca"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <h2 className={styles.addressTitle}>Address</h2>
      <p className={styles.addressText}>
        Accolade East Building,<br />
        83 York Blvd,<br />
        North York, ON M7A 2C5
      </p>

      <div className={styles.interactiveMapButton}></div>
      <a
        href="https://map.concept3d.com/?id=1200#!ce/34557?m/317123?s/"
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