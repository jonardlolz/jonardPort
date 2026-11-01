export const profile = {
  name: "KregJonard",
  role: "Full Stack & iOS Developer",
  tagline:
    "I build web and mobile applications that are fast, responsive, and user-friendly. I have a passion for creating intuitive user interfaces and seamless user experiences.",
  location: "Philippines",
  email: "craigejonardbaring@example.com",
  github: "https://github.com/jonardlolz",
  linkedin: "https://linkedin.com/in/craigejonardbaring",
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  platform: "Web" | "iOS" | "Full Stack";
  link?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "flagship-app",
    title: "Flagship Project (Web + iOS)",
    description:
      "A habit/booking-style app with a shared backend, a Next.js web client, and a native SwiftUI iOS client. Replace this with your real flagship project.",
    tags: ["Next.js", "Laravel", "SwiftUI", "PostgreSQL"],
    platform: "Full Stack",
    featured: true,
  },
];

export const skills = {
  "Full Stack": ["TypeScript", "Next.js", "React", "Node.js", "Laravel", "PHP", "PostgreSQL", "MySQL"],
  iOS: ["Swift", "SwiftUI", "UIKit", "Core Data", "SwiftData"],
  Tools: ["Git", "Docker", "Vercel", "REST APIs", "CI/CD"],
};
