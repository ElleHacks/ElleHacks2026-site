import React, { useState } from "react";
import styles from "./MeetTheTeam.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ----------------------
// NAVIGATION ARROWS
// ----------------------
function NextArrow({ onClick, currentSlide, slideCount }) {
  // Always show next arrow except on the last slide
  if (currentSlide === 0 ) 
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
  // Hide previous arrow on first slide
  if (currentSlide === 0) return null;

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
// TEAM DATA STRUCTURE
// ----------------------
const teamData = {
  coChairs: {
    title: "Co-Chairs",
    slideConfig: {
      width: "105vw",
      height: "72vh",
      bgColor: "#A7748E"
    },
    decorations: [
      {
        type: "image",
        src: "src/assets/meettheteam/pink-flower.png",
        position: "absolute top-[50vh] left-[2vw] w-[4.2vw]"
      },
      {
        type: "image", 
        src: "src/assets/meettheteam/cake-square.png",
        position: "absolute top-[35vh] right-[20vw] w-[15vw]"
      },
      {
        type: "label",
        text: "Co-Chairs",
        position: "absolute bottom-[2vh] left-[2.2vw] w-[16vw] h-[5.8vh] rounded-[1.64vw] bg-[#270D43] flex justify-center items-center"
      }
    ],
    members: [
      {
        name: "Julia Da Silva",
        image: "src/assets/meettheteam/julia-nametag.png",
        position: "absolute top-[5vh] left-[15vw] w-[16vw]"
      },
      {
        name: "Katsa Bejemil", 
        image: "src/assets/meettheteam/katsa-nametag.png",
        position: "absolute top-[5vh] left-[35vw] w-[16vw]"
      },
      {
        name: "Rumaisa Nawar",
        image: "src/assets/meettheteam/rumaisa-nametag.png", 
        position: "absolute top-[5vh] left-[55vw] w-[16vw]"
      },
      {
        name: "Sabriha Amin",
        image: "src/assets/meettheteam/sabriha-nametag.png",
        position: "absolute top-[35vh] left-[25vw] w-[16vw]"
      },
      {
        name: "Aditi Patel",
        image: "src/assets/meettheteam/aditi-nametag.png",
        position: "absolute top-[35vh] left-[45vw] w-[16vw]"
      }
    ]
  },

  Logistics1: {
    title: "Logistics",
    slideConfig: {
      width: "100vw",
      height: "68vh", 
      bgColor: "#A7748E"
    },
    decorations: [
      {
        type: "label",
        text: "Logistics",
        position: "absolute bottom-[2vh] left-[2.2vw] w-[16vw] h-[5.8vh] rounded-[1.64vw] bg-[#270D43] flex justify-center items-center"
      },
      {
        type: "image",
        src: "src/assets/meettheteam/cake-rectangle.png",
        position: "absolute top-[5vh] right-[10vw] w-[15vw]"
      },
      {
        type: "image", 
        src: "src/assets/meettheteam/beige-flowers.png",
        position: "absolute top-[40vh] left-[2vw] w-[10vw]"
      },
      {
        type: "image", 
        src: "src/assets/meettheteam/director-tag.png",
        position: "absolute top-[-2vh] left-[29vw] w-[10vw]"
      }
    ],
    members: [
      {
        name: "Triya Augustine",
        image: "src/assets/meettheteam/triya-nametag.png",
        position: "absolute top-[5vh] left-[20vw] w-[16vw]"
      },
      {
        name: "Luiza Teles",
        image: "src/assets/meettheteam/luiza-nametag.png", 
        position: "absolute top-[5vh] left-[50vw] w-[6vw]"
      },
      {
        name: "Vansh Madan",
        image: "src/assets/meettheteam/vansh-nametag.png",
        position: "absolute top-[34vh] left-[35vw] w-[15vw]"
      },
      {
        name: "Anagha Koroth", 
        image: "src/assets/meettheteam/anagha-nametag.png",
        position: "absolute top-[34vh] left-[55vw] w-[16vw]"
      }
    ]
  },
    Logistics2: {
    title: "Logistics",
    slideConfig: {
      width: "100vw",
      height: "68vh", 
      bgColor: "#A7748E"
    },
    decorations: [
      {
        type: "label",
        text: "Logistics",
        position: "absolute bottom-[2vh] left-[2.2vw] w-[16vw] h-[5.8vh] rounded-[1.64vw] bg-[#270D43] flex justify-center items-center"
      },
      {
        type: "image",
        src: "src/assets/meettheteam/green-flower.png", // brown flower
        position: "absolute bottom-[2vh] left-[19vw] w-[5vw]"
      },
      {
        type: "image",
        src: "src/assets/meettheteam/spoon.png", // spoon
        position: "absolute top-[5vh] right-[30vw] w-[5vw]"
      },
      {
        type: "image", 
        src: "src/assets/meettheteam/pie.png", // pink pie
        position: "absolute top-[5vh] right-[21vw] w-[10vw]"
      },
    ],
    members: [
      {
        name: "Seyedeh Sara Alav",
        image: "src/assets/meettheteam/seyedeh-nametag.png",
        position: "absolute top-[5vh] left-[20vw] w-[16vw]"
      },
      {
        name: "Bohina Manochehrzadeh",
        image: "src/assets/meettheteam/bohina-nametag.png", 
        position: "absolute top-[5vh] left-[50vw] w-[6vw]"
      },
      {
        name: "Irqa Inam",
        image: "src/assets/meettheteam/iqra-nametag.png",
        position: "absolute top-[34vh] left-[35vw] w-[15vw]"
      },
      {
        name: "Maryam Malik",
        image: "src/assets/meettheteam/maryam-nametag.png",
        position: "absolute top-[34vh] left-[55vw] w-[16vw]"
      }
    ]
  },
    IT1: {
    title: "IT",
    slideConfig: {
      width: "105vw",
      height: "72vh",
      bgColor: "#A7748E"
    },
    decorations: [
       {
        type: "image", 
        src: "src/assets/meettheteam/director-tag.png",
        position: "absolute top-[-2vh] left-[27vw] w-[10vw]"
      },
      {
        type: "image",
        src: "src/assets/meettheteam/pink-flower.png",
        position: "absolute top-[50vh] left-[2vw] w-[4.2vw]"
      },
      {
        type: "image", 
        src: "src/assets/meettheteam/cake-square.png",
        position: "absolute top-[35vh] right-[20vw] w-[15vw]"
      },
      {
        type: "label",
        text: "IT",
        position: "absolute bottom-[2vh] left-[2.2vw] w-[16vw] h-[5.8vh] rounded-[1.64vw] bg-[#270D43] flex justify-center items-center"
      }
    ],
    members: [
      {
        name: "Joanne Wijetunga",
        image: "src/assets/meettheteam/joanne-nametag.png",
        position: "absolute top-[5vh] left-[18vw] w-[16vw]"
      },
      {
        name: "Fares Islam", 
        image: "src/assets/meettheteam/fares-nametag.png",
        position: "absolute top-[5vh] left-[38vw] w-[16vw]"
      },
      {
        name: "Yazan Haddad",
        image: "src/assets/meettheteam/yazan-nametag.png",
        position: "absolute top-[5vh] left-[58vw] w-[16vw]"
      },
      {
        name: "Ifra Inam",
        image: "src/assets/meettheteam/ifra-nametag.png",
        position: "absolute top-[35vh] left-[28vw] w-[16vw]"
      },
      {
        name: "Madeleine Phan",
        image: "src/assets/meettheteam/madeleine-nametag.png",
        position: "absolute top-[35vh] left-[48vw] w-[16vw]"
      }
    ]
  },
    IT2: {
    title: "IT",
    slideConfig: {
      width: "105vw",
      height: "72vh",
      bgColor: "#A7748E"
    },
    decorations: [
       {
        type: "image",
        src: "src/assets/meettheteam/cake-rectangle.png",
        position: "absolute top-[3vh] right-[41vw] w-[17vw]"
      },
      {
        type: "image", 
        src: "src/assets/meettheteam/beige-flowers.png",
        position: "absolute top-[35vh] right-[27vw] w-[7vw] rotate-270"
      },
      {
        type: "label",
        text: "IT",
        position: "absolute bottom-[2vh] left-[2.2vw] w-[16vw] h-[5.8vh] rounded-[1.64vw] bg-[#270D43] flex justify-center items-center"
      }
    ],
    members: [
      {
        name: "Natalie Lewis",
        image: "src/assets/meettheteam/natalie-nametag.png",
        position: "absolute top-[5vh] left-[22vw] w-[16vw]"
      },
      {
        name: "Nina Dang",
        image: "src/assets/meettheteam/nina-nametag.png",
        position: "absolute top-[5vh] left-[62vw] w-[16vw]"
      },
      {
        name: "Angad Ahluwalia",
        image: "src/assets/meettheteam/angad-nametag.png",
        position: "absolute top-[35vh] left-[32vw] w-[16vw]"
      },
      {
        name: "Sidney Liu",
        image: "src/assets/meettheteam/sidney-nametag.png",
        position: "absolute top-[35vh] left-[52vw] w-[16vw]"
      }
    ]
  },
    Marketing: {
    title: "Marketing",
    slideConfig: {
      width: "105vw",
      height: "72vh",
      bgColor: "#A7748E"
    },
    decorations: [
       {
        type: "image", 
        src: "src/assets/meettheteam/pie.png", // pink pie
        position: "absolute top-[45vh] right-[21vw] w-[10vw]"
      },
      {
        type: "image",
        src: "src/assets/meettheteam/spoon.png", // spoon
        position: "absolute top-[48vh] right-[18vw] w-[5vw] rotate-180"
      },
      {
        type: "image",
        src: "src/assets/meettheteam/pink-flower.png",
        position: "absolute top-[50vh] left-[8vw] w-[4.2vw]"
      },
      {
        type: "label",
        text: "Marketing",
        position: "absolute bottom-[2vh] left-[2.2vw] w-[16vw] h-[5.8vh] rounded-[1.64vw] bg-[#270D43] flex justify-center items-center"
      }
    ],
    members: [
      {
        name: "Abeeha Zubair",
        image: "src/assets/meettheteam/abeeha-nametag.png",
        position: "absolute top-[5vh] left-[22vw] w-[16vw]"
      },
      {
        name: "Julie Bautista",
        image: "src/assets/meettheteam/julie-nametag.png",
        position: "absolute top-[5vh] left-[42vw] w-[16vw]"
      },
      {
        name: "Kimili Nguyen",
        image: "src/assets/meettheteam/kimili-nametag.png",
        position: "absolute top-[5vh] left-[62vw] w-[16vw]"
      },
      {
        name: "Larissa Singh",
        image: "src/assets/meettheteam/larissa-nametag.png",
        position: "absolute top-[35vh] left-[32vw] w-[16vw]"
      },
      {
        name: "Nabeela Ansari",
        image: "src/assets/meettheteam/nabeela-nametag.png",
        position: "absolute top-[35vh] left-[52vw] w-[16vw]"
      }
    ]
  },
  Design: {
    title: "Design",
    slideConfig: {
      width: "105vw",
      height: "72vh",
      bgColor: "#A7748E"
    },
    decorations: [
       {
        type: "image",
        src: "src/assets/meettheteam/cake-rectangle.png",
        position: "absolute top-[45vh] right-[42vw] w-[15vw] rotate-10"
      },
     
      {
        type: "image", 
        src: "src/assets/meettheteam/beige-flowers.png",
        position: "absolute top-[35vh] right-[27vw] w-[7vw] rotate-270"
      },
      {
        type: "label",
        text: "Design",
        position: "absolute bottom-[2vh] left-[2.2vw] w-[16vw] h-[5.8vh] rounded-[1.64vw] bg-[#270D43] flex justify-center items-center"
      },
      {
        type: "image", 
        src: "src/assets/meettheteam/beige-flowers.png",
        position: "absolute top-[5vh] left-[35vw] w-[7vw] rotate-270"
      },
    ],
    members: [
      {
        name: "Samreen Ahmed",
        image: "src/assets/meettheteam/samreen-nametag.png",
        position: "absolute top-[35vh] left-[22vw] w-[16vw]"
      },
      {
        name: "Subin Hwang",
        image: "src/assets/meettheteam/subin-nametag.png",
        position: "absolute top-[5vh] left-[41vw] w-[16vw]"
      },
      {
        name: "Tashfia Oyshi",
        image: "src/assets/meettheteam/tashfia-nametag.png",
        position: "absolute top-[35vh] left-[62vw] w-[16vw]"
      },
    ]
  },

}
// Convert to slides array for compatibility
const slides = [
  teamData.coChairs,
  teamData.Logistics1,
  teamData.Logistics2,
  teamData.IT1,
  teamData.IT2,
  teamData.Marketing,
  teamData.Design,
];

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


  const getCurrentSlideConfig = () => {
    const slide = slides[currentSlide];
    return slide?.slideConfig || { width: "100vw", height: "68vh", bgColor: "#A7748E" };
  };

  const slideConfig = getCurrentSlideConfig();
  const isLastSlide = currentSlide === slides.length - 1;
  const isCoChairsSlide = currentSlide === 0;

  return (
    <div className={styles.meetTheTeamSection}>
      <p className={styles.highlight}>Meet the Team</p>
      
      <div
        className={`relative transition-all duration-500 ease-in-out ${isCoChairsSlide ? 'rounded-l-[3.3vw]' : ''}`}
        style={{
          position: "absolute",
          top: "27vh",
          left: isCoChairsSlide ? "6.1vw" : "0",
          height: "70vh",
          width: isCoChairsSlide ? "100vw" : "100vw",
          backgroundColor: slideConfig.bgColor,
          overflow: "hidden", // Prevents content overflow issues
        }}
      >
        <Slider ref={setSliderRef} {...sliderSettings}>
          {slides.map((slide, index) => (
            <TeamSlide 
              key={`slide-${index}`}
              slide={slide}
              isActive={currentSlide === index}
              isCoChairsSlide={index === 0}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MeetTheTeam;