
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download } from 'lucide-react';
import { Section } from '@/components/section';

export function HeroSection() {
  return (
    <Section id="home" className="bg-muted/30">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight">
            Maane Aimane
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-medium">
            Software Engineering Student
          </p>
          <p className="text-md md:text-lg text-muted-foreground">
            Passionate about developing innovative applications and solving complex problems. Currently seeking an end-of-studies internship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 active:scale-95 transform" asChild>
              <a href="https://drive.google.com/drive/folders/174cAOQyjysyRJt1s_8-7dxLberU31NZ-?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" size="lg" className="hover:scale-105 active:scale-95 transform" asChild>
              <Link href="#contact">
                Contact Me
              </Link>
            </Button>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <Link href="https://github.com/maane2025" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Github className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="https://ma.linkedin.com/in/aimane-maane-92263b294" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/cv.png"
            alt="Maane Aimane"
            width={400}
            height={400}
            className="shadow-xl object-contain"
            data-ai-hint="profile portrait"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
