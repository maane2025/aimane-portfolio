
"use client";

import Link from 'next/link';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import React from 'react';

export function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, you would handle form submission here (e.g., send data to a server)
    // For this portfolio, we'll just show a success message.
    toast({
      title: "Message sent!",
      description: "Thank you for contacting me. I will get back to you soon.",
      variant: "default", 
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <Section id="contact">
      <SectionHeader title="Contact Me" subtitle="Feel free to reach out for any questions or opportunities." />
      <div className="grid md:grid-cols-2 gap-12">
        <Card className="shadow-lg p-6 md:p-8">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-medium">Full Name</Label>
                <Input type="text" id="name" name="name" required className="mt-2" placeholder="Your Name" />
              </div>
              <div>
                <Label htmlFor="email" className="font-medium">Email Address</Label>
                <Input type="email" id="email" name="email" required className="mt-2" placeholder="your.email@example.com" />
              </div>
              <div>
                <Label htmlFor="message" className="font-medium">Message</Label>
                <Textarea id="message" name="message" rows={5} required className="mt-2" placeholder="Your message here..." />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg p-6">
            <CardContent className="p-0 space-y-4">
              <h3 className="font-headline text-xl font-semibold text-primary mb-4">My Contact Details</h3>
              <Link href="mailto:maaneaimane@gmail.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
                <span>maaneaimane@gmail.com</span>
              </Link>
              <Link href="tel:+212675870733" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <Phone className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
                <span>+212 675-870733</span>
              </Link>
            </CardContent>
          </Card>
           <Card className="shadow-lg p-6">
             <CardContent className="p-0 space-y-4">
              <h3 className="font-headline text-xl font-semibold text-primary mb-4">Social Networks</h3>
              <Link href="https://linkedin.com/in/aimane-maane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
                <span>linkedin.com/in/aimane-maane</span>
              </Link>
              <Link href="https://github.com/maane2025" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
                <span>github.com/maane2025</span>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
