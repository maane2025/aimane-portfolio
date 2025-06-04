
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Hospital Management System",
    institution: "ENSET Mohammedia",
    date: "March – May 2025 (Academic project)",
    description: "Creation of a microservices-based web application for managing patients, doctors, and appointments. Secure API with role management.",
    technologies: ["React.js", "Spring Boot", "Microservices", "REST API"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "web application dashboard",
    githubLinks: [
      { url: "https://github.com/maane2025/gestiondeslivres", name: "gestiondeslivres" },
      { url: "https://github.com/maane2025/ebaking-backend", name: "ebaking-backend" },
      { url: "https://github.com/maane2025/authentificationSmartcare", name: "authentificationSmartcare" },
      { url: "https://github.com/maane2025/hopitalauthentification-backend", name: "hopitalauthentification-backend" }
    ]
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-muted/30">
      <SectionHeader title="Recent Projects" subtitle="Some examples of my academic and personal achievements." />
      <div className="grid md:grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]">
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
              <div className="md:w-1/2">
                <CardHeader>
                  <CardTitle className="font-headline text-xl md:text-2xl text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {project.institution} | {project.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-accent/20 text-accent-foreground hover:bg-accent/30">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  {project.githubLinks && project.githubLinks.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Project Repositories:</h4>
                      <div className="space-y-2">
                        {project.githubLinks.map((link, i) => (
                          <Link
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-foreground hover:text-accent transition-colors group"
                          >
                            <Github className="h-4 w-4 text-muted-foreground group-hover:text-accent" />
                            <span>{link.name}</span>
                          </Link>
                        ))}
                      </div>
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
