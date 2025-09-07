import React, { useState } from 'react';
import styles from './Hero.module.css';
import logoSquare from '../../assets/hero/logo square.png';
import candle from '../../assets/hero/Component 2.png';
import yellowBalloon from '../../assets/hero/yellow balloon.png';
import rightBalloon from '../../assets/hero/BallonsToTheRight.png';
import cupGirl from '../../assets/hero/cupGirl.png';
import leftMultipleBalloons from '../../assets/hero/MultipleBalloons.png';
import coffeeCup from '../../assets/hero/Component 12.png';
import cake from '../../assets/hero/Cake.png';
import gradient from '../../assets/hero/Rectangle.png';
import mlhBadge from '../../assets/hero/mlh-trust-badge-2026-white.svg';

const Hero = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.logo} style={{ backgroundImage: `url(${logoSquare})` }}></div>
        <div className={styles.hamburger} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${styles.navLinks} ${isNavActive ? styles.active : ''}`}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Sponsors</a>
          <a href="#">FAQ</a>
          <a href="#">Contact Us</a>
        </div>
      </header>

      <div className={styles.scalingWrapper}></div>

      <div className={styles.mainContent}>
        <h1 className={styles.title}>ElleHacks 2026</h1>
        <p className={styles.subtitle}>January 23-25, 2026 . In-person event . MLH official Member</p>
        
        <div className={styles.ctaButton}>
          <span className={styles.ctaText}>Interested in Participating?</span>
        </div>

        <img src={candle} alt="Candle" className={styles.Candle} draggable="false" onContextMenu={(e) => e.preventDefault()} />
        <img src={yellowBalloon} alt="Yellow Balloon" className={styles.yellowBalloon} draggable="false" onContextMenu={(e) => e.preventDefault()} />
        <img src={rightBalloon} alt="Right Balloon" className={styles.rightBalloon} draggable="false" onContextMenu={(e) => e.preventDefault()} />
        <img src={cupGirl} alt="Girl holding the coffee cup" className={styles.cupGirl} draggable="false" onContextMenu={(e) => e.preventDefault()} />
        <img src={leftMultipleBalloons} alt="Blue Balloon" className={styles.leftmultipleBalloons} draggable="false" onContextMenu={(e) => e.preventDefault()} />
        <img src={coffeeCup} alt="Coffee Cup" className={styles.coffeeCup} draggable="false" onContextMenu={(e) => e.preventDefault()} />
        <img src={cake} alt="Cake" className={styles.cake} draggable="false" onContextMenu={(e) => e.preventDefault()} />
        <img src={gradient} alt="Gradient" className={styles.gradient} draggable="false" onContextMenu={(e) => e.preventDefault()} />
        <div className={styles.table}></div>
        <div className={styles.MLHlogo}>
          <a
            id="mlh-trust-badge"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mlhBadge}
              alt="Major League Hacking 2026 Hackathon Season"
              style={{ width: '100%' }}
              draggable="false"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;