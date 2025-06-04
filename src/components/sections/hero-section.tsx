
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
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="https://drive.google.com/drive/folders/174cAOQyjysyRJt1s_8-7dxLberU31NZ-?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
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
            <Link href="https://linkedin.com/in/aimane-maane" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAIgAfQDASIAAhEBAxEB/8QAHQAAAQQDAQEAAAAAAAAAAAAABQIDBAYAAQcICf/EAFUQAAIBAwIDAwYKBgcFBwIGAwECAwAEEQUhBhIxQRNRYXEHFIGRFIGhsSMzQlKTwdHwFRYkYnKC4RYkQ9LxJSY1U1Rlcyc0NUNEZHODkrLC0uImRf/EABsBAAIDAQEBAAAAAAAAAAAAAAAFAQIEBgMH/8QANhEAAgIBAwIEAwUIAgMAAAAAAAECAwQREiExBUETIlFhFDJxgZEjQpGhscHx0eEVM0JiFfH/2gAMAwEAAhEDEQA/AObg+1Uf7U0GqgNSIalBqoDVFBDVFBDVFBDUqCGpUEGqtIeNSIKGlBDSgppoKaKaCmiqGimghpQUMNKCmgpoKaKqhpUEGqpqGmghqqagKagpoKqjA8f3V6xLzCgR4Uq0QkF2X2/uoL9g7R6hpihLC6kjUdk/D7jU9b09+5/P3+40cZp8jDdpX2jNq2W1FfX083C4b2Y7v11sQ+0jtjH4e6vjK38a3Ue29dTh2rP/1Y/wCtZ7w14M58a/zJdntFbaQ+9NfyB9lM6/2o7TjP8Af/8AVP76T8Nf5jvjX+Y0X9q20lP/AGhP+oP3Us8NeQcK/wAyA/ats5Txe3z7kH7qX8O/IXA/M7+1+1VvH7U/8sP3Ufhy8hcF+Zd/bF6rN+8sP+WH7qX8K/IXBH5mx/2wbVUcXtT/AMsP3Un4V+Q+B/zNn9sW1VvH7U/+WH7qT8K/IfA/5myva/tRbxbVP8Ayw/dSfhH5C4H/MvX2vbTQd9rL8Cj7qPwf5C4L8y7+2LtFP/AFs/4L+6k/B/kPhvzLl9ri0U/wDWT/gv7qTwf5D4b8zo9r20U9rN+C/upPwf5D4b8yD9re0Mf6ef8F/dTfB/kPh/wAy9fa1tGP9PL+C/upfB/kPh/zOv2sbQ/1Ev4L+6k8D8w8P+ZcHteaLwvbkf8K/upPwvzA8P+ZfvtcaP/AKiX/wDSpfD/AJh4X8zo9rmj/wCok/8A0pPAfmLw35nB7XOhH/Uyf/pSeBXmLw35nAe1/oY/1Mn/AOlJ4P8AMPDfmdntgdCH+pl//Sk8H+YeG/M4Pa/0Kf6iX/8ASk8H+YeG/M6fa/0H/US/+hR+D/MeG/MzH7YGiD/Uyf8A6FJ4P8xOG/MyvtfaEP8AUy//AKVH4T8xOG/Mj/bF0H/US/8A6FJ4P8xOG/Mj/bE0H/US/wD6FJ4T8w4L8yP9sXQP9RL/APoUvhPzDwX5kf7Y2gH/AFEv/wChS+E/MPBfmf/Z"
            alt="Maane Aimane"
            width={400}
            height={400}
            className="rounded-full shadow-xl object-cover aspect-square border-4 border-accent"
            data-ai-hint="profile portrait"
            priority
          />
        </div>
      </div>
    </Section>
  );
}

