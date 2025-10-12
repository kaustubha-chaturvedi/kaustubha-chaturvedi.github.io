"use client";

export default function GitHubRedirect() {
  if (typeof window !== "undefined") {
    window.location.replace("https://github.com/kaustubha-chaturvedi");
  }
  return null;
}
