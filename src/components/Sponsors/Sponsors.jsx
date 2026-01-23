import React from 'react';
import styles from './Sponsors.module.css';

// Gold Sponsors
import wealthsimpleImg from '../../assets/Sponsors/Wealthsimple.png';

// Bronze Sponsors
import ubisoftImg from '../../assets/Sponsors/Ubisoft.svg';
import cseImg from '../../assets/Sponsors/CSE.jpg';
import kpmImg from '../../assets/Sponsors/KPM.png';
import FDMimg from '../../assets/Sponsors/FDM.png';
import shopifyImg from '../../assets/Sponsors/shopify.png';
import canadaImg from '../../assets/Sponsors/GovOfCanadaLogo.webp';
import experienceImg from '../../assets/Sponsors/ExperienceVenturesLogo.png';

// Silver - york region
import YorkRegionImg from '../../assets/Sponsors/YRLogo.png';

// MLH Associated Sponsors
import githubLogoImg from '../../assets/Sponsors/github-logo.png';
import purebuttonsImg from '../../assets/Sponsors/purebuttons.png';

// Community Sponsors
import porterimg from '../../assets/Sponsors/PorterLogo.png';
import incogniImg from '../../assets/Sponsors/incogni.png';
import sailyImg from '../../assets/Sponsors/sailyLogo.png';
import interninsiderImg from '../../assets/Sponsors/insider.png';
import cityofbramptonImg from '../../assets/Sponsors/brampton.jpg';
import kidsImg from '../../assets/Sponsors/360Kids.png';
import codecraftersImg from '../../assets/Sponsors/CodeCrafters.io.png';
import interviewCakeImg from '../../assets/Sponsors/Interview cake.png';
import nordvpnImg from '../../assets/Sponsors/NordVPN_Logo_RGB_Primary_Blue_Black-01.svg';
import xyzImg from '../../assets/Sponsors/xyz-logo-color.svg';
import fgfImg from '../../assets/Sponsors/fgf.png';
import ranfoodsImg from '../../assets/Sponsors/ranfoods.png';
import vueschoolImg from '../../assets/Sponsors/vueschool.png';
import curtainImg from '../../assets/Sponsors/curtains.png';
import megaphoneGirlImg from '../../assets/Sponsors/megaphonegirl.svg';
import gearGirlImg from '../../assets/Sponsors/geargirl.svg';
import bulbGirlImg from '../../assets/Sponsors/bulbgirl.svg';
import yellowBalloonImg from '../../assets/Sponsors/yellowballoon.svg';
import redBalloonImg from '../../assets/Sponsors/redballoon.svg';
import nordpassImg from '../../assets/Sponsors/nordpass.png';
import nordprotectImg from '../../assets/Sponsors/nordprotect.png';
import nexosImg from '../../assets/Sponsors/nexos.png';
import swbImg from '../../assets/Sponsors/SWBLogo.jpg';
import girlguidesimg from '../../assets/Sponsors/girlguidesLogo.jpg';
import cppimg from '../../assets/Sponsors/cpplogo.jpg';

