import React from 'react';
import styles from './Sponsors.module.css';

import rbcImg from '../../assets/Sponsors/RBC.png';
import standoutImg from '../../assets/Sponsors/StandOut-Stickers-Logo.png';
import incogniImg from '../../assets/Sponsors/incogni.png';
import nordpassImg from '../../assets/Sponsors/nordpass.png';
import voiceflowImg from '../../assets/Sponsors/Voiceflow.svg';
import sailyImg from '../../assets/Sponsors/saily-logo-black (2).png';
import levelupImg from '../../assets/Sponsors/Levelup Logo (Square, Transparent).png';
import codecraftersImg from '../../assets/Sponsors/CodeCrafters.io.png';
import cseImg from '../../assets/Sponsors/CSE.jpg';
import doraImg from '../../assets/Sponsors/dora logo- black.png';
import environicsImg from '../../assets/Sponsors/EnvironicsAnalytics.png';
import interviewCakeImg from '../../assets/Sponsors/Interview cake.png';
import kpmImg from '../../assets/Sponsors/KPM.png';
import msftReactorImg from '../../assets/Sponsors/MSFT_Reactor.png';
import nordvpnImg from '../../assets/Sponsors/NordVPN_Logo_RGB_Primary_Blue_Black-01.svg';
import notionImg from '../../assets/Sponsors/Notion.png';
import ubisoftImg from '../../assets/Sponsors/Ubisoft.svg';
import waspImg from '../../assets/Sponsors/wasp.png';
import xyzImg from '../../assets/Sponsors/xyz-logo-color.svg';
import zebraImg from '../../assets/Sponsors/ZEBRA.png';
import bestImg from '../../assets/Sponsors/BEST.png';
import bramptonInnovationImg from '../../assets/Sponsors/Brampton_Innovation.png';
import fgfImg from '../../assets/Sponsors/fgf.png';
import icpImg from '../../assets/Sponsors/quantum.png';
import pandgImg from '../../assets/Sponsors/P&G.png';
import ranfoodsImg from '../../assets/Sponsors/ranfoods.png';
import tdImg from '../../assets/Sponsors/TD.png';
import yorkRegionImg from '../../assets/Sponsors/YorkRegion.png';
import experienceVenturesImg from '../../assets/Sponsors/ExperienceVentures.png';
import githubLogoImg from '../../assets/Sponsors/github-logo.png';
import icpPngImg from '../../assets/Sponsors/icp.png';
import siraPrintImg from '../../assets/Sponsors/SiraPrint.png';
import vueschoolImg from '../../assets/Sponsors/vueschool.png';
import yspaceImg from '../../assets/Sponsors/Yspace.png';
import curtainImg from '../../assets/Sponsors/curtains.png';
import megaphoneGirlImg from '../../assets/Sponsors/megaphonegirl.svg';
import gearGirlImg from '../../assets/Sponsors/geargirl.svg';
import bulbGirlImg from '../../assets/Sponsors/bulbgirl.svg';
import yellowBalloonImg from '../../assets/Sponsors/yellowballoon.svg';
import redBalloonImg from '../../assets/Sponsors/redballoon.svg';

