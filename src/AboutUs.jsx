function AboutUs() {
    return (
        <>
                <section className="relative overflow-hidden bg-gradient-to-b from-[#DFA99D] to-[#B9756C] w-full min-h-screen lg:px-55 sm:px-35 px-10 py-50">

                    <img alt="" src="src/assets/about-us/top-right.png" className="absolute top-[clamp(0.1rem,0.5vw,3rem)] right-[clamp(-10rem,-6.7vw,-2rem)] w-[clamp(12rem,31vw,38rem)]"/>
                    <img alt="" src="src/assets/about-us/top-left.png" className="absolute top-[clamp(-20rem,-15vw,-5.5rem)] left-[clamp(-15rem,-5.9vw,-2.1rem)] w-[clamp(15rem,40vw,45rem)]"/>
                    <img alt="" src="src/assets/about-us/bottom-right.png" className="absolute bottom-[clamp(-30rem,-26vw,-11rem)] right-[clamp(-5rem,-0.4vw,2rem)] w-[clamp(10rem,23vw,30rem)]"/> 
                    <img alt="" src="src/assets/about-us/bottom-left.png" className="absolute bottom-[clamp(1rem,3vw,2rem)] left-[clamp(-10rem,-7.8vw,-2.7rem)] w-[clamp(14rem,40vw,46rem)]"/>

                        <div className="relative grid grid-cols-1 xl:grid-cols-2 -gap-5 items-center xl:h-[600px] sm:pb-15">
                            <div className="text-left">
                                <p className="font-[Nobile] font-bold text-[1.1rem] sm:text-[1.55rem] text-[#FFEFD8] text-shadow-lg">ElleHacks is Canada's largest hackathon for women and gender-diverse students, celebrating our 10th year anniversary!</p>
                                <p className="mt-10 font-[Nobile] font-normal  text-[0.9rem] sm:text-[1.35rem] text-[#FFFFFF] text-shadow-lg">We're a free, student-run, and beginner-friendly competition serving as your canvas to pitch bold solutions to global challenges, participate in engaging workshops, and connect with a diverse community of recruiters, industry professionals, and peers.</p>
                                <p className="mt-8 font-[Nobile] font-normal  text-[0.9rem]  sm:text-[1.35rem] text-[#FFFFFF] text-shadow-lg">No coding experience? No problem! ElleHacks is designed for everyone, from tech enthusiasts to those taking their first steps in the digital world.</p>
                            </div>

                            <div className="flex flex-col gap-6 xl:justify-start items-center xl:mt-0 mt-15">
                                <img alt="Image1" src="src/assets/about-us/temp-img.png" className="xl:ml-auto w-4/5 sm:h-60 h-40 object-cover rounded-[5vw]"/>
                                <img alt="Image2" src="src/assets/about-us/temp-img.png" className="xl:ml-auto w-4/5 sm:h-60 h-40 object-cover rounded-[5vw]"/>
                            </div>
                        </div>

                </section>
        </>
    )
    
}

export default AboutUs