
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Developer Intern",
    company: "Startup Casa Contrôle Technique",
    location: "Casablanca",
    date: "July – August 2024 (Initiation Internship - 2 months)",
    description: [
      "1st month: Development of an HTML/CSS/JavaScript showcase site to present the company's services.",
      "2nd month: Creation of a desktop application for invoice generation.",
    ],
    type: "Professional",
  },
  {
    title: "Python Training – Mentor",
    company: "Lycée Technique Mohammedia",
    location: "Mohammedia",
    date: "May 2024 (1st year-end project)",
    description: [
      "Organized Python training for common core students.",
      "Collaborative project with my group.",
    ],
    type: "Voluntary",
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader title="Experience" subtitle="My professional journey and volunteer commitments." />
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03]">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="font-headline text-xl md:text-2xl text-primary">{exp.title}</CardTitle>
                <Badge variant={exp.type === "Professional" ? "default" : "secondary"} className="bg-accent text-accent-foreground whitespace-nowrap">{exp.type}</Badge>
              </div>
              <CardDescription className="text-sm text-muted-foreground">
                <span className="font-semibold">{exp.company}</span>, {exp.location}
                <br />
                {exp.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
