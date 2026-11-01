"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24 sm:py-32">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-sm font-medium text-muted-foreground"
      >
        {profile.role} · {profile.location}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-bold tracking-tight sm:text-6xl"
      >
        Hi, I'm {profile.name}.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-xl text-lg text-muted-foreground"
      >
        {profile.tagline}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-3 pt-2"
      >
        <Button nativeButton={false} render={<a href="#projects" />}>
          View Projects <ArrowDown className="ml-1 h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          nativeButton={false}
          render={<a href={`mailto:${profile.email}`} />}
        >
          <Mail className="mr-1 h-4 w-4" /> Get in touch
        </Button>
      </motion.div>
    </section>
  );
}
