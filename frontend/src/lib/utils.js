import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
