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
    summer26: "SWE · XR Dojo / SMASH TA",
    dreamRole: "Founders",
  },
  {
    name: "Tylin Delaney",
    role: "Backend · RAG · FastAPI",
    imageSrc: "/team/tylin.jpg",
    linkedIn: "https://www.linkedin.com/in/tylin-delaney/",
    github: "https://github.com/tylinndd",
    portfolio: "https://tylindelaney.dev/",
    classOf: "2028",
    summer26: "SWE · XR Dojo\nREU · UTD",
    dreamRole: "Founders",
  },
  {
    name: "Brenden Bryant",
    role: "Design · Light coding",
    imageSrc: "/team/brenden.jpg",
    linkedIn: "https://www.linkedin.com/in/brenden-bryant-422464329/",
    classOf: "2028",
    summer26: "IBM",
    dreamRole: "Nasdaq",
  },
];
