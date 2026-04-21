import { execFileSync } from "node:child_process";

export type LastUpdated = {
  sha: string;
  shortSha: string;
  date: string;
  url: string;
};

const REPO = "StephenSook/nest-portfolio";

let cached: LastUpdated | null = null;

function runGit(args: string[]): string {
  return execFileSync("git", args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  }).trim();
}

export function getLastUpdated(): LastUpdated {
  if (cached) return cached;

  try {
    const sha = (process.env.VERCEL_GIT_COMMIT_SHA ?? runGit(["rev-parse", "HEAD"])).trim();
    const isoDate = runGit(["log", "-1", "--format=%cI", sha]);
    cached = {
      sha,
      shortSha: sha.slice(0, 7),
      date: new Date(isoDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      url: `https://github.com/${REPO}/commit/${sha}`,
    };
  } catch {
    cached = {
      sha: "",
      shortSha: "unknown",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      url: `https://github.com/${REPO}`,
    };
  }

  return cached;
}
