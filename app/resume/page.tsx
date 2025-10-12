"use client";

export default function ResumeRedirect() {
  if (typeof window !== "undefined") {
    window.location.replace("/resume.pdf");
  }
  return null;
}
