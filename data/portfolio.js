import pawlocPreview from "@/assets/pawloc.jpg";
import todoPreview from "@/assets/awesome-todo-preview.svg";
import portfolioPreview from "@/assets/img1.jpg";

export const profile = {
  firstName: "Dhyll",
  lastName: "Mallorca",
  name: "Dhyll Mallorca",
  role: "Front-End Developer",
  tagline: "Building websites that are clean, responsive, and easy to use.",
  email: "mallorcadhylljustine@gmail.com",
  phone: "+63 954 270 9610",
  phoneHref: "tel:+639542709610",
  location: "Jaro, Iloilo, Philippines",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work", count: "03" },
  { href: "#services", label: "Service", count: "03" },
  { href: "#experience", label: "Experience", count: "1y+" },
];

export const aboutStats = [
  { value: "1+", label: "Years Experience" },
  { value: "03", label: "Projects Completed" },
  { value: "03", label: "Core Skills" },
];

export const projectFilters = ["All", "Real Project", "Exploration"];

export const projects = [
  {
    category: "Real Project",
    title: "PawLoc",
    client: "Web App",
    image: pawlocPreview,
    alt: "PawLoc lost pet finder homepage",
    description:
      "A lost-and-found pet platform where owners and neighbors share sightings, search nearby reports, browse shelters and adoptable pets, and help bring missing pets home.",
    href: "https://pawloc.vercel.app/",
    external: true,
    featured: true,
  },
  {
    category: "Real Project",
    title: "Awesome To do",
    client: "Personal Project",
    image: todoPreview,
    alt: "Awesome To do project preview",
    description:
      "A simple and clean to-do list application built to help users add, manage, and keep track of daily tasks in a clear and easy way.",
    href: "https://awesometodo-pfnu.onrender.com/",
    external: true,
  },
  {
    category: "Exploration",
    title: "Personal Portfolio",
    client: "Concept",
    image: portfolioPreview,
    alt: "Personal portfolio project preview",
    description:
      "A personal portfolio website designed to present my profile, skills, and projects in a way that feels personal, clear, and professional.",
    href: "/personal-portfolio",
    external: false,
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Responsive UI",
  "Modern Layouts",
  "Creative Coding",
];

export const services = [
  {
    title: "Portfolio Websites",
    text: "Personal websites that help developers, creatives, and freelancers stand out.",
    tags: ["Personal Branding", "Responsive", "Animations"],
  },
  {
    title: "Front-End Development",
    text: "Responsive HTML, CSS, and JavaScript for websites that feel modern and easy to use.",
    tags: ["HTML & CSS", "JavaScript", "React"],
  },
  {
    title: "Landing Pages",
    text: "Landing pages designed to present products and services in a clear, strong way.",
    tags: ["Conversion Focused", "Clean Layout", "Fast"],
  },
];

export const education = [
  {
    title: "BS Information Technology - 2nd Year (Current)",
    school: "Western Institute of Technology",
    year: "2026",
  },
  {
    title: "Senior High School Graduate",
    school: "Remedios E. Vilches National High School",
    year: "2024",
  },
  {
    title: "Junior High School Graduate",
    school: "East Valencia National High School",
    year: "2022",
  },
  {
    title: "Elementary Graduate",
    school: "Fiscal Jose M. Zambarano Senior Memorial School",
    year: "2018",
  },
];

export const socials = {
  github: { href: "https://github.com/Dhyll-ux", label: "GitHub" },
  linkedin: {
    href: "https://www.linkedin.com/in/dhyll-justine-mallorca-4411b4374/",
    label: "LinkedIn",
  },
  facebook: { href: "https://www.facebook.com/dhyll20/", label: "Facebook" },
  instagram: { href: "https://www.instagram.com/dhyll_just.in/?hl=en", label: "Instagram" },
  tiktok: { href: "https://www.tiktok.com/@user.712006", label: "TikTok" },
};
