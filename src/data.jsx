import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiTelegram2Fill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  laravel,
  codeigniter,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  telegramicon,
  whatsappicon,
  nextjs,
  nodejs,
  go,
  php,
  mysql,
  mongodb,
  wordpress,
  kotlin,
  java,
  flutter,
  netmaui,
  firebase,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  // { name: "Testimonial" },
  { name: "Contact" },
];

export const services = [
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    description: `Building end-to-end web solutions from concept to deployment. Using Node.js, MongoDB, 
    Laravel, MySQL for robust backends paired with React/NextJS frontends, I deliver scalable applications that grow with your business.`,
  },
  // {
  //   title: "Web Development",
  //   icon: <FaCodeCompare />,
  //   color: "blueviolet",
  //   colorRGB: "138, 43, 226",
  //   description: `Building responsive, dynamic, and high-performance websites tailored to your needs. 
  //   Using modern technologies like React, Node.js, and more, I ensure your site is optimized 
  //   for speed, scalability, and accessibility, delivering a robust online presence.`,
  // },
  {
    title: "Mobile Development",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Building lightning-fast native mobile apps using Kotlin and Java for Android. 
    Prioritizing clean code, modular architecture, and seamless API integrations for apps that stand out 
    in the market. Ready to build an app that users can’t put down?`,
  },
];

export const projects = [
  // {
  //   title: "Menu Online",
  //   image: project1,
  //   category: "UI/UX",
  //   description: `Transforming education with AI, our School UI Design project revolutionizes the 
  //                    learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
  //                    and intuitive navigation, our design empowers educators and students alike. Experience 
  //                    innovation at its finest as we pave the way for a smarter, more efficient educational 
  //                    journey.`,
  //   demoLink: "https://google.com/",
  //   stacks: [
  //     {
  //       name: "Laravel",
  //       logo: laravel,
  //     },
  //     {
  //       name: "PHP",
  //       logo: php,
  //     },
  //     {
  //       name: "MySQL",
  //       logo: mysql,
  //     },
  //     {
  //       name: "Tailwind",
  //       logo: tailwind,
  //     },
  //   ],
  // },
  {
    title: "Diabet.Check",
    image: project1,
    category: "Apps",
    description: `An application for checking blood sugar levels 
    (Diabetes, Pre-Diabetes, Normal), consulting with experts, and 
    providing education about diabetes.`,
    demoLink: "https://drive.google.com/file/d/1-W_akNGxGKlc-AZxa4fGb7hw8tNt0pE3/view",
    stacks: [
      {
        name: "Kotlin",
        logo: kotlin,
      },
      {
        name: "Firebase",
        logo: firebase,
      },
    ],
  },
  {
    title: "Sistem Tempat Tidur",
    image: project3,
    category: "Web",
    description: `A system that provides real-time information on patient bed 
    availability in hospitals. This system is equipped with audio alerts and 
    efficient bed management features.`,
    demoLink: "https://bed.rssansani.co.id/",
    stacks: [
      {
        name: "NextJS",
        logo: nextjs,
      },
      {
        name: "Javascript",
        logo: javascript,
      },
      {
        name: "Firebase",
        logo: firebase,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Web Rumah Sakit Sansani",
    image: project4,
    category: "Web",
    description: `A profile website providing the latest information about Sansani Hospital, 
    complete with doctor booking features and other healthcare services.`,
    demoLink: "https://rssansani.co.id/",
    stacks: [
      {
        name: "Laravel",
        logo: laravel,
      },
      {
        name: "PHP",
        logo: php,
      },
      {
        name: "MySQL",
        logo: mysql,
      },
      {
        name: "Bootstrap",
        logo: bootstrap,
      },
    ],
  },
];

export const skills = [
  {
    title: "Web Development",
    data: [
      {
        skill: "Laravel",
        level: "Experienced",
        logo: laravel,
      },
      {
        skill: "CodeIgniter",
        level: "Experienced",
        logo: codeigniter,
      },
      {
        skill: "ReactJs",
        level: "Intermediate",
        logo: react,
      },
      {
        skill: "NextJS",
        level: "Intermediate",
        logo: nextjs,
      },
      {
        skill: "NodeJS",
        level: "Intermediate",
        logo: nodejs,
      },
      {
        skill: "Go",
        level: "Beginner",
        logo: go,
      },
      {
        skill: "Tailwind",
        level: "Experienced",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
        logo: bootstrap,
      },
      {
        skill: "PHP",
        level: "Experienced",
        logo: php,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "MySQL",
        level: "Experienced",
        logo: mysql,
      },
      {
        skill: "MongoDB",
        level: "Experienced",
        logo: mongodb,
      },
      {
        skill: "WordPress",
        level: "Experienced",
        logo: wordpress,
      },
      {
        skill: "Figma",
        level: "Intermediate",
        logo: figma,
      },
    ],
  },
  {
    title: "Mobile Development",
    data: [
      {
        skill: "Kotlin",
        level: "Experienced",
        logo: kotlin,
      },
      {
        skill: "Java",
        level: "Experienced",
        logo: java,
      },
      {
        skill: "Flutter",
        level: "Beginner",
        logo: flutter,
      },
      {
        skill: ".Net MAUI",
        level: "Beginner",
        logo: netmaui,
      },
      {
        skill: "Firebase",
        level: "Experienced",
        logo: firebase,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "ilhamarifinwork24@gmail.com",
    link: "mailto:ilhamarifinwork24@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "Telegram",
    value: "iamfinnz",
    link: "https://t.me/iamfinnz",
    icon: telegramicon,
    btnIcon: <RiTelegram2Fill />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "085158465119",
    link: "https://api.whatsapp.com/send/?phone=6285158465119&text=hai%20ilham,%20saya%20ingin%20membuat%20projek/sistem%20dengan%20anda.%20bisakah%20anda%20membantu%20saya?&type=phone_number&app_absent=0",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  // {
  //   name: "Fiverr",
  //   icon: <SiFiverr />,
  //   link: "",
  // },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/iamfinnz",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/ilhamarifin/",
  },
  {
    name: "Instagram",
    icon: <AiFillInstagram />,
    link: "https://www.instagram.com/ilhamarifinz/",
  },
];

// export const testimonials = [
//   {
//     avatar: profile3,
//     name: "Samuel Eze",
//     review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
//   },
//   {
//     avatar: profile4,
//     name: "Emmanuel Joseph",
//     review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
//   },
//   {
//     avatar: profile5,
//     name: "Gloria Chiwendu",
//     review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
//   },
//   {
//     avatar: profile6,
//     name: "Precious Stone",
//     review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
//   },
// ];
