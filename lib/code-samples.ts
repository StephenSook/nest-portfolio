// The two critical invariants in Nest's backend, pulled verbatim
// from Tylin's repo (github.com/tylinndd/nest). Comments and minor
// surrounding boilerplate are trimmed for a case-study reader; the
// keyword list, prompt text, and substring guardrail are byte-exact.

export type CodeSample = {
  id: string;
  path: string;
  language: "python";
  caption: string;
  description: string;
  code: string;
};

export const codeSamples: CodeSample[] = [
  {
    id: "crisis-classifier",
    path: "backend/rag/chain.py",
    language: "python",
    caption: "Crisis routing never reaches the LLM",
    description:
      "A deterministic keyword check runs before any retrieval. Matching phrases short-circuit to 988 and 211 with a static, human-reviewed response. Plain Python `in` substring matching, not regex — kept simple so the surface is auditable. False negatives are worse than false positives, so the keyword list errs toward catching.",
    code: `# Runs BEFORE retrieval or any LLM call.
# Keyword list reviewed with a Georgia foster-youth advisor.

CRISIS_KEYWORDS = [
    "suicide", "kill myself", "hurt myself", "self harm",
    "unsafe", "abuse", "crisis", "emergency",
    "homeless tonight", "need help right now", "i am not safe",
]


def is_crisis(query: str) -> bool:
    q = query.lower()
    return any(keyword in q for keyword in CRISIS_KEYWORDS)


# Inside answer_question() — first thing it does:
if is_crisis(query):
    return {
        "answer": (
            "You deserve immediate human support right now. "
            "Please call 988 for crisis help or 211 Georgia for "
            "urgent housing, food, and support."
        ),
        "sources": ["988", "211 Georgia"],
        "fallback": True,
        "route_to_emergency": True,
        "passages": [],
    }
`,
  },
  {
    id: "cite-or-refuse",
    path: "backend/rag/prompt.py  ·  backend/rag/chain.py",
    language: "python",
    caption: "Cite or refuse — the model has no other option",
    description:
      "The LLM receives only retrieved passages, with explicit instructions to return a fixed refusal phrase if the context can't answer. The phrase is also the detection token — a substring match in the post-LLM step catches paraphrased refusals and replaces them with the canonical fallback. Refusal is prose, not a sentinel symbol — by design.",
    code: `# backend/rag/prompt.py — system message sent to Llama 3.3 on Groq.

SYSTEM_PROMPT = """
You are Nest, a trauma-informed transition support assistant
for Georgia foster youth.

You must follow these rules:
1. Answer only using the provided context.
2. Do not invent benefits, deadlines, addresses, phone
   numbers, rules, or organizations.
3. If the context is not enough, say exactly:
   "I don't have that specific information.
    Please call 211 Georgia: dial 2-1-1."
4. Use warm, plain, supportive language.
5. Keep answers short and practical: 3 to 6 sentences,
   plus next steps.
6. End with a short "Sources:" line using only source
   names found in the provided context.
7. If the user appears to be in crisis or unsafe,
   prioritize immediate human help.

Your tone should feel calm, respectful, and clear —
never robotic and never legalistic.
"""


# backend/rag/chain.py — post-LLM substring guardrail.
# The refusal is a natural-language phrase, NOT a sentinel
# symbol. Detection is a substring match against the canonical
# refusal opening — catches paraphrased refusals too.

if "I don't have that specific information" in answer:
    return {
        "answer": FALLBACK_TEXT,
        "sources": ["211 Georgia"],
        "fallback": True,
        "route_to_emergency": False,
        "passages": [],
    }
`,
  },
];
