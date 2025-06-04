
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award } from 'lucide-react';

const educationHistory = [
  {
    degree: "Cycle d’ingénieur en Génie Logiciel et Systèmes Informatiques Distribués",
    institution: "ENSET Mohammedia",
    date: "Depuis Septembre 2023",
  },
  {
    degree: "Classes préparatoires aux grandes écoles, Option TSI",
    institution: "Préparation aux concours des écoles d’ingénieurs",
    date: "Septembre 2021 – Juillet 2023",
  },
  {
    degree: "Baccalauréat Sciences et Technologies Electriques – Mention Très Bien",
    institution: "Lycée Ibn Mandour, Casablanca",
    date: "Juillet 2021",
  },
];

const certifications = [
  {
    title: "Introduction to MongoDB",
    issuer: "MongoDB University",
    date: "Janvier 2025",
  },
  {
    title: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    date: "Janvier 2024",
  },
  {
    title: "English for IT 1",
    issuer: "Cisco Networking Academy",
    date: "Décembre 2023",
  },
];

export function EducationSection() {
  return (
    <Section id="education">
      <SectionHeader title="Formation & Certifications" subtitle="Mon parcours académique et mes qualifications." />
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
        <div>
          <h3 className="font-headline text-2xl font-semibold text-primary mb-6 flex items-center">
            <GraduationCap className="mr-3 h-7 w-7 text-accent" />
            Parcours Académique
          </h3>
          <div className="space-y-6">
            {educationHistory.map((edu, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary">{edu.degree}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {edu.institution} | {edu.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-headline text-2xl font-semibold text-primary mt-12 mb-6 flex items-center">
            <Award className="mr-3 h-7 w-7 text-accent" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-headline text-lg text-primary">{cert.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {cert.issuer} | {cert.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
