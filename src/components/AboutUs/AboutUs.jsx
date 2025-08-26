import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={styles.aboutUsSection}>
            <div className={styles.aboutUsContent}>
                <p className={styles.highlight}>
                    ElleHacks is Canada's largest hackathon for women and gender-diverse students, celebrating our 10th year anniversary!
                </p>
                <div className={styles.paragraph}>
                    <p className={styles.paragraph}>
                        We're a free, student-run, and beginner-friendly competition serving as your canvas to pitch bold solutions to global challenges, participate in engaging workshops, and connect with a diverse community of recruiters, industry professionals, and peers.
                    </p>
                    <p className={styles.paragraph}>
                        No coding experience? No problem! ElleHacks is designed for everyone, from tech enthusiasts to those taking their first steps in the digital world.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;