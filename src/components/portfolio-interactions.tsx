"use client";
import { useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav aria-label="Main navigation" className="desktop-nav">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <Button asChild variant="outline">
          <a href="#contact">
            Let’s talk <ArrowUpRight />
          </a>
        </Button>
      </nav>
      <div className="mobile-nav">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Open navigation">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Explore</SheetTitle>
              <SheetDescription>
                Software, systems, and the work behind them.
              </SheetDescription>
            </SheetHeader>
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-2 p-6"
            >
              {links.map((link) => (
                <a
                  className="rounded-lg p-3 text-xl hover:bg-secondary"
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

