import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          Let&apos;s work together
        </h2>
        <p className="max-w-md text-muted-foreground">
          Open to full stack and iOS opportunities. Reach out and I&apos;ll get
          back to you.
        </p>
        <Button nativeButton={false} render={<a href={`mailto:${profile.email}`} />}>
          <Mail className="mr-1 h-4 w-4" /> {profile.email}
        </Button>
      </div>
    </section>
  );
}
