import styles from './AboutUs.module.css';

import topRight from '../../assets/aboutus/top-right.png';
import bottomRight from '../../assets/aboutus/bottom-right.png';
import bottomLeft from '../../assets/aboutus/bottom-left.png';
import rectangle14 from '../../assets/aboutus/Rectangle 14.png';
import rectangle15 from '../../assets/aboutus/Rectangle 15.png';

function AboutUs() {
  return (
    <>
      <section className={styles.aboutUsSection}>
        <img
          alt="Mouse Image"
          src={topRight} // fixed
          className="absolute -top-2 md:top-[clamp(0.5rem,0.6vw,1rem)] right-[clamp(-10rem,-6.7vw,-2rem)] w-[clamp(10rem,15vw,20rem)] sm:w-[clamp(12rem,31vw,38rem)]"
        />
        <img
          alt=""
          src={bottomRight} // fixed
          className="absolute bottom-[clamp(-30rem,-24vw,-11rem)] right-[clamp(-5rem,-0.4vw,2rem)] w-[clamp(10rem,23vw,30rem)] z-1"
        />
        <img
          alt=""
          src={bottomLeft} // fixed
          className="absolute bottom-[clamp(1rem,3vw,2rem)] left-[clamp(-10rem,-7.8vw,-2.7rem)] w-[clamp(14rem,40vw,46rem)]"
        />

        <div className="relative grid grid-cols-1 xl:grid-cols-2 -gap-5 items-center z-10">
          <div className="text-left">
            <p className="font-[Nobile] font-bold text-[1.2rem] sm:text-[1.7rem] text-[#FFEFD8] text-shadow-lg">
              ElleHacks is Canada's largest hackathon for women and gender-diverse students, celebrating our 10th year anniversary!
            </p>
            <p className="mt-10 font-[Nobile] font-normal  text-[0.9rem] sm:text-[1.35rem] text-[#FFFFFF] text-shadow-lg">
              We're a free, student-run, and beginner-friendly competition serving as your canvas to pitch bold solutions to global challenges, participate in engaging workshops, and connect with a diverse community of recruiters, industry professionals, and peers.
            </p>
            <p className="mt-8 font-[Nobile] font-normal  text-[0.9rem]  sm:text-[1.35rem] text-[#FFFFFF] text-shadow-lg">
              No coding experience? No problem! ElleHacks is designed for everyone, from tech enthusiasts to those taking their first steps in the digital world.
            </p>
          </div>

          <div className="flex flex-col gap-6 xl:justify-start items-center xl:mt-0 mt-15">
            <img
              alt="Image1"
              src={rectangle14} // fixed
              className="xl:ml-auto w-4/5 sm:h-60 h-40 object-cover rounded-[5vw]"
            />
            <img
              alt="Image2"
              src={rectangle15} // fixed
              className="xl:ml-auto w-4/5 sm:h-60 h-40 object-cover rounded-[5vw]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
