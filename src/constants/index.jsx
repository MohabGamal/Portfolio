import {
  javascript,
  typescript,
  css,
  reactjs,
  hardhat,
  tailwind,
  nodejs,
  mongodb,
  solidity,
  docker,
  nuItCs,
  NU,
  AUC,
  Supply,
  nestRealtor,
  Portfolio,
  jest,
  express,
  aws,
  LinkedInSvg,
  StackoverflowSvg,
  next,
  nest,
  mongoose,
  postgres,
  prisma,
  BookingMERN,
  aucCert,
  graduationCert,
  cloud11,
  cloudzlab,
  xperience1st,
  salesforceDev1,
  salesforceLogo,
  trailheadLogo,
} from "../assets"
import {
  BitcoinCanvas,
  ConsoleCanvas,
  IphoneCanvas,
} from "../components/canvas"

export const socialLinks = [
  {
    id: "stackoverflow",
    link: "https://stackoverflow.com/users/14277912/mohab-mohamed-gamal",
    icon: StackoverflowSvg,
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/mohab-gamal-775070214/",
    icon: LinkedInSvg,
  },
  // {
  //   id: "facebook",
  //   link: "https://www.facebook.com/mohab.gamal.50767/",
  //   icon: FacebookSvg,
  // },
  // {
  //   id: "github",
  //   link: "https://github.com/MohabGamal",
  //   icon: GithubSvg,
  // },
]

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Backend Developer",
    Model: () => <ConsoleCanvas />,
  },
  // {
  //   title: "Full-Stack Developer",
  //   icon: mobile,
  // },
  {
    title: "Blockchain Developer",
    Model: () => <BitcoinCanvas />,
  },
  {
    title: "Application Developer",
    Model: () => <IphoneCanvas />,
  },
]

const technologies = [
  // {
  //   name: "HTML",
  //   icon: html,
  //   active: true,
  // },
  {
    name: "Salesforce & Trailhead",
    active: true,
    icon: salesforceLogo,
    pairTechnologyIcon: trailheadLogo,
  },
  {
    name: "CSS & Tailwind",
    active: true,
    icon: css,
    pairTechnologyIcon: tailwind,
  },
  {
    name: "JS & TS",
    active: true,
    icon: javascript,
    pairTechnologyIcon: typescript,
  },
  {
    name: "React & Next",
    active: true,
    icon: reactjs,
    pairTechnologyIcon: next,
  },
  {
    name: "Node & express",
    active: true,
    icon: nodejs,
    pairTechnologyIcon: express,
  },
  {
    name: "Mongo & Mongoose",
    active: true,
    icon: mongodb,
    pairTechnologyIcon: mongoose,
  },
  // {
  //   name: "Nest JS",
  //   active: true,
  //   icon: nest,
  // },
  {
    name: "Postgres & Prisma",
    active: true,
    icon: postgres,
    pairTechnologyIcon: prisma,
  },
  // {
  //   name: "Socket io",
  //   active: true,
  //   icon: socketIo,
  // },
  {
    name: "Solidity & Hardhat",
    active: true,
    icon: solidity,
    pairTechnologyIcon: hardhat,
  },
  // {
  //   name: "git & github Actions",
  //   active: true,
  //   icon: git,
  //   pairTechnologyIcon: githubActions,
  // },
  {
    name: "docker & AWS",
    active: true,
    icon: docker,
    pairTechnologyIcon: aws,
  },
  {
    name: "Jest",
    active: true,
    icon: jest,
  },
]

const experiences = [
  {
    title: "Salesforce Developer & Consultant",
    company_name: "Cloud11",
    icon: cloud11,
    iconBg: "#E6DEDD",
    date: "March 2026 - Now",
    points: [
      "Manage and develop the Salesforce platform, including users, permissions, and data integrity",
      "Integrate Salesforce seamlessly with other systems and applications using APIs",
      "Create reports and dashboards, delivering insights to support decision-making"
    ],
  },
  {
    title: "Salesforce Developer",
    company_name: "Cloudzlab",
    icon: cloudzlab,
    iconBg: "#E6DEDD",
    iconSize: "w-[95%] h-[100%]",
    date: "June 2025 - March 2026",
    points: [
      "Developed Frontend applications using Web Components & JavaScript",
      "Using Apex Programming language, I developed backend applications",
      "By applying Test-Driven-Development (TDD), I achieved at least 75% code coverage",
      "Collaborated closely with business concepts such as CPQ, pricing models, and product configuration",
    ],
  },
  {
    title: "Salesforce Developer Intern",
    company_name: "Xperience 1st",
    icon: xperience1st,
    iconBg: "#E6DEDD",
    iconSize: "w-[100%] h-[100%]",
    date: "Feb 2025 - May 2025",
    points: [
      "Developed Frontend applications using Web Components & JavaScript",
      "Using Apex Programming language, I developed backend applications  ",
      "By applying Test-Driven-Development (TDD), I achieved at least 75% code coverage ",
      "Collaborated closely with business concepts such as CPQ, pricing models, and product configuration ",

    ],
  },
  {
    title: "Blockchain Intern",
    company_name: "NU Research Center",
    icon: nuItCs,
    iconBg: "#E6DEDD",
    iconSize: "w-[100%] h-[100%]",
    date: "July 2022 - October 2022",
    points: [
      "Researched the origin of blockchain through Bitcoin Whitepaper",
      "Built blocks and connected them to form a blockchain",
      "Implemented the PoW algorithm and mining process",
      "Created transactions, wallets, and public/private keys",
    ],
  },
  {
    title: "Computer Science Bachelor",
    company_name: "Nile University ",
    icon: NU,
    iconBg: "#383E56",
    date: "September 2019 - July 2023",
    points: [
      "GPA: 3.7/4",
      "Courses: English, Math, Phsyics, Data Structures, Algorithms, Computer Theory, Operating Systems, Computer Architecture, Computer Networks, Database Systems, Software Engineering, Artificial Intelligence, Computer Vision, 3D Graphics, and more.",
      "Graduation Project: Blockchain-based Crowdfunding Platform",
      "Projects: PageRank algorithm, command line app in C, C++ OOP projects, physical 7 Segment LED, stroke prediction & data analysis, Django E-commerce Website, MIPS multi-cycle-processor using Verilog & Assembly, moving LMS to cloud project management, Unix OS virtual memory mangement in C, coverting regex to NFA/DFA, open-cv Sudoku scanner, detecting IOT malicious trrafic using Machine Learning, creating LL1 compiler, Resnet facial emotion recognition, CNN live drowsiness detection, 3D solar system, Egypt population prediction using Verhulst Model, MySQL hospital management system, and more.",
    ],
  },
  {
    title: "English Courses",
    company_name:
      "American University in Cairo (Schoool of Continuing Education)",
    icon: AUC,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - March 2019",
    points: [
      "Learned professional skills such as Academic Writing, and Presentation Skills",
      "Collaborated with teams and foreigners to complete activities",
      "Held conversations in formal and casual settings",
    ],
  },
]

