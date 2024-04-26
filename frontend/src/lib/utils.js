import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { RUNTIMES } from "@/constants";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (number) => {
  if (number >= 1000 && number < 1000000) {
    return `${(number / 1000).toFixed(1)}K`;
  }
  // for million and billion too
  if (number >= 1000000 && number < 1000000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  }
  if (number >= 1000000000 && number < 1000000000000) {
    return `${(number / 1000000000).toFixed(1)}B`;
  }
  return number;
};

export const capitalize = (text) => {
  if (typeof text !== "string") {
    return "";
  }
  if (text.length === 0) {
    return text;
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getLangColor = (language) => {
  const langColors = {
    python: "#3572A5",
    javascript: "#F1E05A",
    typescript: "#2B7489",
    swift: "#F05138",
    go: "#00ADD8",
    rust: "#000000",
    ruby: "#701516",
    java: "#B07219",
    csharp: "#178600",
    c: "#555555",
    cpp: "#f34b7d",
  };
  return langColors[language];
};
