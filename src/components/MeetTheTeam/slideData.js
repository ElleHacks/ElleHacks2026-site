// src/components/MeetTheTeam/slideData.js

// Decorations
import PinkFlower from '../../assets/meettheteam/pink-flower.png';
import CakeSquare from '../../assets/meettheteam/cake-square.png';
import CakeRectangle from '../../assets/meettheteam/cake-rectangle.png';
import BeigeFlowers from '../../assets/meettheteam/beige-flowers.png';
import GreenFlower from '../../assets/meettheteam/green-flower.png';
import Spoon from '../../assets/meettheteam/spoon.png';
import Pie from '../../assets/meettheteam/pie.png';
import DirectorTag from '../../assets/meettheteam/director-tag.png';
import Cookies from '../../assets/meettheteam/cookies.png';

// Members (co-chairs)
import Julia from '../../assets/meettheteam/julia-nametag.png';
import Katsa from '../../assets/meettheteam/katsa-nametag.png';
import Rumaisa from '../../assets/meettheteam/rumaisa-nametag.png';
import Sabriha from '../../assets/meettheteam/sabriha-nametag.png';
import Aditi from '../../assets/meettheteam/aditi-nametag.png';

// Members (logistics)
import Triya from '../../assets/meettheteam/triya-nametag.png';
import Luiza from '../../assets/meettheteam/luiza-nametag.png';
import Vansh from '../../assets/meettheteam/vansh-nametag.png';
import Anagha from '../../assets/meettheteam/anagha-nametag.png';

// Members (logistics 2)
import Seyedeh from '../../assets/meettheteam/seyedeh-nametag.png';
import Bohina from '../../assets/meettheteam/bohina-nametag.png';
import Iqra from '../../assets/meettheteam/iqra-nametag.png';
import Maryam from '../../assets/meettheteam/maryam-nametag.png';

// Members (IT 1)
import Joanne from '../../assets/meettheteam/joanne-nametag.png';
import Fares from '../../assets/meettheteam/fares-nametag.png';
import Yazan from '../../assets/meettheteam/yazan-nametag.png';
import Ifra from '../../assets/meettheteam/ifra-nametag.png';
import Madeleine from '../../assets/meettheteam/madeleine-nametag.png';

// Members (IT 2)
import Natalie from '../../assets/meettheteam/natalie-nametag.png';
import Nina from '../../assets/meettheteam/nina-nametag.png';
import Angad from '../../assets/meettheteam/angad-nametag.png';
import Sidney from '../../assets/meettheteam/sidney-nametag.png';

// Members (marketing)
import Abeeha from '../../assets/meettheteam/abeeha-nametag.png';
import Julie from '../../assets/meettheteam/julie-nametag.png';
import Kimili from '../../assets/meettheteam/kimili-nametag.png';
import Larissa from '../../assets/meettheteam/larissa-nametag.png';
import Nabeela from '../../assets/meettheteam/nabeela-nametag.png';

// Members (design)
import Samreen from '../../assets/meettheteam/samreen-nametag.png';
import Subin from '../../assets/meettheteam/subin-nametag.png';
import Tashfia from '../../assets/meettheteam/tashfia-nametag.png';

// Members (outreach)
import Brianna from '../../assets/meettheteam/brianna-nametag.png';
import Rosa from '../../assets/meettheteam/rosa-nametag.png';
import Tasfia from '../../assets/meettheteam/tasfia-nametag.png';
import Raazia from '../../assets/meettheteam/raazia-nametag.png';
import Tithi from '../../assets/meettheteam/tithi-nametag.png';
import Niyoosha from '../../assets/meettheteam/niyoosha-nametag.png';

// Members (community engagement)
import Rodiat from '../../assets/meettheteam/rodiat-nametag.png';
import Bani from '../../assets/meettheteam/bani-nametag.png';
import Vasudha from '../../assets/meettheteam/vasudha-nametag.png';
import Baran from '../../assets/meettheteam/baran-nametag.png';
import Varun from '../../assets/meettheteam/varun-nametag.png';
import Khadija from '../../assets/meettheteam/khadija-nametag.png';

