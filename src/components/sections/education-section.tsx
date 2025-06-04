
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award } from 'lucide-react';

const educationHistory = [
  {
    degree: "Engineering Degree in Software Engineering and Distributed Information Systems",
    institution: "ENSET Mohammedia",
    date: "Since September 2023",
  },
  {
    degree: "Preparatory Classes for Engineering Schools, TSI Option",
    institution: "Preparation for engineering school entrance exams",
    date: "September 2021 – July 2023",
  },
  {
    degree: "Baccalaureate in Electrical Sciences and Technologies – With High Honors",
    institution: "Ibn Mandour High School, Casablanca",
    date: "July 2021",
  },
];

const certifications = [
  {
    title: "Introduction to MongoDB",
    issuer: "MongoDB University",
    date: "January 2025",
  },
  {
    title: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    date: "January 2024",
  },
  {
    title: "English for IT 1",
    issuer: "Cisco Networking Academy",
    date: "December 2023",
  },
];

export function EducationSection() {
  return (
    <Section id="education">
      <SectionHeader title="Education & Certifications" subtitle="My academic background and qualifications." />
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
        <div>
          <h3 className="font-headline text-2xl font-semibold text-primary mb-6 flex items-center">
            <GraduationCap className="mr-3 h-7 w-7 text-accent" />
            Academic Background
          </h3>
          <div className="space-y-6">
            {educationHistory.map((edu, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]">
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
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]">
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
