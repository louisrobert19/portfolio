export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I’m a self-taught developer driven by curiosity and creativity.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Proactive. Flexible. Resilient. Team-worker. Open-minded.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently studying Next.js and Tailwind CSS",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Interested in working together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "AnimeSearch - Jikan API",
      des: "Web app using the Jikan API to search for anime, manga, and characters effortlessly.",
      img: "/Jikan.png",
      iconLists: ["/HTML5.svg", "/CSS3.svg", "/JavaScript.svg", "/PHP.svg"],
      link: "",
    },
    {
      id: 2,
      title: "My Portfolio - Next.js",
      des: "Minimalist & Modern Portfolio built with Next.js, Tailwind CSS, Typescript, Three.js, and Acertenuity.",
      img: "/Portfolio.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/ThreeJS.svg"],
      link: "https://github.com/louisrobert19/portfolio",
    },
    {
      id: 3,
      title: "Lab Equipment Manager - Flutter",
      des: "Mobile app for managing lab equipment loans via QR code scanning, built with Flutter and deployable on Android through an APK.",
      img: "/Flutter.png",
      iconLists: ["/Flutter.svg", "/Dart.svg", "/PHP.svg", "/XML.svg"],
      link: "",
    },
    {
      id: 4,
      title: "POC API - Symfony",
      des: "Proof of Concept API built with Symfony to handle GET requests and return SQL table data, using WAMP and MySQL.",
      img: "/API.png",
      iconLists: ["/SymfonyW.svg", "/MySQL.svg", "/PHP.svg"],
      link: "",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Louis is a serious and curious student who constantly seeks to improve. His commitment and perseverance, even when faced with challenges, are truly remarkable. He shows great autonomy in his learning and consistently exceeds expectations in his projects.",
      name: "BARBAZA Clément",
      title: "Consultant & Trainer at IPI Toulouse",
      src : "/VoidProfile.jpg",
    },
    {
      quote:
        "Louis possesses strong soft skills, particularly in communication, adaptability, and problem-solving. He approaches challenges with confidence and remains focused on achieving results, showing both autonomy and leadership qualities.",
      name: "ARANDA Francois-Xaxier",
      title: "Professor at IPI Toulouse",
      src: "/ArandaFX.jpg",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "HTML5",
      img: "/HTML5.svg",
      nameImg: "",
    },
    {
      id: 2,
      name: "CSS3",
      img: "/CSS3.svg",
      nameImg: "",
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      img: "/JavaScript.svg",
      nameImg: "",
    },
    {
      id: 4,
      name: "TYPESCRIPT",
      img: "/ts.svg",
      nameImg: "",
    },
    {
      id: 5,
      name: "JAVA",
      img: "/Java.svg",
      nameImg: "",
    },
    {
      id: 6,
      name: "PYTHON",
      img: "/Python.svg",
      nameImg: "",
    },
    {
      id: 7,
      name: "ANGULAR",
      img: "Angular.svg",
      nameImg: "",
    },
    {
      id: 8,
      name: "NEXT.JS",
      img: "/NextJS.svg",
      nameImg: "",
    },
    {
      id: 9,
      name: "REACT.JS",
      img: "/React.svg",
      nameImg: "",
    },
    {
      id: 10,
      name: "TAILWIND.CSS",
      img: "/tail.svg",
      nameImg: "",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/louisrobert19",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://x.com/Loowi_",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/louis-robert-ia-developpement/"
    },
  ];