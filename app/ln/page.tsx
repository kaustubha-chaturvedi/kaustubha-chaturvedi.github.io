"use client";

export default function LinkedInRedirect() {
  if (typeof window !== "undefined") {
    window.location.replace("https://www.linkedin.com/in/kaustubha-chaturvedi");
  }
  return null;
}
