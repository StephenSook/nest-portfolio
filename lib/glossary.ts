export type GlossaryEntry = {
  short: string;
  full: string;
  definition: string;
};

export const glossary = {
  dfcs: {
    short: "DFCS",
    full: "Division of Family and Children Services",
    definition:
      "Georgia's state agency administering foster care, child welfare, and transition services for youth aging out of state custody.",
  },
  chafeeETV: {
    short: "Chafee ETV",
    full: "Education and Training Voucher",
    definition:
      "Federal program under the John H. Chafee Foster Care Act providing up to $5,000 per academic year for post-secondary tuition, books, and living costs — available to youth with foster care experience through age 26.",
  },
  medicaidExtension: {
    short: "Medicaid-to-26",
    full: "Former Foster Care Medicaid",
    definition:
      "ACA provision extending Medicaid coverage through age 26 for youth who were in state custody on their 18th birthday. No reapplication required — enrollment is automatic.",
  },
  eyss: {
    short: "EYSS",
    full: "Extended Youth Support Services",
    definition:
      "Georgia program providing case management, housing support, and life-skills services to foster youth ages 18–21 after exit from state custody.",
  },
  rag: {
    short: "RAG",
    full: "Retrieval-Augmented Generation",
    definition:
      "LLM pattern that retrieves relevant passages from a source corpus before generating a response — so output is grounded in real documents rather than model memory.",
  },
  embark: {
    short: "Embark Georgia",
    full: "Embark Georgia",
    definition:
      "Georgia nonprofit helping foster and homeless youth access and complete post-secondary education. Administers Chafee ETV in-state.",
  },
  ascend: {
    short: "KSU ASCEND",
    full: "Kennesaw State ASCEND",
    definition:
      "Kennesaw State University program supporting students with experience in foster care, homelessness, or as wards of the state.",
  },
  wellroot: {
    short: "Wellroot",
    full: "Wellroot Family Services",
    definition:
      "Georgia nonprofit providing foster care, independent living, and transition services for youth aging out of state custody.",
  },
} as const satisfies Record<string, GlossaryEntry>;

export type GlossaryKey = keyof typeof glossary;
