// Illustrative excerpts of the two most important invariants in Nest's
// backend. Simplified from the live Tylin repo for the case study
// audience — the shape is accurate, the production code is longer and
// has test coverage + logging hooks.

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
    path: "backend/app/classifiers/crisis.py",
    language: "python",
    caption: "Crisis routing never reaches the LLM",
    description:
      "A deterministic regex pass runs before any retrieval. Matching phrases short-circuit to 988 and 211 with a static, human-reviewed response. We never ask a model to triage someone's life.",
    code: `# Runs BEFORE retrieval or any LLM call.
# Patterns were reviewed with a Georgia foster-youth
# advisor for precision — false negatives are worse
# than false positives here.

CRISIS_PATTERNS = [
    r"\\bkill (?:myself|me)\\b",
    r"\\bsuicid(?:e|al)\\b",
    r"\\bdon'?t want to (?:live|be here)\\b",
    r"\\bno(?:where|place) to (?:stay|sleep) tonight\\b",
    r"\\bsomeone (?:hurt|hit|abuse[ds]?) me\\b",
]

_CRISIS_RE = re.compile("|".join(CRISIS_PATTERNS), re.IGNORECASE)


def classify(user_input: str) -> Route:
    if _CRISIS_RE.search(user_input):
        # Static response, curated by humans.
        # 988 = Suicide & Crisis Lifeline
        # 211 = Georgia social services
        return Route.CRISIS
    return Route.RAG
`,
  },
  {
    id: "cite-or-refuse",
    path: "backend/app/llm/prompt.py",
    language: "python",
    caption: "Cite or refuse — the model has no other option",
    description:
      "The LLM receives only retrieved passages, with explicit instructions to either cite one of them or emit the refusal sentinel. An answer without a citation never reaches the user.",
    code: `SYSTEM_PROMPT = """
You answer questions for Georgia foster youth aging out
of care. You use ONLY the passages below — never your
training data, never general knowledge.

For every claim, cite the source inline like [1], [2].
If the answer is not supported by the passages, reply
with exactly: NO_ANSWER.

Never speculate. Never soften "I don't know" into a guess.
""".strip()

REFUSAL_SENTINEL = "NO_ANSWER"


def build_messages(question: str, passages: list[Passage]):
    context = "\\n\\n".join(
        f"[{i + 1}] {p.source}: {p.text}"
        for i, p in enumerate(passages)
    )
    return [
        {"role": "system", "content": SYSTEM_PROMPT},
        {
            "role": "user",
            "content": f"Passages:\\n{context}\\n\\nQuestion: {question}",
        },
    ]
`,
  },
];
