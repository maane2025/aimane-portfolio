
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Stagiaire Développeur",
    company: "Startup Casa Contrôle Technique",
    location: "Casablanca",
    date: "Juillet – Août 2024 (Stage d’initiation - 2 mois)",
    description: [
      "1er mois : Développement d’un site vitrine HTML/CSS/JavaScript pour présenter les services de l’entreprise.",
      "2e mois : Création d’une application desktop pour la génération des factures.",
    ],
    type: "Professionnelle",
  },
  {
    title: "Formation Python – Encadrant",
    company: "Lycée Technique Mohammedia",
    location: "Mohammedia",
    date: "Mai 2024 (Projet de fin de 1ère année)",
    description: [
      "Organisation d’une formation en Python pour les élèves du tronc commun.",
      "Projet collaboratif avec mon groupe.",
    ],
    type: "Volontaire",
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader title="Expérience" subtitle="Mon parcours professionnel et mes engagements bénévoles." />
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="font-headline text-xl md:text-2xl text-primary">{exp.title}</CardTitle>
                <Badge variant={exp.type === "Professionnelle" ? "default" : "secondary"} className="bg-accent text-accent-foreground whitespace-nowrap">{exp.type}</Badge>
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
