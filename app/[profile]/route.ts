import { NextResponse } from "next/server";

const redirects: Record<string, string> = {
  ln: "https://www.linkedin.com/in/kaustubha-chaturvedi",
  gh: "https://github.com/kaustubha-chaturvedi",
  resume: "https://kaustubha.work/resume.pdf",
};

export async function generateStaticParams() {
  return Object.keys(redirects).map((profile) => ({
    profile,
  }));
}

export function GET(
  request: Request,
  { params }: { params: { profile: string } }
) {
  const url = redirects[params.profile];

  if (url) {
    return NextResponse.redirect(url);
  }
  
  return NextResponse.redirect("https://kaustubha.work/lost");
}
