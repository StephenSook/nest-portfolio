## NotebookLM deep-dive handoff

The `/nest` case study has an audio slot wired up that expects **`/public/audio/nest-deep-dive.mp3`**. Until the file exists the player renders but plays nothing.

---

### 1. Create the notebook

1. Go to https://notebooklm.google.com and create a new notebook called **"Nest — Case Study"**.
2. Add these sources (in this order, so the Deep Dive prioritizes them):
   - The rendered `/nest` page — use the **Website** source type and paste `https://<your-vercel-url>/nest`. If not yet deployed, paste the raw text from the case-study components into a text source instead.
   - The Nest repo README from https://github.com/tylinndd/nest — **Website** source.
   - `~/Documents/Obsidian Vault/Projects/Project - Nest.md` if you have extra context notes — paste as a **Text** source.
3. Do **not** add the 250-page DFCS handbook. The deep dive is about our product, not the source corpus.

### 2. Customize the Deep Dive

1. Open the **Studio** panel (right side) and click **Audio Overview → Customize**.
2. Paste the prompt below into the customization box. Keep **Deeper dive** selected and target **10&ndash;12 minutes**.

```
You are two senior product engineers discussing the Nest case study for a
design/engineering audience. Opening context should be 30 seconds max — jump
into the interesting decisions quickly. Cover, in order:

1. Why a 250-page PDF is the wrong shape for a 19-year-old, and what
   "wrong shape" means concretely (time-to-first-useful-answer, cognitive load).
2. The retrieval-first architecture: why we chose ChromaDB + Llama 3.3 on Groq
   over a hosted RAG service or pure prompt engineering.
3. The crisis-routing carve-out — why 988/211 traffic must never touch the
   LLM, and how we implemented the deterministic keyword classifier.
4. What we'd rebuild first in v2 (honest, not promotional).
5. How the Georgia-specific corpus generalizes to other state handbooks.

Tone: thoughtful, slightly skeptical, no marketing speak, no superlatives.
Avoid saying "amazing," "incredible," "game-changing." Treat the listener as
technical. Credit the three engineers — Stephen Sookra, Tylin Delaney,
Brenden Bryant — naturally, not in a bio dump.
```

3. Click **Generate**. It takes 3&ndash;5 minutes.

### 3. Download and ship

1. Click the three-dot menu on the generated audio &rarr; **Download**.
2. Rename to `nest-deep-dive.mp3` and drop it at `public/audio/nest-deep-dive.mp3`.
3. `git add public/audio/nest-deep-dive.mp3 && git commit -m "feat(nest): notebook-lm deep-dive audio" && git push`
4. Vercel auto-deploys. The `<audio>` element on `/nest` will pick it up on reload.

### 4. Optional polish

- If NotebookLM gives you anything over 12 minutes, trim the tail in QuickTime &rarr; **Edit &rarr; Trim**. The intro is usually good; the tail rambles.
- Keep the file under 15 MB if possible. If it's bigger, re-encode at 96 kbps mono:
  ```bash
  ffmpeg -i original.mp3 -b:a 96k -ac 1 nest-deep-dive.mp3
  ```
