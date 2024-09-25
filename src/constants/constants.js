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
    onebridge,//meta
    codingninjas,//shopify
    natwest,//natwest
    ayush,
    travello,
    bhumi,
    threejs,
    leetcode,
  codeforces,
  codechef,
  linkedin,
  github,
  chatapp,
  dsa,
  hauffman,
  sleepify
  } from "../assets";
  
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
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "LeetCode",
      icon: leetcode
    },
    {
      title: "CodeForces",
      icon: codeforces
    },
    {
      title: "CodeChef",
      icon: codechef
    },
    {
      title: "Data Structures and Algorithms",
      icon: dsa
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
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
  ];
  
  const experiences = [
    {
      title: "Teaching Assistant",
      company_name: "Coding Ninjas",
      icon: codingninjas,
      iconBg: "#383E56",
      date: "December 2022 - April 2023",
      points: [
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company_name: "1 Bridge",
      icon: onebridge,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - April 2024",
      points: [
        
      ],
    },
    {
      title: "Software Developement Intern",
      company_name: "Natwest",
      icon: natwest,
      iconBg: "#383E56",
      date: "May 2024 - July 2024",
      points: [
       
      ],
    }
  ];
  
 
  
  const social = [
    {
      name: "LinkedIN",
      profileLink: "https://www.linkedin.com/in/chirag-gupta-528294217",
      image: linkedin
    },
    {
      name:"GitHub",
      profileLink: "https://github.com/CHIR4G7",
      image: github
    }
  ];

  const projects = [
    {
      name: "Travello",
      description:
        "Web-based platform that allows users to review new places you visit and see different reviews of people about a place before visiting.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "ReactMapGL",
          color: "pink-text-gradient",
        },
      ],
      image: travello,
      source_code_link: "https://travello-netlify.netlify.app/",
    },
    {
      name: "Bhumi Ngo",
      description:
        "Web Application for an NGO with optimized UI and Google Analytics to track the User's activity on the webiste and serve them to the client.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Google Analytics",
          color: "blue-text-gradient",
        },
      ],
      image: bhumi,
      source_code_link: "https://youtu.be/AVqVHceHbzM",
    },
    {
      name: "Ayush Portal",
      description:
        "SIH project for the Minsitry of Ayush where we provide a platform for the investors to invest and Startup owners to list their startups.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Data API",
          color: "pink-text-gradient",
        },
      ],
      image: ayush,
      source_code_link: "https://github.com/CHIR4G7/Ayush-Portal",
    },
    {
      name: "Chat App",
      description:
        "A comprehensive chatting Application where you can have one to one and group conversations after creating and registering yourself in the application using web Sockets",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "jwt",
          color: "green-text-gradient",
        },
        {
          name: "Socket.IO",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Text Compressor",
      description:
        "A comprehensive tool based of HauffMan Algorithm a greedy algorihtm which can reduce the size of text files by 40%.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: hauffman,
      source_code_link: "https://github.com/CHIR4G7/HAUFFMAN-ENCODER-DECODER.git",
    },
    {
      name: "Sleepify",
      description:
        "A comprehensive tool highlighting the benefits of tracking sleep cycles and helps maintaing sleep data with tables and data charts",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: sleepify,
      source_code_link: "https://sleepify.vercel.app/",
    }
  ];
  
  export { services, technologies, experiences, social, projects };
