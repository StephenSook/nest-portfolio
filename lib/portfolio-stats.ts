import { execFileSync } from "node:child_process";

export type PortfolioStats = {
  commits: number;
  firstCommitDate: string;
  lastCommitDate: string;
  topDirs: Array<{ dir: string; changes: number }>;
};

let cached: PortfolioStats | null = null;

function gitOutput(args: string[]): string {
  return execFileSync("git", args, {
    cwd: process.cwd(),
    encoding: "utf8",
  }).trim();
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function getPortfolioStats(): PortfolioStats {
  if (cached) return cached;

  const fallback: PortfolioStats = {
    commits: 0,
    firstCommitDate: "",
    lastCommitDate: "",
    topDirs: [],
  };

  try {
    const commits = Number.parseInt(
      gitOutput(["rev-list", "--count", "HEAD"]),
      10,
    );

    const firstIso = gitOutput([
      "log",
      "--reverse",
      "--pretty=format:%aI",
      "--max-count=1",
    ]);
    const lastIso = gitOutput(["log", "-1", "--pretty=format:%aI"]);

    const nameOnly = gitOutput(["log", "--name-only", "--pretty=format:"]);
    const dirCounts = new Map<string, number>();
    for (const raw of nameOnly.split("\n")) {
      const line = raw.trim();
      if (!line) continue;
      const top = line.split("/")[0];
      if (!top || top.startsWith(".")) continue;
      dirCounts.set(top, (dirCounts.get(top) ?? 0) + 1);
    }
    const topDirs = [...dirCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([dir, changes]) => ({ dir, changes }));

    cached = {
      commits: Number.isFinite(commits) ? commits : 0,
      firstCommitDate: firstIso ? formatDate(firstIso) : "",
      lastCommitDate: lastIso ? formatDate(lastIso) : "",
      topDirs,
    };
    return cached;
  } catch (err) {
    // Build-time only — if this fails silently we ship a Credits section
    // that says "0 commits" and looks like an empty repo. Warn loudly.
    console.warn("[portfolio-stats] git lookup failed, using fallback:", err);
    return fallback;
  }
}
