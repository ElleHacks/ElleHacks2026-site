import React from 'react';
import styles from './Hero.module.css'; 

const Hero = () => {
    return (
        <header className={styles.hero}>

                <div className={styles.content}>
                    <h1 className={styles.title}>ElleHacks 2026</h1>
                    <p className={styles.subtitle}>January 2026, In-person event, MLH official Member</p>
                    <div className={styles.applyButtonWrapper}>
                        <a href="#apply" className={styles.applyButtonText}>Interested in Participating?</a>
                    </div>
                </div>
        </header>
    );
};

export default Hero;