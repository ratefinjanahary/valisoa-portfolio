export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery?: string[];
  tech: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "restau-manager",
    title: "InstaPlate",
    description: "Application de gestion de commandes avec logique de panier complexe.",
    longDescription: "Une solution complète pour restaurants incluant une gestion de panier dynamique, synchronisation en temps réel des commandes et un dashboard administrateur robuste. Développé avec React TS et une architecture Backend scalable.",
    image: "/images/insta-plate-cover.png",
    gallery: [
      "/images/projects/instaplate/login.png",
      "/images/projects/instaplate/turnover.png",
      "/images/projects/instaplate/bestselling.png",
      "/images/projects/instaplate/neworder.png",
      "/images/projects/instaplate/basket.png",
      "/images/projects/instaplate/payment.png"
    ],
    tech: ["React", "TS", "Shadcn", "TailwindCSS", "Zustand", "Node.js", "Express", "SQL", "PostgreSQL"],
    github: "",
  },
  {
    id: "lumina",
    title: "Lumina",
    description: "Outil d'analyse et de statistiques de vente à moyenne performance",
    longDescription: "Plateforme de visualisation de données transformant les chiffres bruts en insights exploitables. Utilise des graphiques interactifs pour suivre les performances commerciales en temps réel.",
    image: "/images/lumina-cover.png",
    gallery: [
      "/images/projects/lumina/login-page.png",
      "/images/projects/lumina/dashboard.png",
      "/images/projects/lumina/sales-list.png",
      "/images/projects/lumina/new-sale.png",
      "/images/projects/lumina/profile-page.png",
    ],
    tech: ["React", "TS", "Shadcn", "TailwindCSS", "Prisma", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/ratefinjanahary/sales-mgm-api.git",
  },
  {
    id: "bibliopocket",
    title: "BiblioPocket",
    description: "Système intelligent de gestion de bibliothèque.",
    longDescription: "Gestion simplifiée des emprunts, retours et inventaire de livres. Inclut un moteur de recherche performant et une gestion fine des utilisateurs et des stocks.",
    image: "",
    gallery: [],
    tech: ["Next.js","React TS", "Shadcn", "TailwindCSS", "Node.js", "NestJS", "Prisma", "PostgreSQL"],
    github: "https://github.com/ratefinjanahary/library-app-api.git"
  },
];
