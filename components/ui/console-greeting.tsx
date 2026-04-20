"use client";

import { useEffect } from "react";

export function ConsoleGreeting() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    console.log(
      "%cNest%c\nAI transition navigator for Georgia foster youth.\nBuilt by Stephen Sookra, Tylin Delaney, Brenden Bryant at Kennesaw State.\nPortfolio source: https://github.com/StephenSook/nest-portfolio\nNest app: https://github.com/tylinndd/nest",
      "font: italic 700 20px serif; color: #d97706; line-height: 1.8;",
      "color: inherit; font: inherit;"
    );
  }, []);

  return null;
}
