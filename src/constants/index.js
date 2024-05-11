import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  // starbucks,
   tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";

import tcs from "../assets/company/tcs.png"
import Python from "../assets/tech/Python.png"
import django from "../assets/tech/djangoo.png"
import genesis from '../assets/company/genesis.png'
import ku from '../assets/company/KUU.png'

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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "MERN Stack",
    icon: backend,
  },
  
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "python",
    icon: Python,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "May 2019 - Aug 2020",
    points: [
      "Collaborated on React.js web app development,specializing in creating e-commerce Componentsimproving user experience",
      "Utilized React Hooks and Context API to efficiently manage component state.",
      "Integrated RESTful APIs, for inventory management systems, to ensure seamless transactions and accurate product availability.",
      "Created robust inventory management API with Node.js and MongoDB backend.",
      "Optimized existing endpoints for performance and compatibility",
      "Verified RESTful API functionality and reliability using Postman for seamless integration and consistent performance.",
      "Actively collaborated with the team using GitHub for version control, code sharing, debugging, and issue tracking."

    ],
  },
  {
    title: "Python Backend Developer",
    company_name: "Genesis Technologies",
    icon: genesis,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - July 2022",
    points: [
      "Developed and deployed a web application using Django framework, leveraging Python for backend logic, database management, and user authentication, resulting in improved efficiency and user experience. ",
      "Implemented RESTful APIs using Flask framework to facilitate seamless communication between frontend and backend components, ensuring smooth data transfer and integration with third-party services.",
      "Utilized Python libraries such as NumPy and pandas for data manipulation and analysis in a financial management application, enabling real-time insights and informed decision-making for stakeholders",
      "Integrated asynchronous task queues with Celery and Redis to handle background processing",
      "Collaborated with cross-functional teams to architect and develop a scalable microservices architecture using Python-based technologies, including Docker and Kubernetes, for a cloud-native application, resulting in improved maintainability and scalability."
    ],
  },
  {
    title: "Web Developer",
    company_name: "University Of Kansas",
    icon: ku,
    iconBg: "#383E56",
    date: "Dec 2022 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graduate Research Assistant",
    company_name: "University Of Kansas",
    icon: ku,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      " Conducted comprehensive data cleaning and preprocessing to ensure the quality and reliability of input data for machine learning model training.",
      "Used Roboflow, a powerful image annotation platform, to annotate and label large volumes of images efficiently and accurately for machine learning model training. Applied various annotation techniques and workflows provided by Roboflow to generate high-quality training datasets tailored to specific project requirements.",
      "Implemented data normalization, outlier detection, and feature engineering techniques to optimize model performance and generalization.",
      "Applied data augmentation techniques such as rotation, flipping, and scaling to expand training datasets and improve model generalization capabilities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Docify",
    description:
      "AI-powered documentation platform tailored for GitHub repositories and Create Documents for github repos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "brown-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "Github Api",
        color: "brown-text-gradient",
      },
      {
        name: "OpenAi",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Rizwan1387/docify",
  },
  {
    name: "ViFri",
    description:
      "ViFri is an innovative mobile app designed to cater to a wide range of audiences to help users keep track of their ingredients' expectation dates.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
      {
        name: "express.js",
        color: "yellow-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/syed6268/ViFri",
  },
  {
    name: "ProCo",
    description:
      " The ProCo platform enables mentors to discover and hire talented students based on their profiles, fostering academic growth and innovation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb ATLAS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Rizwan1387/HACK_KU/tree/main/proco1",
  },
];

export { services, technologies, experiences, testimonials, projects };
