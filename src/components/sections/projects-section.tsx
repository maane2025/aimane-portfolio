
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';

// Define the single project directly
const project = {
  title: "Hospital Management System",
  institution: "ENSET Mohammedia",
  date: "March – May 2025 (Academic project)",
  description: "Creation of a microservices-based web application for managing patients, doctors, and appointments. Secure API with role management.",
  technologies: ["React.js", "Spring Boot", "Microservices", "REST API"],
  imageUrl: "https://placehold.co/600x400.png",
  imageHint: "web application dashboard",
  // githubLinks removed as per request
};

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-muted/30">
      <SectionHeader title="Recent Projects" subtitle="An example of my academic achievements." />
      <div className="grid md:grid-cols-1 gap-8">
        {/* Display the single project */}
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 md:h-full"
                data-ai-hint={project.imageHint}
              />
            </div>
            <div className="md:w-1/2 flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-xl md:text-2xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {project.institution} | {project.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-foreground mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-accent/20 text-accent-foreground hover:bg-accent/30">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Removed the GitHub links section */}
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
