import React, { useState } from "react";
import styles from "./MeetTheTeam.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "./slideData";

function NextArrow({ onClick, currentSlide, slideCount }) {
    
  // Always show next arrow except on the last slide
  if (currentSlide === 0)
    return (
      <div
        onClick={onClick}
        className="absolute top-[30vh] right-[7vw] w-[4.4vw] h-[7.8vh] cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity z-10"
      >
        <img
          src="src/assets/meettheteam/next-arrow.png"
          alt="Next"
          className="w-full h-full object-contain"
          style={{ filter: "drop-shadow(0.5vw 0.5vw 0.5vw rgba(0,0,0,0.5))" }}
        />
      </div>
    );

    if (currentSlide === 8)
    return null;

  return (
    <div
      onClick={onClick}
      className="absolute top-[30vh] right-[1vw] w-[4.4vw] h-[7.8vh] cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity z-10"
    >
      <img
        src="src/assets/meettheteam/next-arrow.png"
        alt="Next"
        className="w-full h-full object-contain"
        style={{ filter: "drop-shadow(0.5vw 0.5vw 0.5vw rgba(0,0,0,0.5))" }}
      />
    </div>
  );
}

function PrevArrow({ onClick, currentSlide }) {
  if (currentSlide === 0) return null;

  if (currentSlide === 8) 
  return (
    <div
      onClick={onClick}
      className="absolute top-[30vh] left-[7vw] w-[4.4vw] h-[7.8vh] cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity z-10"
    >
      <img
        src="src/assets/meettheteam/prev-arrow.png"
        alt="Previous"
        className="w-full h-full object-contain"
        style={{ filter: "drop-shadow(0.5vw 0.5vw 0.5vw rgba(0,0,0,0.5))" }}
      />
    </div>
  );

  return (
    <div
      onClick={onClick}
      className="absolute top-[30vh] left-[1vw] w-[4.4vw] h-[7.8vh] cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity z-10"
    >
      <img
        src="src/assets/meettheteam/prev-arrow.png"
        alt="Previous"
        className="w-full h-full object-contain"
        style={{ filter: "drop-shadow(0.5vw 0.5vw 0.5vw rgba(0,0,0,0.5))" }}
      />
    </div>
  );
}

// ----------------------
// SLIDE COMPONENTS
// ----------------------
const SlideDecoration = ({ decoration }) => {
  if (decoration.type === "image") {
    return (
      <img
        src={decoration.src}
        alt=""
        className={`${decoration.position} h-auto`}
      />
    );
  }
  
  if (decoration.type === "label") {
    return (
      <div className={decoration.position}>
        <h1
          className="text-[2.1vw] font-medium leading-none text-white"
          style={{ fontFamily: "Nobile, sans-serif" }}
        >
          {decoration.text}
        </h1>
      </div>
    );
  }
  
  return null;
};

const TeamMember = ({ member }) => (
  <div className={`${member.position} flex flex-col items-center`}>
    <img
      src={member.image}
      alt={member.name}
      className="object-contain w-[16vw] sm:w-[40vw] xs:w-[30vw] max-h-[30vh] sm:max-h-[25vh] xs:max-h-[20vh]"
    />
  </div>
);

const TeamSlide = ({ slide }) => (
  <div className="relative h-[70vh] w-full">
    <div className="relative h-full w-full"> {/* new wrapper */}
      {/* Render decorations */}
      {slide.decorations.map((decoration, index) => (
        <SlideDecoration key={`decoration-${index}`} decoration={decoration} />
      ))}

      {/* Render team members */}
      {slide.members.map((member, index) => (
        <TeamMember key={`member-${index}`} member={member} />
      ))}
    </div>
  </div>
);


// ----------------------
// MAIN COMPONENT
// ----------------------
const MeetTheTeam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    arrows: true,
    adaptiveHeight: true,
  };

  const slideConfig = slides[currentSlide]?.slideConfig || { width: "100vw", height: "68vh", bgColor: "#A7748E" };
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === 8; // slide 8 is the last

  // Dynamic style for slide container
  const getSlideContainerStyle = () => {
    let style = {
      position: "absolute",
      top: "27vh",
      left: isFirstSlide ? "6.1vw" : isLastSlide ? "-6.1vw" : "0",
      height: "70vh",
      width: "100vw",
      backgroundColor: slideConfig.bgColor,
      overflow: "hidden",
    };
    return style;
  };

  return (
    <div className={styles.meetTheTeamSection}>
      <p className={styles.highlight}>Meet the Team</p>
      <div
        className={`relative transition-all duration-500 ease-in-out ${isFirstSlide ? 'rounded-l-[3.3vw]' : ''} ${isLastSlide ? 'rounded-r-[3.3vw]' : ''}`}
        style={getSlideContainerStyle()}
      >
        <Slider ref={setSliderRef} {...sliderSettings}>
          {slides.map((slide, index) => (
            <TeamSlide
              key={`slide-${index}`}
              slide={slide}
              isActive={currentSlide === index}
              isFirstSlide={index === 0}
              isLastSlide={index === 8}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}



export default MeetTheTeam;