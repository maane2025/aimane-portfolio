
import type { LucideIcon } from 'lucide-react';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Hospital, BookOpen, Github, Landmark } from 'lucide-react';

interface Project {
  title: string;
  institution?: string;
  date?: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  icon: LucideIcon;
}

const projects: Project[] = [
  {
    title: "Hospital Management System",
    institution: "ENSET Mohammedia",
    date: "March – May 2025 (Academic project)",
    description: "Creation of a microservices-based web application for managing patients, doctors, and appointments. Secure API with role management.",
    technologies: ["React.js", "Spring Boot", "Microservices", "REST API"],
    icon: Hospital,
  },
  {
    title: "Boock App",
    institution: "Personal Project",
    date: "2024",
    description: "Mobile application built with Flutter and Dart for managing a personal book library. Features include adding, tracking, and categorizing books.",
    technologies: ["Flutter", "Dart", "Mobile Development"],
    githubLink: "https://github.com/maane2025/boockapp",
    icon: BookOpen,
  },
  {
    title: "Ebank",
    institution: "Personal Project",
    description: "Application for managing bank accounts, built with Angular and Spring Boot.",
    technologies: ["Angular", "Spring Boot"],
    githubLink: "https://github.com/maane2025/ebaking-backend",
    icon: Landmark,
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-muted/30">
      <SectionHeader title="Recent Projects" subtitle="A showcase of my academic and personal initiatives." />
      <div className="grid md:grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03]">
            <div className="md:flex">
              <div className="md:w-1/3 bg-secondary/30 flex items-center justify-center p-8 h-64 md:h-auto">
                <project.icon className="h-40 w-40 text-primary" aria-label={`${project.title} icon`} />
              </div>
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-xl md:text-2xl text-primary">{project.title}</CardTitle>
                  {(project.institution || project.date) && (
                    <CardDescription className="text-sm text-muted-foreground">
                      {project.institution}{project.institution && project.date ? " | " : ""}{project.date}
                    </CardDescription>
                  )}
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
                  {project.githubLink && (
                    <div className="mt-auto pt-4">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-medium transition-colors duration-200 ease-in-out group">
                        <Github className="h-4 w-4 group-hover:text-accent/80" />
                        View on GitHub
                      </Link>
                    </div>
                  )}
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
