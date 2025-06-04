
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Briefcase, Lightbulb, GraduationCap, Settings2, Mail, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: Lightbulb },
  { href: "#education", label: "Education", icon: GraduationCap },
  { href: "#skills", label: "Skills", icon: Settings2 },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="#home" className="mr-6 flex items-center space-x-2">
          <span className="font-headline text-xl font-bold text-primary">Aimane Maane</span>
        </Link>
        
        <nav className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild>
              <Link href={item.href} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b">
                  <Link href="#home" onClick={closeSheet}>
                    <span className="font-headline text-lg font-bold text-primary">Aimane Maane</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={closeSheet}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-3 p-6">
                  {navItems.map((item) => (
                    <Button key={item.label} variant="ghost" className="justify-start" asChild onClick={closeSheet}>
                      <Link href={item.href} className="flex items-center gap-3 text-md font-medium text-foreground hover:text-accent transition-colors">
                        <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
                        {item.label}
                      </Link>
                    </Button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