const Sponsors = () => {
  return (
    <div className={styles['sponsors-container']}>
      <div className={styles['stage-content']}>
        <h1 className={styles['sponsors-title']}>Our Sponsors</h1>

        <div className={styles['sponsors-grid']}>
          {/* GOLD (Top) */}
          <div className={styles['row-gold']}>
            <div className={`${styles['sponsor-card']} ${styles['xlarge']} ${styles['gold']}`}>
              <a href="https://www.wealthsimple.com/en-ca?utm_source=google&utm_medium=performance&campaign_id=13076524258&adgroup_id=122608715656&ad_id=769675182122&keyword=wealth%20simple&gad_source=1&gad_campaignid=13076524258&gbraid=0AAAAADN8OOb3EcloUYB1cbBpqRFrQVCJ1&gclid=CjwKCAiA64LLBhBhEiwA-Pxgu1mts4l_ZIm5Aq0xS8RkcnlTczkYb4vmBLHdwN1-Xx6QxiJ6pVkvhxoCGLEQAvD_BwE" target="_blank" rel="noreferrer">
                <img src={wealthsimpleImg} alt="Wealthsimple Logo" />
              </a>
            </div>
          </div>

          {/* Silver */}
          <div className={styles['row-silver']}>
            <div className={`${styles['sponsor-card']} ${styles['qlarge']} ${styles['silver']}`}>
              <a href="https://www.york.ca/" target="_blank" rel="noreferrer">
                <img src={YorkRegionImg} alt="York Region Logo" />
              </a>
            </div>
          </div>

          {/* BRONZE */}
          <div className={styles['row-bronze']}>
            <div className={`${styles['sponsor-card']} ${styles['large']} ${styles['bronze']}`}>
              <a href="https://www.ubisoft.com/en-ca" target="_blank" rel="noreferrer"><img src={ubisoftImg} alt="Ubisoft Logo" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['large']} ${styles['bronze']}`}>
              <a href="https://www.shopify.com/ca/ppc/online-store?term=shopify&adid=641903051274&campaignid=15436644442&branded_enterprise=1&BOID=brand&utm_medium=cpc&utm_source=google&gad_source=1&gad_campaignid=15436644442&gbraid=0AAAAADp4t0qDIeLXaRoLjR_Ho_7POHvgj&gclid=CjwKCAiA64LLBhBhEiwA-Pxguzkzt9GC616NZpD0wOwVuGZLe4lrQtJW__5o_XfGx588gIx-oyi7QxoCVrQQAvD_BwE" target="_blank" rel="noreferrer"><img src={shopifyImg} alt="Shopify Logo" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['large']} ${styles['bronze']}`}>
              <a href="https://www.kpmpower.com/products?gad_source=1&gad_campaignid=1945954542&gbraid=0AAAAACwaK6AiiZylxSJDBUSu0OP7nPLYJ&gclid=CjwKCAiA64LLBhBhEiwA-Pxgu4i-dgyze2bK9KvpGWBsULXMABsnJxx_xHYs72Az1GBB92__Zt2_jBoCV1kQAvD_BwE" target="_blank" rel="noreferrer"><img src={kpmImg} alt="KPM Logo" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['large']} ${styles['bronze']}`}>
              <a href="https://www.cse-cst.gc.ca/en" target="_blank" rel="noreferrer"><img src={cseImg} alt="CSE Logo" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['large']} ${styles['bronze']}`}>
              <a href="https://www.canada.ca/en.html" target="_blank" rel="noreferrer"><img src={experienceImg} alt="Experience Ventures Logo" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['large']} ${styles['bronze']}`}>
              <a href="https://www.canada.ca/en.html" target="_blank" rel="noreferrer"><img src={canadaImg} alt="Government of Canada Logo" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['large']} ${styles['bronze']}`}>
              <a href="https://www.fdmgroup.com/en-ca/" target="_blank" rel="noreferrer"><img src={FDMimg} alt="FDM img" /></a>
            </div>
          </div>

          {/* COMMUNITY */}
          <div className={styles['row-community']}>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://www.flyporter.com/en-ca/" target="_blank" rel="noreferrer"><img src={porterimg} alt="Porter Logo" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://www.cppinvestments.com/?utm_source=programmatic" target="_blank" rel="noreferrer"><img src={cppimg} alt="CPP Investments img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://codecrafters.io/" target="_blank" rel="noreferrer"><img src={codecraftersImg} alt="CodeCrafters Logo" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://gen.xyz/" target="_blank" rel="noreferrer"><img src={xyzImg} alt="XYZ. Logo" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://www.purebuttons.com/?srsltid=AfmBOorpeUFg2qzpBT_fJkrqT0Le86F3olwy3YsYex2I2I9EYdqiNieW" target="_blank" rel="noreferrer"><img src={purebuttonsImg} alt="PureButtons Logo" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://www.interviewcake.com/" target="_blank" rel="noreferrer"><img src={interviewCakeImg} alt="Interview Cake" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://www.ranfoods.com/" target="_blank" rel="noreferrer"><img src={ranfoodsImg} alt="Ranfoods img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://www.fgfbrands.com/" target="_blank" rel="noreferrer"><img src={fgfImg} alt="Fgf img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://vueschool.io/" target="_blank" rel="noreferrer"><img src={vueschoolImg} alt="Vue School img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://www.interninsider.me/" target="_blank" rel="noreferrer"><img src={interninsiderImg} alt="Intern Insider img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://www.360kids.ca/" target="_blank" rel="noreferrer"><img src={kidsImg} alt="Kids img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://www.brampton.ca/EN/pages/Welcome.aspx" target="_blank" rel="noreferrer"><img src={cityofbramptonImg} alt="City of Brampton img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://saily.com/offer/?utm_source=google&utm_medium=cpc&utm_campaign=21042331412&utm_content=160754904922&utm_term=saily&gad_source=1&gad_campaignid=21042331412&gbraid=0AAAAA9ThE5LtJi9zqHrofEtewMU9qKJOL&gclid=CjwKCAiA64LLBhBhEiwA-Pxgu_NLGeCKj6PB8xgmQaf_Q_i7wxHurCDjb7ET9yCrVxSqEoODvhTbThoCsYAQAvD_BwE" target="_blank" rel="noreferrer"><img src={sailyImg} alt="Saily img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://nordvpn.com/country/canada/?vpn=brand&nc=Search_-_Canada_-_Pure_Brand_-_Exact_-_EN_-_DMT_-_CAD&ns=google&nm=cpc&nt=nord%20vpn&na=181012210933&gad_source=1&gad_campaignid=22680783825&gbraid=0AAAAADwsNkT339QWi2zPHrhnR63t0cBZs&gclid=CjwKCAiA64LLBhBhEiwA-Pxgu5oXGWYBzivbahsdEH22JQV6dtSD7xD_UtjYHOU393tW5k-d7p7VFhoCGM8QAvD_BwE" target="_blank" rel="noreferrer"><img src={nordvpnImg} alt="NordVPN img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://nordpass.com/password-manager/special/?utm_source=google&utm_medium=cpc&utm_campaign=18308653414&utm_content=141393143419&utm_term=nordpass&gad_source=1&gad_campaignid=18308653414&gbraid=0AAAAACc38-qvFIFy0N6OtsCCxjdd1G8R-&gclid=CjwKCAiA64LLBhBhEiwA-Pxgu-awgA1WPa-rgq-45H5tgZfBSOKPOgrEQ-WJXNos8bh-HxxfGtaqhxoCJmIQAvD_BwE" target="_blank" rel="noreferrer"><img src={nordpassImg} alt="NordPass img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://nordvpn.com/blog/introducing-nordprotect/?srsltid=AfmBOopzjXJ5VwEswWC-nOcZMGFpsKZ34KQBKEI3nbJVuYTaFafwvXuV" target="_blank" rel="noreferrer"><img src={nordprotectImg} alt="NordProtect img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://nexos.ai/" target="_blank" rel="noreferrer"><img src={nexosImg} alt="Nexos AI img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://incogni.com/data-removal-from-internet?utm_source=google&utm_medium=cpc&utm_campaign=SEARCH-CA-BRAND-EXT&utm_content=Incogni+-+pure&utm_term=incogni&matchtype=e&device=c&GeoLoc=9000799&placement=&network=g&campaign_id=23178428396&adset_id=182677896410&ad_id=780626427985&gad_source=1&gad_campaignid=23178428396&gbraid=0AAAAAoSUmxpLPbX3Z2Slfe28q6XJAvePl&gclid=CjwKCAiA64LLBhBhEiwA-Pxgu3WQI3g9XA5UvuTexBFY7sBJbre-yU2UGikXTh2fjmZZetg1ENwVvBoCysEQAvD_BwE&did=dsc_01jjvcjknqftc1ke3ndjpndyd2&coupon=REMOVEME" target="_blank" rel="noreferrer"><img src={incogniImg} alt="Incogni img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://scalewithoutborders.com/" target="_blank" rel="noreferrer"><img src={swbImg} alt="Scale without borders img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://www.girlguides.ca/web/" target="_blank" rel="noreferrer"><img src={girlguidesimg} alt="Girl Guides img" /></a>
            </div>
            <div className={`${styles['sponsor-card']} ${styles['community']}`}>
              <a href="https://github.com/" target="_blank" rel="noreferrer"><img src={githubLogoImg} alt="Github Logo" /></a>
            </div>
          </div>
          <p className={styles['sponsors-text']}>More coming soon...</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <img src={curtainImg} alt="curtain" className={styles['curtain']} />
      <img src={megaphoneGirlImg} alt="Girl with megaphone" className={styles['girl-megaphone']} />
      <img src={gearGirlImg} alt="Girl with gears" className={styles['girl-gears']} />
      <img src={bulbGirlImg} alt="Girl with gears" className={styles['girl-bulb']} />
      <img src={yellowBalloonImg} alt="Balloons" className={styles['balloons-left']} />
      <img src={redBalloonImg} alt="Balloons" className={styles['balloons-right']} />
    </div>
  );
};

export default Sponsors;
