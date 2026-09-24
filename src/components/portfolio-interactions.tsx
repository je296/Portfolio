"use client";

import { useState } from "react";
import { GitBranch, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-normal lg:flex">
        {links.map((link) => (
          <a className="inline-flex min-h-11 items-center text-muted-foreground transition-colors hover:text-foreground" key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <Button asChild variant="outline" className="ml-2 min-h-11 gap-2 rounded-md px-5 font-normal text-highlight">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GitBranch size={17} aria-hidden="true" /> GitHub
          </a>
        </Button>
      </nav>
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="size-11" aria-label="Open navigation">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Nuttanon U.</SheetTitle>
              <SheetDescription>Portfolio.</SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2 p-6">
              {links.map((link) => (
                <a
                  className="flex min-h-11 items-center rounded-lg p-3 text-xl hover:bg-secondary"
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="flex min-h-11 items-center gap-3 rounded-lg border border-border p-3 text-xl text-highlight hover:bg-secondary"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                <GitBranch size={20} aria-hidden="true" /> GitHub
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
