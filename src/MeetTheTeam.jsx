import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react'

const members = [
  [
    {name: 'Julia Da Silva', img: 'src/assets/meet-the-team/julia-nametag.png',},
    {name: 'Katsa Bejemil', img: 'src/assets/meet-the-team/katsa-nametag.png',},
    {name: 'Rumaisa Nawar', img: 'src/assets/meet-the-team/rumaisa-nametag.png',},
    {name: 'Sabriha Amin', img: 'src/assets/meet-the-team/sabriha-nametag.png',},
    {name: 'Aditi Patel', img: 'src/assets/meet-the-team/aditi-nametag.png',}
    
  ],
  [
    {name: 'Triya Augustine', img: 'src/assets/meet-the-team/triya-nametag.png',},
    {name: 'Luiza Teles', img: 'src/assets/meet-the-team/luiza-nametag.png',},
    {name: 'Vansh Madan', img: 'src/assets/meet-the-team/vansh-nametag.png',},
    {name: 'Anagha Koroth', img: 'src/assets/meet-the-team/anagha-nametag.png',}
  ], 
  [
    {name: 'Seyedeh Sara Alav', img: 'src/assets/meet-the-team/seyedeh-nametag.png',},
    {name: 'Bohina Manochehrzadeh', img: 'src/assets/meet-the-team/bohina-nametag.png',},
    {name: 'Iqra Inam', img: 'src/assets/meet-the-team/iqra-nametag.png',},
    {name: 'Maryam Malik', img: 'src/assets/meet-the-team/maryam-nametag.png',}
  ], 
  [
    {name: 'JOANNE WIJETUNGA', img: 'src/assets/meet-the-team/joanne-nametag.png',},
    {name: 'Fares Islam', img: 'src/assets/meet-the-team/fares-nametag.png',},
    {name: 'Yazan Haddad', img: 'src/assets/meet-the-team/yazan-nametag.png',},
    {name: 'Ifra Inam', img: 'src/assets/meet-the-team/ifra-nametag.png',},
    {name: 'Madeleine Phan', img: 'src/assets/meet-the-team/madeleine-nametag.png',}
  ]
]

function NextArrow({ onClick }) {
  return (
    <img src="src/assets/meet-the-team/next-arrow.png" alt="Next" onClick={onClick} className="absolute right-2 top-1/2 -translate-y-1/2 w-20 h-20 cursor-pointer hover:scale-110 transition drop-shadow-2xl" />
  )
}

function PrevArrow({ onClick }) {
  return (
    <img src="src/assets/meet-the-team/prev-arrow.png" alt="Previous" onClick={onClick} className="absolute left-2 top-1/2 -translate-y-1/2 w-20 h-20 cursor-pointer hover:scale-110 transition z-10 drop-shadow-2xl" />
  )
}

function MeetTheTeam() {

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
  }

    const divStyle =
    current === 0
      ? "absolute top-[252px] left-[117px] w-[1383px] h-[725px] bg-[#A7748E] rounded-l-[63px] p-10 opacity-100"
      : "absolute top-[252px] w-[1500px] h-[725px] bg-[#A7748E] p-10 opacity-100";

  return (
    <>
      <div className="bg-gradient-to-b from-[#6F4480] to-[#21083D] w-375 h-268">
        <h1 className="text-[#FFFFFF] font-[Nobile] font-bold text-[60px] absolute left-[192px] top-[142px] text-shadow-lg">Meet The Team</h1>
        <div className={divStyle}>
          <Slider {...settings}>
            {members.map((team, index) => (
              <div key={index} className="relative">
              {index === 0 ? (
                <>
                <div className="absolute top-[540px] left-[20px] bg-[#270D43] rounded-[40px] p-5 w-60 flex justify-center items-center">
                  <h1 className="text-white font-[Nobile] text-[40px] font-medium">Co-Chairs</h1>
                </div>
                <div className="absolute top-[410px] left-[10px]">
                  <img src="src/assets/meet-the-team/component1.png" alt=""/>
                </div>
                <div className="absolute top-[320px] right-[-2px] w-80">
                  <img src="src/assets/meet-the-team/component2.png" alt=""/>
                </div>
                </>
              ) : index === 1 ? (
                  <>
                  </>
              ) : index === 3 ? (
                <>
                <div className="absolute top-[540px] left-[20px] bg-[#270D43] rounded-[40px] p-5 w-60 flex justify-center items-center">
                  <h1 className="text-white font-[Nobile] text-[40px] font-medium">IT</h1>
                </div>
                <div className="absolute top-[-70px] left-[250px]"> 
                  <img src="src/assets/meet-the-team/director-tag.png" alt=""/>
                </div>
                <div className="absolute top-[410px] left-[10px]">
                  <img src="src/assets/meet-the-team/component1.png" alt=""/>
                </div>
                <div className="absolute top-[320px] right-[-2px] w-80">
                  <img src="src/assets/meet-the-team/component2.png" alt=""/>
                </div>
                </>
              ) : null}
              <div className="flex flex-wrap gap-6 justify-center">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-[309.14px] h-auto"
                />
              </div>
            ))}
          </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
     </>
  )
}

export default MeetTheTeam