const certificates = [
  {
    image: salesforceDev1,
    name: "Salesforce",
    position: "",
    logo: salesforceLogo,
    logoBg: "#383E56",
  },
  {
    name: "Ahmed Elmahdy",
    position: "Dean of the School of ITCS at Nile University",
    image: graduationCert,
    logo: nuItCs,
    logoSize: "w-[100%] h-[100%]",
    logoBg: "#E6DEDD",
  },
  {
    image: aucCert,
    name: "Alia Shoeib",
    position: "Dean of the School of Continuing Education",
    logo: AUC,
    logoBg: "#E6DEDD",
  },
]

const projects = [
  {
    name: "Supply: Decentralized-CrowdFunding Platform",
    description:
      "A new platform takes online fundraising to another layer of transparency and security using Web3 technology.",
    tags: [
      {
        name: "solidity",
        color: "black-gray-text-gradient",
      },
      {
        name: "hardhat",
        color: "yellow-text-gradient",
      },
      {
        name: "ipfs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-gray-text-gradient",
      },
      {
        name: "joi",
        color: "joi-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "tailwind-blue-text-gradient",
      },
      {
        name: "jest",
        color: "red-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "aws-orange-text-gradient",
      },
    ],
    image: Supply,
    source_code_link:
      "https://github.com/MohabGamal/Decentralized-CrowdFunding",
    website_link: "https://54.159.193.20/",
  },
  {
    name: "My 3D Portfolio Website",
    description:
      "A personal portfolio website that showcases my skills and projects in a 3D environment.",
    tags: [
      {
        name: "three.js",
        color: "white-gray-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "white-gray-text-gradient",
      },
      {
        name: "blender",
        color: "aws-orange-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "tailwind-blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "framer-motion-text-gradient",
      },
      {
        name: "email.js",
        color: "yellow-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/MohabGamal/Portfolio",
  },
  {
    name: "Booking.com Clone & Admin Dashboard",
    description:
      "A clone of the famous website Booking.com using the MERN stack.",
    tags: [
      {
        name: "express",
        color: "white-gray-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "passport.js",
        color: "passport-js-text-gradient",
      },
      {
        name: "jwt",
        color: "jwt-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "material-ui",
        color: "blue-text-gradient",
      },
    ],
    image: BookingMERN,
    source_code_link:
      "https://github.com/MohabGamal/MERN-Booking-Clone_React-Express-JWT-Cookies",
  },
  {
    name: "Real Estate Website",
    description:
      "A real estate website that allows users to search for properties and contact the real estate agent using Nest.js.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nest.js",
        color: "red-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "class-validator",
        color: "white-gray-text-gradient",
      },
      {
        name: "jwt",
        color: "jwt-text-gradient",
      },
      {
        name: "jest",
        color: "red-text-gradient",
      },
    ],
    image: nestRealtor,
    source_code_link: "https://github.com/MohabGamal",
  },
]

const CV_LINK = "https://nileuniversity-my.sharepoint.com/:b:/g/personal/m_gamalaldeen_nu_edu_eg/IQBAv0Kwu6TsSoGwt7VvLZXfAcNQ_m8LHRaJMrDK_XIX2sw?e=moKplo"
const CV_FILE = import.meta.env.BASE_URL + "/MohabGamalCV.pdf"
const isTouchScreen = "ontouchstart" in window || navigator.msMaxTouchPoints


const defaultAnimations = [
  "Clapping",
  "Standing",
  "Waving"
]

const playgroundAnimations = [
  "Dying",
  "Kicked in Groin",
  "Fliping",
  "Breakdancing 1",
  "Breakdancing 2",
  "Arguing",
  "Knocked Unconscious",
  "Korean Dancing",
  "Crashing Screen",
  "Ninja",
]
const repeatedOnceAnimations = [
  "Dying",
  "Kicked in Groin",
  "Knocked Unconscious",
  "Crashing Screen",
]

export {
  services,
  technologies,
  experiences,
  certificates,
  projects,
  defaultAnimations,
  playgroundAnimations,
  repeatedOnceAnimations,
  CV_LINK,
  CV_FILE,
  isTouchScreen,
}
