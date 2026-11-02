"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden px-6 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-black">
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-y-0 left-[450px] h-full w-[calc(100%+50px)] object-cover motion-reduce:hidden"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/100 to-transparent" />
      </div>
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-medium text-white/80"
        >
          {profile.role} · {profile.location}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Hi, I'm {profile.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl text-lg text-white/80"
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
      </div>
    </section>
  );
}
