
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Hospital } from 'lucide-react'; // Import Hospital icon

// Define the single project directly
const project = {
  title: "Hospital Management System",
  institution: "ENSET Mohammedia",
  date: "March – May 2025 (Academic project)",
  description: "Creation of a microservices-based web application for managing patients, doctors, and appointments. Secure API with role management.",
  technologies: ["React.js", "Spring Boot", "Microservices", "REST API"],
  // imageUrl and imageHint are no longer used for this specific project as we are using an icon
};

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-muted/30">
      <SectionHeader title="Recent Project Example" subtitle="An example of my academic achievements." />
      <div className="grid md:grid-cols-1 gap-8">
        {/* Display the single project */}
        <Card className="overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2 bg-secondary/30 flex items-center justify-center p-8 h-64 md:h-full">
              <Hospital className="h-32 w-32 text-primary" aria-label="Hospital Icon" />
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
                {/* Removed the GitHub links section as per previous request */}
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
