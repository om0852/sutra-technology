export type Project = {
  slug: string
  title: string
  description: string
  category: string
  tech: string[]
  images: string[]
  demoUrl?: string
}

// Using seeded placeholder images so each slide is stable across reloads
import screenshot1 from '../assets/Screenshot 2025-08-20 212656.png';
import screenshot2 from '../assets/Screenshot 2025-08-20 212708.png';

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with React, Node.js, and Stripe integration",
    category: "Web Development",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    images: [
      screenshot1,
      screenshot2,
      "https://picsum.photos/seed/ecommerce-3/1200/720",
    ],
    demoUrl: "#",
  },
  {
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication",
    category: "Mobile App",
    tech: ["React Native", "Firebase", "TypeScript"],
    images: [
      "https://picsum.photos/seed/bank-1/1200/720",
      "https://picsum.photos/seed/bank-2/1200/720",
      "https://picsum.photos/seed/bank-3/1200/720",
    ],
    demoUrl: "#",
  },
  {
    slug: "iot-smart-home",
    title: "IoT Smart Home System",
    description:
      "Complete smart home automation system with real-time monitoring",
    category: "IoT Solution",
    tech: ["Arduino", "React", "WebSocket", "AWS IoT"],
    images: [
      "https://picsum.photos/seed/iot-1/1200/720",
      "https://picsum.photos/seed/iot-2/1200/720",
      "https://picsum.photos/seed/iot-3/1200/720",
    ],
    demoUrl: "#",
  },
  {
    slug: "cms-dashboard",
    title: "CMS Dashboard",
    description:
      "Modern content management system with real-time updates",
    category: "Web Application",
    tech: ["React", "Firebase", "MaterialUI", "Redux"],
    images: [
      "https://picsum.photos/seed/cms-1/1200/720",
      "https://picsum.photos/seed/cms-2/1200/720",
      "https://picsum.photos/seed/cms-3/1200/720",
    ],
    demoUrl: "#",
  },
  {
    slug: "ai-chatbot",
    title: "AI Customer Service Bot",
    description:
      "Intelligent chatbot powered by machine learning",
    category: "AI Solution",
    tech: ["Python", "TensorFlow", "FastAPI", "Docker"],
    images: [
      "https://picsum.photos/seed/ai-1/1200/720",
      "https://picsum.photos/seed/ai-2/1200/720",
      "https://picsum.photos/seed/ai-3/1200/720",
    ],
    demoUrl: "#",
  },
  {
    slug: "social-platform",
    title: "Social Media Platform",
    description:
      "Feature-rich social networking platform with real-time messaging",
    category: "Social Network",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    images: [
      "https://picsum.photos/seed/social-1/1200/720",
      "https://picsum.photos/seed/social-2/1200/720",
      "https://picsum.photos/seed/social-3/1200/720",
    ],
    demoUrl: "#",
  },
  {
    slug: "fitness-tracker",
    title: "Fitness Tracking App",
    description:
      "Comprehensive fitness tracking application with workout plans",
    category: "Health & Fitness",
    tech: ["React Native", "GraphQL", "Node.js", "PostgreSQL"],
    images: [
      "https://picsum.photos/seed/fitness-1/1200/720",
      "https://picsum.photos/seed/fitness-2/1200/720",
      "https://picsum.photos/seed/fitness-3/1200/720",
    ],
    demoUrl: "#",
  },
]


