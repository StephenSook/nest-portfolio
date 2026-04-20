export type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  linkedIn: string;
  github?: string;
  portfolio?: string;
  classOf: string;
  summer26: string;
  dreamRole: string;
};

export const team: TeamMember[] = [
  {
    name: "Stephen Sookra",
    role: "Frontend · Pitch lead",
    imageSrc: "/team/stephen.jpg",
    linkedIn: "https://www.linkedin.com/in/stephen-sookra-633682339/",
    github: "https://github.com/StephenSook",
    portfolio: "https://stephensookra.com",
    classOf: "2028",
    summer26: "Citadel",
    dreamRole: "JPMorgan Chase",
  },
  {
    name: "Tylin Delaney",
    role: "Backend · RAG · FastAPI",
    imageSrc: "/team/tylin.png",
    linkedIn: "https://www.linkedin.com/in/tylin-delaney/",
    github: "https://github.com/tylinndd",
    portfolio: "https://tylindelaney.dev/",
    classOf: "2028",
    summer26: "NVIDIA",
    dreamRole: "Wells Fargo",
  },
  {
    name: "Brenden Bryant",
    role: "Design · Light coding",
    imageSrc: "/team/brenden.png",
    linkedIn: "https://www.linkedin.com/in/brenden-bryant-422464329/",
    classOf: "2028",
    summer26: "IBM",
    dreamRole: "Nasdaq",
  },
];
