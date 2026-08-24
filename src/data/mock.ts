export const BRAND_BLUE = "#4169e1";

export type HeroStory = {
  kicker: string;
  title: string;
  desc: string;
  tab: string;
  img: string;
};

export const heroStories: HeroStory[] = [
  {
    kicker: "Vithsutra Stories",
    title: "AIOTA 360",
    desc: "Turning big ideas into IoT and Robotics products that power Industry 4.0.",
    tab: "Idea to Product",
    img: "VITHSUTRA COMPANY.png",
  },
  {
    kicker: "Vithsutra Stories",
    title: "Smart Farming, Smarter Yields",
    desc: "Hydroponics automation and precision sensing that empowers farmers to grow more with less.",
    tab: "Smart Farming, Smarter",
    img: "Vithnet.png",
  },
 {
  kicker: "vlight",
  title: "Lighting for Modern Living.",
  desc: "Reliable, energy-efficient lighting solutions crafted for homes, businesses, and modern infrastructure.",
  tab: "Lighting Designed for Modern Living.",
  img: "v_light_main_hero.png",
},
 {
  kicker: "V-Telos",
  title: "Connecting Home and Hostel",
  desc: "RFID based smart card telephone sytems for Residential Institutions",
  tab: "Home far away",
  img: "Vtleos_hero.png",
},
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "2000+", label: "Students Educated" },
  { value: "10+", label: "Institutaions Served" },
  { value: "5+", label: "Domains Served" },
  { value: "4+", label: "Years of Experience" },
];

export type Job = { title: string; loc: string };

export const jobs: Job[] = [
  { title: "Embedded Firmware Engineer", loc: "Vithsutra R&D, Bengaluru" },
  { title: "IoT Solutions Architect", loc: "Vithsutra Cloud, Pune" },
  { title: "Robotics Trainer", loc: "Vithsutra Academy, Mumbai" },
  { title: "Full-Stack Developer", loc: "Vithsutra Platform, Hyderabad" },
  { title: "PCB Design Engineer", loc: "Vithsutra Hardware, Chennai" },
  { title: "Mechanical Design Engineer", loc: "Vithsutra Robotics, Bengaluru" },
];

export type Product = { title: string; desc: string; img: string };

export const products: Product[] = [
  {
    title: "AIOTA360",
    desc: "All-in-one AI + IoT edge platform",
    img: "VITHSUTRA COMPANY.png",
  },
 {
  title: "Argo Tech",
  desc: "Smart agriculture powered by AI, IoT, and precision technology to monitor crops, optimize resources, and drive more efficient, sustainable farming.",
  img: "",
},
  {
    title: "Robotics Kit",
    desc: "Modular robotics kits designed for education and research.",
    img: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
  {
    title: "Industrial IoT",
    desc: "PLC-based automation and SCADA integration for factories.",
    img: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
  {
    title: "Robotic Arms",
    desc: "Six-axis robotic arms built for precision manufacturing.",
    img: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Circuit Systems",
    desc: "Custom PCB design and assembly for embedded systems.",
    img: "https://images.unsplash.com/photo-1651340527836-263c5072968e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Healthcare Tech",
    desc: "Secure patient access and hospital automation solutions.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
  {
    title: "Smart Grid IoT",
    desc: "Automating energy management and renewable systems.",
    img: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
];

export type Industry = { title: string; desc: string; img: string };

export const industries: Industry[] = [
  {
    title: "Food Processing",
    desc: "Automating packaging, sorting and quality control with robotics and smart sensors to boost hygiene and efficiency.",
    img: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  {
    title: "Healthcare & Medical",
    desc: "Secure patient access, sample inspection and hospital automation powered by biometrics, robotics and IIoT.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  {
    title: "Education & Research",
    desc: "Equipping institutions with IIoT labs and robotics training kits for real-world learning and innovation.",
    img: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  {
    title: "Farming & Agriculture",
    desc: "Empowering modern farmers with hydroponics automation, sensor-based monitoring and precision farming.",
    img: "https://images.unsplash.com/photo-1569660424259-87e64a80f6fc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Manufacturing",
    desc: "Streamlining industrial operations through PLC-based automation, SCADA systems and robotic integration.",
    img: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  {
    title: "Power & Energy",
    desc: "Automating energy management, smart grid solutions and renewable systems with advanced IIoT and controls.",
    img: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
];

export type Unique = { title: string; desc: string };

export const uniques: Unique[] = [
  {
    title: "24/7 Support",
    desc: "Round-the-clock assistance ensuring your business never stops. Our dedicated team is always ready to help you succeed.",
  },
  {
    title: "Latest Technology",
    desc: "Stay ahead with cutting-edge solutions and innovative approaches to modern business challenges.",
  },
  {
    title: "Cloud-Based Service",
    desc: "Access your data and services from anywhere, anytime. Secure, scalable and reliable cloud infrastructure.",
  },
  {
    title: "Customizable Software",
    desc: "Tailored solutions that adapt to your specific needs. We build software that grows with your business.",
  },
];

export const trainings = [
  {
    title: "Industrial IOT",
    type: "Programming and Sensor handling",
  },
  {
    title: "Firmware Development",
    type: "Embedded Training",
  },
  {
    title: "Robotics ",
    type: "Technical Training",
  },
  {
    title: "Automation and Programming",
    type: "Education and Research Training",
  },
  {
    title: "Surface Mount Technology",
    type: "Machine Training",
  },
  {
    title: "Emerging Technologies",
    type: "Advanced Training",
  },
]