const slideData = {
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
        src: PinkFlower,
        position: "absolute hidden md:block top-[47vh] left-[2vw] w-[4.2vw]"
      },
      {
        type: "image",
        src: CakeSquare,
        position: "absolute md:top-[35vh] top-[25%] right-[15%] md:right-[20vw] w-[15vw]"
      },
      {
        type: "label",
        text: "Co-Chairs",
        position: "absolute md:bottom-[2vh] md:left-[2.2vw] left-[37%] w-[16vw] md:h-[10vh] h-[6%] text-[.7vw] font-medium leading-none text-white rounded-[1.9vw] bg-[#270D43] grid place-items-center bottom-[87%]"
      }
    ],
    members: [
      {
        name: "Julia Da Silva",
        image: Julia,
        position: "absolute bg-contain md:top-[5vh] top-[15%] left-[20%] md:left-[15vw] w-[23%] md:w-[16vw]"
      },
      {
        name: "Katsa Bejemil",
        image: Katsa,
        position: "absolute md:top-[5vh] top-[15%] left-[45%] md:left-[35vw] w-[23%] md:w-[16vw]"
      },
      {
        name: "Rumaisa Nawar",
        image: Rumaisa,
        position: "absolute md:top-[5vh] top-[50%] left-[6%] md:left-[55vw] w-[23%] md:w-[16vw]"
      },
      {
        name: "Sabriha Amin",
        image: Sabriha,
        position: "absolute md:top-[35vh] top-[50%] left-[31%] md:left-[25vw] w-[23%] md:w-[16vw]"
      },
      {
        name: "Aditi Patel",
        image: Aditi,
        position: "absolute md:top-[35vh] top-[50%] left-[56%] md:left-[45vw] w-[23%] md:w-[16vw]"
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
        position: "absolute md:bottom-[2%] md:left-[2.2%] w-[16vw] md:h-[10vh] left-[37%] bottom-[100%] h-[6%] text-[.7vw] font-medium leading-none text-white rounded-[1.9vw] bg-[#270D43] grid place-items-center"
      },
      {
        type: "image",
        src: CakeRectangle,
        position: "absolute hidden md:block top-[5vh] right-[10vw] w-[20vw]"
      },
      {
        type: "image",
        src: BeigeFlowers,
        position: "absolute md:top-[37vh] top-[75%] left-[81%] md:left-[2vw] w-[10vw]"
      },
      {
        type: "image",
        src: DirectorTag,
        position: "absolute md:top-0 rotate-10 left-[31.5%] md:left-[28.5vw] w-[15%] md:w-[12vw] z-1"
      }
    ],
    members: [
      {
        name: "Triya Augustine",
        image: Triya,
        position: "absolute top-[5%] left-[20%] md:top-[7%] md:left-[20vw] w-[23%] md:w-[16%]"
      },
      {
        name: "Luiza Teles",
        image: Luiza,
        position: "absolute md:top-[7%] top-[5%] left-[45%] md:left-[47vw] w-[23%] md:w-[16%]"
      },
      {
        name: "Vansh Madan",
        image: Vansh,
        position: "absolute md:top-[50%] top-[41%] left-[6%] md:left-[32vw] w-[23%] md:w-[16%]"
      },
      {
        name: "Anagha Koroth",
        image: Anagha,
        position: "absolute md:top-[50%] top-[41%] left-[32%] md:left-[58vw] w-[23%] md:w-[16%]"
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
        position: "absolute hidden md:block bottom-[2vh] left-[2.2vw] w-[16vw] h-[10vh] text-[.7vw] font-medium leading-none text-white rounded-[1.9vw] bg-[#270D43] md:grid md:place-items-center"
      },
      {
        type: "image",
        src: GreenFlower,
        position: "absolute hidden md:block bottom-[2vh] left-[20vw] w-[5vw]"
      },
      {
        type: "image",
        src: Spoon,
        position: "absolute hidden md:block top-[5vh] right-[27vw] w-[7vw]"
      },
      {
        type: "image",
        src: Pie,
        position: "absolute hidden md:block top-[5vh] right-[17vw] w-[12vw]"
      }
    ],
    members: [
      {
        name: "Seyedeh Sara Alav",
        image: Seyedeh,
        position: "absolute md:top-[7%] -top-[57%] left-[58%] md:left-[20vw] w-[23%] md:w-[16%]"
      },
      {
        name: "Bohina Manochehrzadeh",
        image: Bohina,
        position: "absolute md:top-[7%] -top-[20%] left-[32%] md:left-[47vw] w-[23%] md:w-[16%]"
      },
      {
        name: "Irqa Inam",
        image: Iqra,
        position: "absolute md:top-[50%] -top-[20%] left-[6%] md:left-[32vw] w-[23%] md:w-[16%]"
      },
      {
        name: "Maryam Malik",
        image: Maryam,
        position: "absolute md:top-[50%] -top-[20%] left-[58%] md:left-[57vw] w-[23%] md:w-[16%]"
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
        src: DirectorTag,
        position: "absolute md:top-[2.5vh] rotate-10 md:left-[25.5vw] -top-[71%] left-[17%] w-[15%] md:w-[10vw] z-1"
      },
      {
        type: "image",
        src: PinkFlower,
        position: "absolute md:top-[48vh] -top-[71%] left-[55%] md:left-[2vw] w-[6.5%] md:w-[4.3vw]"
      },
      {
        type: "image",
        src: CakeSquare,
        position: "absolute md:block hidden top-[35vh] right-[20vw] w-[15vw]"
      },
      {
        type: "label",
        text: "IT",
        position: "absolute md:bottom-[2vh] -top-[74%] md:top-[revert] left-[37%] md:left-[2.2vw] w-[16vw] md:h-[10vh] h-[6%] text-[.7vw] font-medium leading-none text-white rounded-[1.9vw] bg-[#270D43] grid place-items-center"
      }
    ],
    members: [
      {
        name: "Joanne Wijetunga",
        image: Joanne,
        position: "absolute md:top-[7vh] -top-[65%] left-[6%] md:left-[18vw] w-[23%] md:w-[16vw]"
      },
      {
        name: "Fares Islam",
        image: Fares,
        position: "absolute md:top-[7vh] -top-[65%] left-[32%] md:left-[38vw] w-[23%] md:w-[16vw]"
      },
      {
        name: "Yazan Haddad",
        image: Yazan,
        position: "absolute md:top-[7vh] -top-[65%] left-[58%] md:left-[58vw] w-[23%] md:w-[16vw]"
      },
      {
        name: "Ifra Inam",
        image: Ifra,
        position: "absolute md:top-[37vh] -top-[30%] left-[6%] md:left-[28vw] w-[23%] md:w-[16vw]"
      },
      {
        name: "Madeleine Phan",
        image: Madeleine,
        position: "absolute md:top-[37vh] md:left-[48vw] -top-[30%] left-[32%] w-[23%] md:w-[16vw]"
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
        src: CakeRectangle,
        position: "absolute hidden md:block top-[3vh] right-[43vw] w-[17vw]"
      },
      {
        type: "image",
        src: BeigeFlowers,
        position: "absolute hidden md:block top-[35vh] right-[27vw] w-[7vw] rotate-270"
      },
      {
        type: "label",
        text: "IT",
        position: "absolute md:block hidden bottom-[2vh] left-[2.2vw] w-[16vw] h-[10vh] text-[.7vw] font-medium leading-none text-white rounded-[1.9vw] bg-[#270D43] md:grid md:place-items-center"
      }
    ],
    members: [
      {
        name: "Natalie Lewis",
        image: Natalie,
        position: "absolute md:top-[7vh] -top-[130%] left-[58%] md:left-[22vw] w-[23%] md:w-[16vw]"
      },
      {
        name: "Nina Dang",
        image: Nina,
        position: "absolute md:top-[7vh] md:left-[62vw] -top-[95%] left-[58%] w-[23%] md:w-[16vw]"
      },
      {
        name: "Angad Ahluwalia",
        image: Angad,
        position: "absolute md:top-[37vh] -top-[95%] left-[6%] md:left-[32vw] w-[23%] md:w-[16vw]"
      },
      {
        name: "Sidney Liu",
        image: Sidney,
        position: "absolute md:top-[37vh] md:left-[52vw] left-[32%] -top-[95%] w-[23%] md:w-[16vw]"
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
        src: Pie,
        position: "absolute md:top-[41vh] -top-[129%] right-[11%] md:right-[19vw] w-[14%] md:w-[11vw]"
      },
      {
        type: "image",
        src: Spoon,
        position: "absolute md:top-[44vh] -top-[130%] right-[22%] md:right-[15.5vw] w-[9%] md:w-[6vw] md:rotate-180"
      },
      {
        type: "image",
        src: PinkFlower,
        position: "absolute hidden md:block top-[45vh] left-[8vw] w-[4.2vw]"
      },
      {
        type: "label",
        text: "Marketing",
        position: "absolute md:bottom-[2vh] md:left-[2.2vw] -top-[150%] md:top-[revert] left-[37%] w-[16vw] md:h-[10vh] h-[6%] text-[.7vw] font-medium leading-none text-white rounded-[1.9vw] bg-[#270D43] grid place-items-center"
      }
    ],
    members: [
      {
        name: "Abeeha Zubair",
        image: Abeeha,
        position: "absolute md:top-[7vh] md:left-[22vw] left-[20%] -top-[140%] w-[23%] md:w-[16vw]"
      },
      {
        name: "Julie Bautista",
        image: Julie,
        position: "absolute md:top-[7vh] left-[45%] -top-[140%] md:left-[42vw] w-[23%] md:w-[16vw]"
      },
      {
        name: "Kimili Nguyen",
        image: Kimili,
        position: "absolute md:top-[7vh] -top-[105%] left-[6%] md:left-[62vw] w-[23%] md:w-[16vw]"
      },
      {
        name: "Larissa Singh",
        image: Larissa,
        position: "absolute md:top-[37vh] md:left-[32vw] -top-[105%] left-[32%] w-[23%] md:w-[16vw]"
      },
      {
        name: "Nabeela Ansari",
        image: Nabeela,
        position: "absolute md:top-[37vh] -top-[105%] left-[58%] md:left-[52vw] w-[23%] md:w-[16vw]"
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
        src: DirectorTag,
        position: "absolute md:top-[2vh] md:right-[42vw] md:left-[revert] md:w-[10vw] -top-[156%] rotate-10 left-[17%] w-[15%] z-1"
      },
      {
        type: "image",
        src: CakeRectangle,
        position: "absolute md:block hidden top-[45vh] right-[43vw] w-[15vw] rotate-10"
      },
      {
        type: "image",
        src: GreenFlower,
        position: "absolute block md:hidden left-[55%] -top-[153%] w-[7%]"
      },
      {
        type: "label",
        text: "Design",
        position: "absolute md:bottom-[2vh] -top-[160%] md:top-[revert] left-[37%] md:left-[2.2vw] w-[16vw] md:h-[10vh] h-[6%] text-[.7vw] font-medium leading-none text-white rounded-[1.9vw] bg-[#270D43] grid place-items-center"
      },
      {
        type: "image",
        src: BeigeFlowers,
        position: "absolute md:block hidden top-[5vh] left-[35vw] w-[7vw] rotate-270"
      }
    ],
    members: [
      {
        name: "Samreen Ahmed",
        image: Samreen,
        position: "absolute md:top-[33vh] md:left-[22vw] -top-[150%] left-[32%] w-[23%] md:w-[16vw]"
      },
      {
        name: "Subin Hwang",
        image: Subin,
        position: "absolute md:top-[8vh] md:left-[41vw] -top-[150%] left-[6%] w-[23%] md:w-[16vw]"
      },
      {
        name: "Tashfia Oyshi",
        image: Tashfia,
        position: "absolute md:top-[33vh] md:left-[62vw] -top-[150%] left-[58%] w-[23%] md:w-[16vw]"
      }
    ]
  },

  Outreach: {
    title: "Outreach",
    slideConfig: {
      width: "105vw",
      height: "72vh",
      bgColor: "#A7748E"
    },
    decorations: [
      {
        type: "image",
        src: PinkFlower,
        position: "absolute md:block hidden top-[5vh] right-[21vw] w-[5vw]"
      },
      {
        type: "image",
        src: DirectorTag,
        position: "absolute md:top-[1.5vh] md:left-[25.5vw] -top-[202%] left-[17%] w-[15%] rotate-10 md:w-[10vw] z-1"
      },
      {
        type: "label",
        text: "Outreach",
        position: "absolute md:bottom-[2vh] -top-[205%] md:top-[revert] left-[37%] md:left-[2.2vw] w-[16vw] h-[6%] md:h-[10vh] text-[.7vw] font-medium leading-none text-white rounded-[1.9vw] bg-[#270D43] grid place-items-center"
      }
    ],
    members: [
      {
        name: "Brianna Nguyen",
        image: Brianna,
        position: "absolute md:top-[7vh] md:left-[18vw] -top-[196%] left-[6%] w-[23%] md:w-[16vw]"
      },
      {
        name: "Rosa Sakhpour",
        image: Rosa,
        position: "absolute md:top-[7vh] -top-[196%] left-[32%] md:left-[38vw] w-[23%] md:w-[16vw]"
      },
      {
        name: "Tasfia Afrida",
        image: Tasfia,
        position: "absolute md:top-[7vh] -top-[196%] left-[58%] md:left-[58vw] w-[23%] md:w-[16vw]"
      },
      {
        name: "Raazia Shohab",
        image: Raazia,
        position: "absolute md:top-[37vh] md:left-[28vw] -top-[163%] left-[6%] w-[23%] md:w-[16vw]"
      },
      {
        name: "Tithi Patel",
        image: Tithi,
        position: "absolute md:top-[37vh] md:left-[46vw] left-[32%] -top-[163%] w-[23%] md:w-[16vw]"
      },
      {
        name: "Niyoosha Tahimi",
        image: Niyoosha,
        position: "absolute md:top-[37vh] md:left-[64vw] -top-[163%] left-[58%] w-[23%] md:w-[16vw]"
      }
    ]
  },

  CommunityEngagement: {
    title: "Community Engagement",
    slideConfig: {
      width: "105vw",
      height: "72vh",
      bgColor: "#A7748E"
    },
    decorations: [
      {
        type: "image",
        src: DirectorTag,
        position: "absolute md:top-[1vh] md:left-[28.5vw] -top-[211%] left-[17%] rotate-10 w-[15%] md:w-[10vw] z-1"
      },
      {
        type: "image",
        src: Cookies,
        position: "absolute md:top-[35vh] -top-[138%] left-[73%] md:left-[17vw] w-[13%] md:w-[12vw]"
      },
      {
        type: "image",
        src: BeigeFlowers,
        position: "absolute top-[5vh] hidden md:block right-[12vw] w-[7vw] rotate-270"
      },
      {
        type: "label",
        text: "Community Engagement",
        position: "absolute md:bottom-[2vh] md:top-[revert] -top-[215%] left-[29%] md:left-[8.5vw] md:w-[26vw] w-[32vw] md:h-[9vh] h-[7%] md:text-[.5vw] text-[.7vw] font-medium leading-none text-white rounded-[1.9vw] bg-[#270D43] grid place-items-center"
      }
    ],
    members: [
      {
        name: "Rodiat Adeoye",
        image: Rodiat,
        position: "absolute md:top-[7vh] -top-[205%] md:left-[21vw] w-[23%] left-[6%] md:w-[16vw]"
      },
      {
        name: "Bani Kaur",
        image: Bani,
        position: "absolute md:top-[7vh] -top-[205%] md:left-[41vw] left-[32%] w-[23%] md:w-[16vw]"
      },
      {
        name: "Vasudha Rampal",
        image: Vasudha,
        position: "absolute md:top-[7vh] -top-[205%] md:left-[61vw] left-[58%] w-[23%] md:w-[16vw]"
      },
      {
        name: "Baran Parsi",
        image: Baran,
        position: "absolute md:top-[37vh] -top-[171%] md:left-[31vw] left-[6%] w-[23%] md:w-[16vw]"
      },
      {
        name: "Varun Patel",
        image: Varun,
        position: "absolute md:top-[37vh] -top-[171%] md:left-[51vw] left-[32%] w-[23%] md:w-[16vw]"
      },
      {
        name: "Khadija Saleem",
        image: Khadija,
        position: "absolute md:top-[37vh] -top-[171%] left-[58%] md:left-[71vw] w-[23%] md:w-[16vw]"
      }
    ]
  }
};

const slides = [
  slideData.coChairs,
  slideData.Logistics1,
  slideData.Logistics2,
  slideData.IT1,
  slideData.IT2,
  slideData.Marketing,
  slideData.Design,
  slideData.Outreach,
  slideData.CommunityEngagement
];

export { slideData, slides };
