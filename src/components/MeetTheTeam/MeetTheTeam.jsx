import React from 'react';
import styles from './MeetTheTeam.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react'

const members = [
  [
    {name: 'Julia Da Silva', img: 'src/assets/meettheteam/julia-nametag.png',},
    {name: 'Katsa Bejemil', img: 'src/assets/meettheteam/katsa-nametag.png',},
    {name: 'Rumaisa Nawar', img: 'src/assets/meettheteam/rumaisa-nametag.png',},
    {name: 'Sabriha Amin', img: 'src/assets/meettheteam/sabriha-nametag.png',},
    {name: 'Aditi Patel', img: 'src/assets/meettheteam/aditi-nametag.png',}
  ],
  [
    {name: 'Triya Augustine', img: 'src/assets/meettheteam/triya-nametag.png',},
    {name: 'Luiza Teles', img: 'src/assets/meettheteam/luiza-nametag.png',},
    {name: 'Vansh Madan', img: 'src/assets/meettheteam/vansh-nametag.png',},
    {name: 'Anagha Koroth', img: 'src/assets/meettheteam/anagha-nametag.png',}
  ], 
  [
    {name: 'Seyedeh Sara Alav', img: 'src/assets/meettheteam/seyedeh-nametag.png',},
    {name: 'Bohina Manochehrzadeh', img: 'src/assets/meettheteam/bohina-nametag.png',},
    {name: 'Iqra Inam', img: 'src/assets/meettheteam/iqra-nametag.png',},
    {name: 'Maryam Malik', img: 'src/assets/meettheteam/maryam-nametag.png',}
  ], 
  [
    {name: 'JOANNE WIJETUNGA', img: 'src/assets/meettheteam/joanne-nametag.png',},
    {name: 'Fares Islam', img: 'src/assets/meettheteam/fares-nametag.png',},
    {name: 'Yazan Haddad', img: 'src/assets/meettheteam/yazan-nametag.png',},
    {name: 'Ifra Inam', img: 'src/assets/meettheteam/ifra-nametag.png',},
    {name: 'Madeleine Phan', img: 'src/assets/meettheteam/madeleine-nametag.png',}
  ]
]

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        absolute h-max
        top-[30vh] left-[88.5vw] 
        w-[4.4vw] h-[7.8vh]
        cursor-pointer
        flex items-center justify-center
        hover:opacity-80 transition-opacity
      "
      style={{
        background: 'transparent',
        border: 'none',
        padding: 0,
        margin: 0,
      }}
    >
      <img
        src="src/assets/meettheteam/next-arrow.png"
        alt="Next"
        className="w-full h-full object-contain"
        style={{
          filter: 'drop-shadow(0.5vw 0.5vw 0.5vw rgba(0,0,0,0.5))',
        }}
      />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        absolute h-max
        top-[30vh] left-[1vw] 
        w-[4.4vw] h-[7.8vh]
        cursor-pointer
        flex items-center justify-center
        hover:opacity-80 transition-opacity
      "
      style={{
        background: 'transparent',
        border: 'none',
        padding: 0,
        margin: 0,
      }}
    >
      <img
        src="src/assets/meettheteam/prev-arrow.png"
        alt="Previous"
        className="w-full h-full object-contain"
        style={{
          filter: 'drop-shadow(0.5vw 0.5vw 0.5vw rgba(0,0,0,0.5))',
        }}
      />
    </div>
  );
}

const MeetTheTeam = () => {
  const [current, setCurrent] = useState(0);
  
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrent(newIndex),
    arrows: true,
    adaptiveHeight: true,
  };

  const divStyle =
    current === 0
      ? "absolute top-[30vh] left-[6.1vw] w-[100vw] h-max h-[68vh] bg-[#A7748E] rounded-l-[3.3vw] opacity-100"
      : "absolute top-[30vh] left-[6.1vw] w-[100vw] h-max h-[68vh] bg-[#A7748E] rounded-l-[3.3vw] opacity-100";

return (
    <div className={styles.meetTheTeamSection}>
      <p className={styles.highlight}>
        Meet the Team
      </p>     
      
      <div className={`${divStyle} relative ${styles.sliderContainer}`}>
        <Slider {...settings}>
          {members.map((team, index) => (
            <div key={index} className="relative">
              {index === 0 ? (
                <>
              
                  <div className="absolute bottom-[2vh] left-[2.2vw] w-[16vw] h-[5.8vh] h-max rounded-[1.64vw] bg-[#270D43] flex justify-center items-center">
                    <h1 className="text-[2.1vw] font-medium leading-none text-white" style={{fontFamily: 'Nobile, sans-serif'}}>Co-Chairs</h1>
                  </div>
                  <div className="absolute top-[45vh] left-[2vw] w-[4.2vw] h-auto">
                    <img src="src/assets/meettheteam/component1.png" alt="" className="w-full h-auto"/>
                  </div>
                  <div className="absolute top-[33vh] right-[20vw] w-[15vw] h-auto">
                    <img src="src/assets/meettheteam/component2.png" alt="" className="w-full h-auto"/>
                  </div>
                </>
              ) : index === 1 ? (
                <>
                </>
              ) : index === 3 ? (
                <>
                  <div className="absolute bottom-[6vh] left-[2.2vw] w-[16vw] h-[5.8vh] rounded-[1.64vw] bg-[#270D43] flex justify-center items-center">
                    <h1 className="text-[2.1vw] font-medium leading-none text-white" style={{fontFamily: 'Nobile, sans-serif'}}>IT</h1>
                  </div>
                  <div className="absolute top-[-10vh] left-[13vw] w-[15vw] h-auto"> 
                    <img src="src/assets/meettheteam/director-tag.png" alt="" className="w-full h-auto"/>
                  </div>
                  <div className="absolute top-[50vh] left-[1vw] w-[4.2vw] h-auto">
                    <img src="src/assets/meettheteam/component1.png" alt="" className="w-full h-auto"/>
                  </div>
                  <div className="absolute top-[40vh] right-[0vw] w-[20vw] h-auto">
                    <img src="src/assets/meettheteam/component2.png" alt="" className="w-full h-auto"/>
                  </div>
                </>
              ) : null}
              
              {team.length === 5 ? (
                <div className="pl-[8vw] pr-[2vw] py-[2vh] flex flex-col justify-center">
                  {/* First row - 3 members */}
                  <div className="flex justify-start items-center gap-[2.5vw] mb-[1vh] ml-[5vw]">
                    {team.slice(0, 3).map((member, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-[16vw] h-auto"
                          style={{ maxHeight: '30vh', objectFit: 'contain' }}
                        />
                      </div>
                    ))}
                  </div>
                  {/* Second row - 2 members */}
                  <div className="flex justify-start items-center gap-[4vw] mt-[1vh] ml-[13vw]">
                    {team.slice(3, 5).map((member, i) => (
                      <div key={i + 3} className="flex flex-col items-center">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-[16vw] h-auto"
                          style={{ maxHeight: '30vh', objectFit: 'contain' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // For teams with 4 members - 2x2 grid
                <div className="grid grid-cols-2 gap-[2vw] justify-items-start h-full pl-[8vw] pr-[3vw] py-[8vh] ml-[8vw]">
                  {team.map((member, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-[15vw] h-auto"
                        style={{ maxHeight: '28vh', objectFit: 'contain' }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
} 

export default MeetTheTeam;