const Sponsors = () => {
  return (
    <div className={styles['sponsors-container']}>
      <div className={styles['stage-content']}>
        <h1 className={styles['sponsors-title']}>Last Years Sponsors</h1>
          
          <div className={styles['sponsors-grid']}>
            {/* Top row - 2 large cards */}
            <div>
              <div className={styles['sponsor-card'] + ' ' + styles['xlarge']}><a href="#"><img src={tdImg} alt='Rbc img' /></a></div>
            </div>
            <div>
              <div className={styles['sponsor-card'] + ' ' + styles['qlarge']}><a href="#"><img src={rbcImg} alt='Rbc img'/></a></div>
            </div>
            
            {/* Second row - 4 regular cards */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className={styles['sponsor-card'] + ' ' + styles['large']}><a href="#"><img src={environicsImg} alt='levelup' /></a></div>
              <div className={styles['sponsor-card'] + ' ' + styles['large']}><a href="#"><img src={cseImg} alt='levelup' /></a></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className={styles['sponsor-card'] + ' ' + styles['large']}><a href="#"><img src={kpmImg} alt='kpm'/></a></div>
              <div className={styles['sponsor-card'] + ' ' + styles['large']}><a href="#"><img src={ubisoftImg} alt='ubisoft img'/></a></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className={styles['sponsor-card'] + ' ' + styles['large']}><a href="#"><img src={yorkRegionImg} alt='standout stickers'/></a></div>
              <div className={styles['sponsor-card'] + ' ' + styles['large']}><a href="#"><img src={pandgImg} alt='standout stickers'/></a></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className={styles['sponsor-card'] + ' ' + styles['large']}><a href="#"><img src={yspaceImg} alt='standout stickers'/></a></div>
              <div className={styles['sponsor-card'] + ' ' + styles['large']}><a href="#"><img src={experienceVenturesImg} alt='standout stickers'/></a></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className={styles['sponsor-card'] + ' ' + styles['large']}><a href="#"><img src={icpImg} alt='standout stickers'/></a></div>
              <div className={styles['sponsor-card'] + ' ' + styles['large']}><a href="#"><img src={icpPngImg} alt='standout stickers'/></a></div>
            </div>
            
            {/* Third row - 4 regular cards */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className={styles['sponsor-card']}><a href="#"><img src={standoutImg} alt='standout stickers'/></a></div>
              <div className={styles['sponsor-card']}><a href="#"><img src={incogniImg} alt='incogni png'/></a></div>
              <div className={styles['sponsor-card']}><a href="#"><img src={nordpassImg} alt='nordpass'/></a></div>
              <div className={styles['sponsor-card']}><a href="#"><img src={voiceflowImg} alt='voiceflow' /></a></div>
            </div>
            
            {/* Bottom row - 4 regular cards */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className={styles['sponsor-card']}><a href="#"><img src={sailyImg} alt='saily' /></a></div>
              <div className={styles['sponsor-card']}><a href="#"><img src={levelupImg} alt='levelup' /> </a></div>
              <div className={styles['sponsor-card']}><a href="#"><img src={xyzImg} alt='levelup' /></a></div>
              <div className={styles['sponsor-card']}><a href="#"><img src={waspImg} alt='levelup' /></a></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className={styles['sponsor-card']}><a href="#"><img src={nordvpnImg} alt='saily' /></a></div>
              <div className={styles['sponsor-card']}><a href="#"><img src={notionImg} alt='levelup' /> </a></div>
              <div className={styles['sponsor-card']}><a href="#"><img src={zebraImg} alt='levelup' /></a></div>
              <div className={styles['sponsor-card']}><a href="#"><img src={codecraftersImg} alt='levelup' /></a></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className={styles['sponsor-card']}><a href="#"><img src={msftReactorImg} alt='saily' /></a></div>
              <div className={styles['sponsor-card']}><a href="#"><img src={doraImg} alt='levelup' /> </a></div>
              <div className={styles['sponsor-card']}><a href="#"><img src={interviewCakeImg} alt='interview cake' /></a></div>
              <div className={styles['sponsor-card']}><a href="#"><img src={incogniImg} alt='levelup' /></a></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className={styles['sponsor-card']}><a href="#"><img src={bramptonInnovationImg} alt='Rbc img'/></a></div>
              <div className={styles['sponsor-card']}> <a href="#"><img src={ranfoodsImg} alt='Rbc img'/></a></div>
              <div className={styles['sponsor-card']}><a href="#"><img src={fgfImg} alt='Rbc img'/></a></div>
              <div className={styles['sponsor-card']}><a href="#"><img src={bestImg} alt='Rbc img'/></a></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className={styles['sponsor-card']}><a href="https://github.com/"><img src={githubLogoImg} alt='Rbc img'/></a></div>
              <div className={styles['sponsor-card']}> <a href="#"><img src={vueschoolImg} alt='Rbc img'/></a></div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <img 
            src={curtainImg}
            alt="curtain" 
            className={styles['curtain']}
          />
          <img 
            src={megaphoneGirlImg}
            alt="Girl with megaphone" 
            className={styles['girl-megaphone']}
          />
          
          <img 
            src={gearGirlImg}
            alt="Girl with gears" 
            className={styles['girl-gears']}
          />
          <img 
            src={bulbGirlImg}
            alt="Girl with gears" 
            className={styles['girl-bulb']}
          />
          
          <img 
            src={yellowBalloonImg}
            alt="Balloons" 
            className={styles['balloons-left']}
          />
          
          <img 
            src={redBalloonImg}
            alt="Balloons" 
            className={styles['balloons-right']}
          />
        </div>
    </div>
  );
};

export default Sponsors;