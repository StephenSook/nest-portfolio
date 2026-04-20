export type Citation = {
  n: number;
  text: string;
  publisher?: string;
  url?: string;
};

export const citations: Citation[] = [
  {
    n: 1,
    text: "Annual count of Georgia foster youth aging out of state care, per Georgia Division of Family and Children Services public reporting.",
    publisher: "Georgia DFCS",
  },
  {
    n: 2,
    text: "Midwest Evaluation of the Adult Functioning of Former Foster Youth — the long-running outcomes study of young adults after exit from foster care.",
    publisher: "Chapin Hall, University of Chicago (Courtney, Dworsky et al.)",
  },
  {
    n: 3,
    text: "Post-secondary attainment data for foster care alumni, synthesized from the Midwest Study and Casey Family Programs reporting.",
    publisher: "Casey Family Programs · Chapin Hall",
  },
  {
    n: 4,
    text: "“Making the Transition” — the Georgia DFCS handbook distributed to foster youth exiting state care. The primary document Nest was built to replace.",
    publisher: "Georgia DFCS",
  },
];
