import { NextResponse } from "next/server";

const redirects: Record<string, string> = {
  ln: "https://www.linkedin.com/in/kaustubha-chaturvedi",
  gh: "https://github.com/kaustubhachaturvedi",
  resume: "/resume.pdf",
};

export function GET(
  request: Request,
  { params }: { params: { profile: string } }
) {
  const url = redirects[params.profile];

  if (url) return NextResponse.redirect(url);
  const baseUrl = new URL(request.url).origin;
  return NextResponse.redirect(`${baseUrl}/lost`);
}
