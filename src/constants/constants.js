import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    nodejs,
    mongodb,
    git,
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
  sleepify,
  python,
  nextjs,
  fastapi,
  aws,
  kafka
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
      title: "AI / ML Engineer",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
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
      name: "Python",
      icon: python,
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
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "FastAPI",
      icon: fastapi,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Kafka",
      icon: kafka,
    },
    {
      name: "Docker",
      icon: docker,
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
      title: "Software Engineer - Full Time",
      company_name: "Natwest Group",
      icon: natwest,
      iconBg: "#383E56",
      date: "July 2025 - Present",
      points: [
        "Built a production RAG engine with hybrid retrieval (vector + lexical + RRF) and multi-LLM routing (GPT-4, Gemini, Claude) over OpenSearch, delivering cited, hallucination-guarded answers from 200+ page financial/legal documents in under 25 seconds.",
        "Built an async event-driven ingestion pipeline (Python/asyncio + Kafka) with bounded work queues, concurrency semaphores, backpressure control, and crash recovery, processing documents at 1M tokens/min embedding throughput with at-least-once delivery.",
        "Built a natural-language-to-SQL engine for spreadsheet Q&A and an LLM-judge evaluation framework, iterating through 14 prompt versions to improve answer accuracy against gold-standard legal claim datasets.",
        "Deployed a 4-service microservice platform on AWS EC2 with S3, OpenSearch, Amazon Bedrock (Claude Opus), and Kafka, automated via GitLab CI/CD pipelines achieving 99% uptime.",
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "Natwest Group",
      icon: natwest,
      iconBg: "#383E56",
      date: "May 2024 - July 2024",
      points: [
        "Built an Exception Dashboard with REST APIs and Angular UI, enabling real-time tracking of 1 million+ exceptions and reducing manual triage effort for a 10-person support team.",
        "Wrote 30+ unit and integration test cases, increasing code coverage from 47% to 89% and improving deployment confidence.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "RubanBridge",
      icon: onebridge,
      iconBg: "#E6DEDD",
      date: "January 2024 - April 2024",
      points: [
        "Built an interactive geospatial dashboard visualising company logistics presence across 200+ districts and 20+ states, used daily by operations and sales teams.",
        "Refactored the Logistics Console UI, improving Google Lighthouse Score from 78 to 92 and reducing page load time - directly improving usability for field agents.",
      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "Coding Ninjas",
      icon: codingninjas,
      iconBg: "#383E56",
      date: "December 2022 - April 2023",
      points: [
      ],
    },
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
