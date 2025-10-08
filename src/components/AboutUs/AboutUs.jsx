import styles from './AboutUs.module.css'

function AboutUs() {
    return (
        <>
            <section className={styles.aboutUsSection}>
                <div className={styles.topRight}></div>
                <div className={styles.bottomRight}></div>
                <div className={styles.bottomLeft}></div>

                <div className={styles.aboutUsContent}>

                    <div className={styles.text}>
                        <p className={styles.highlight}>
                            ElleHacks is Canada's largest hackathon for women and gender-diverse students, celebrating our 10th year anniversary!
                        </p>
                        <p className={styles.paragraph}>
                            We're a free, student-run, and beginner-friendly competition serving as your canvas to pitch bold solutions to global challenges, participate in engaging workshops, and connect with a diverse community of recruiters, industry professionals, and peers.
                            <br></br>
                            <br></br>
                            No coding experience? No problem! ElleHacks is designed for everyone, from tech enthusiasts to those taking their first steps in the digital world.
                        </p>
                    </div>             

                    <div className={styles.images}>
                        <img className = {styles.image} src="src/assets/aboutus/temp-img.png"></img>
                        <img className = {styles.image} src="src/assets/aboutus/temp-img.png"></img>
                    </div>
                    
                </div>
            </section>

        </>
    )

}

export default AboutUs