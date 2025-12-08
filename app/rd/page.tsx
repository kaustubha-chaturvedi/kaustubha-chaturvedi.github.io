"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function RedirectPage() {
  const searchParams = useSearchParams();
  const raw = searchParams.get("url");

  useEffect(() => {
    if (!raw) return;

    let target = raw;

    try {
      target = decodeURIComponent(raw);
    } catch {
    }

    window.location.replace(target);
  }, [raw]);
  return null;
}
