import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  microsoft_image,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  portfolio,
  portfolio_image,
  freelance,
  trustue,
  netflix,
  microsoft,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React Project",
    company_name: "Freelancing Project",
    icon: freelance,
    iconBg: "#383E56",
    date: "Febuary 2024 - June 2024",
    points: [
      "Developed and maintained web applications using React.js and related technologies, ensuring robust and scalable solutions.",
      "Collaborated with cross-functional teams—designers, product managers, and developers—to create high-quality products, ensuring seamless project execution.",
      "Implemented responsive design techniques, ensuring optimal user experience across all devices and maintaining cross-browser compatibility.",
      "Participated in code reviews, providing constructive feedback to enhance code quality and promote best practices within the development team.",
    ],
  },
  {
    title: "React Project",
    company_name: "Portfolio",
    icon: portfolio,
    iconBg: "#E6DEDD",
    date: "July 2024 - August 2024",
    points: [
      "Designed and developed a personal portfolio website using React, showcasing skills in web development with a focus on responsive design and user experience.",
      "Utilized Three.js and JavaScript to create engaging 3D animations and interactive elements, enhancing the visual appeal and interactivity of the portfolio.",
      "Implemented modern web technologies and best practices, including component-based architecture in React, to ensure scalability and maintainability.",
      "Optimized website performance, ensuring fast load times and a seamless user experience across various devices and browsers.",
    ],
  },
  {
    title: "MERN Project",
    company_name: "Netflix",
    icon: netflix,
    iconBg: "#383E56",
    date: "March 2024 - April 2024",
    points: [
      "Netflix clone application using React and JavaScript, integrating TMDB API for real-time movie data and enhancing content management.",
      "Developed backend services using Express.js and MongoDB, ensuring efficient data storage, retrieval, and seamless API communication.",
      "Implemented user authentication and authorization, providing secure access and personalized experiences for users within the platform.",
      "Optimized application performance, ensuring smooth streaming, fast load times, and a responsive interface across all devices.",
    ],
  },
  {
    title: "React Project",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#E6DEDD",
    date: "August 2024 - September 2024",
    points: [
      "Dynamic web interface using React and JavaScript, delivering a seamless user experience with efficient state management and component-based architecture.",
      "Styled and optimized the user interface with Tailwind CSS, ensuring a visually appealing, responsive design that adapts to various screen sizes.",
      "Collaborated with team members to integrate and deploy key features, ensuring timely delivery and alignment with project goals.",
      "Applied best coding practices and debugging techniques to maintain high-quality code and minimize technical debt.",
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
    name: "Trustue Platform",
    description:
      "Developed the Trustue platform, enabling users to verify product authenticity through QR code identification. The website ensures secure and accurate product validation. Leveraged modern web technologies to deliver a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap 5",
        color: "pink-text-gradient",
      },
    ],
    image: trustue,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio",
    description:
      "Here, you’ll find a comprehensive overview of my development background, including detailed information on my skills and experience. Feel free to explore and contact me for any inquiries or collaborations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio_image,
    source_code_link: "https://github.com/",
  },
  {
    name: "Microsoft",
    description:
      "Developed the Microsoft front page with a modern and responsive design, utilizing React, Tailwind CSS, and JavaScript. Focused on delivering a seamless user experience with optimized performance and accessibility.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: microsoft_image,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
