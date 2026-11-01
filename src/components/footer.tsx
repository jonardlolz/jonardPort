"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const BUILD_YEAR = 2026;

export function Footer() {
  const [currentYear, setCurrentYear] = useState(BUILD_YEAR);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {currentYear} {profile.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-4">
          <a href={profile.github} className="hover:text-foreground">
            GitHub
          </a>
          <a href={profile.linkedin} className="hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
