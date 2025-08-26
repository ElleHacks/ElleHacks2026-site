import React from 'react';
import styles from './Hero.module.css';
//import rectangle2 from '../../assets/hero/Rectangle 2.png';
import table from '../../assets/hero/Ellipse 6.png';
import cake from '../../assets/hero/HeroSection_2.png';
//import component12 from '../../assets/hero/Component 12.png';
import button from '../../assets/hero/Rectangle 3.png';
import redBalloon from '../../assets/hero/Component 16.png';
import heroSection_1 from '../../assets/hero/HeroSection_1.png';
import Component15 from '../../assets/hero/Component 15.png';
import Component20 from '../../assets/hero/Component 20.png';
import Component2 from '../../assets/hero/Component 2.png';
import Component12 from '../../assets/hero/Component 12.png';
import Component18 from '../../assets/hero/Component 18.png';
import HeroSection_5 from '../../assets/hero/HeroSection_5.png';
import HeroSection_3 from '../../assets/hero/HeroSection_3.png';
import Untitled_Artwork6 from '../../assets/hero/Untitled_Artwork (6) 1.png';
import HeroSection_1 from '../../assets/hero/HeroSection_1.png';


const Hero = () => {
    return(
        <>
            <header className={styles.hero}>

                <div className={styles.content}>
                    <h1 className={styles.title}>ElleHacks 2026</h1>
                    <p className={styles.subtitle}>January 2026, In-person event, MLH official Member</p>
                    <div className={styles.applyButtonWrapper}>
                        <a href="#apply" className={styles.applyButtonText}>Interested in Participating?</a>
                    </div>
                </div>

                <img src={table} alt='Table' className={styles.table} />
                {/*<img src={redBalloon} alt='Balloon' className={styles.redBalloon} />*/}
                {/*<img src={Component18} alt='Bottom Green Balloon' className={styles.greenBottomBalloon} />*/}
                <img src={HeroSection_5} alt='Balloon' className={styles.bottomBalloons} />
                <img src={HeroSection_3} alt='Balloon' className={styles.topLeftBalloons} />
                <img src={HeroSection_1} alt='Balloon' className={styles.topRightBalloons} />
               {/* <img src={Component15} alt='Balloon' className={styles.greenTopBalloon} />
                <img src={Component20} alt='Right Top Balloons' className={styles.redTopBalloon} />*/}
                <img src={cake} alt='Cake' className={styles.cake} />
                <img src={Component2} alt='Candle' className={styles.candle} />
                <img src={Component12} alt='Teacup' className={styles.teacup} />
                <img src={Untitled_Artwork6} alt='Teacup Girl' className={styles.teacupGirl} />
               {/*  <img src={heroSection_1} alt='Right Top Balloons' className={styles.rightTopBalloons} />*/}

            </header>

        </>
    );
};

export default Hero;


