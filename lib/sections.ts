export type Section = {
  id: string;
  number: string;
  label: string;
};

export const sections: Section[] = [
  { id: "stakes", number: "01", label: "Stakes" },
  { id: "problem", number: "02", label: "Problem" },
  { id: "approach", number: "03", label: "Approach" },
  { id: "gallery", number: "04", label: "Product" },
  { id: "architecture", number: "05", label: "Architecture" },
  { id: "stack", number: "06", label: "Stack" },
  { id: "outcomes", number: "07", label: "Shipped" },
  { id: "credits", number: "08", label: "Credits" },
  { id: "lessons", number: "09", label: "Lessons" },
  { id: "faq", number: "10", label: "FAQ" },
  { id: "listen", number: "11", label: "Deep dive" },
];
