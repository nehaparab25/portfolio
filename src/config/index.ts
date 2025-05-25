import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Neha Parab",
  author: "Kamlesh Mistry",
  description:
    "Software Engineer based in Virar, Maharashtra. I specialize in UI design, web development and maintenance.",
  lang: "en",
  siteLogo: "/image.PNG",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Neha Parab",
    specialty: " Web Developer and UI designer",
    summary:
      "Developer based in Virar, Maharashtra, India. Fresher and ambitious to learn and grow in the field of software development.",
    email: "nehaparab881@gmail.com",
  },
  experience: [
    {
      company: "Kantascrypt",
      position: "Intern Trainee",
      startDate: "Dec 2024" ,
      endDate: "Jan 2025",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
    {
      company: "MICRO IT",
      position: "Frontend Developer",
      startDate: "May 2025",
      endDate: "June 2025",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    
  ],
  projects: [
    {
      name: "Rock-Paper-Scissor Game",
      summary: "A simple rock-paper-scissor game built with HTML, CSS, and JavaScript",
      linkPreview: "/",
      linkSource: "https://nehaparab25.github.io/Rock-Paper-Scissors-MICRO-IT-/",
      image: "/spotifu.png",
    },
    {
      name: "Random Password Generator Website",
      summary: "An interactive website that generates random passwords",
      linkPreview: "/",
      linkSource: "https://nehaparab25.github.io/Random-pass-generator-MICRO-IT-/",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/neha-big.jpg",
  },
};

// #5755ff


