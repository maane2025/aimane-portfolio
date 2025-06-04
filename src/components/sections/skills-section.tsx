
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Languages, Wrench } from 'lucide-react';

const skillsData = {
  languages: ["JavaScript", "Java (JEE, Spring)", "Python", "Dart", "SQL"],
  technologies: ["ReactJS", "Angular", "Flutter", "Firebase", "Docker", "Git/GitHub"],
  databases: ["MySQL", "MongoDB"],
  spokenLanguages: [
    { lang: "Arabic", level: "Native" },
    { lang: "French", level: "Professional" },
    { lang: "English", level: "Fluent" },
  ],
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ElementType;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon: Icon }) => (
  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]">
    <CardHeader>
      <CardTitle className="font-headline text-xl text-primary flex items-center">
        <Icon className="mr-3 h-6 w-6 text-accent" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-sm px-3 py-1 bg-accent/10 text-accent-foreground hover:bg-accent/20">
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-muted/30">
      <SectionHeader title="Skills" subtitle="My technical and linguistic abilities." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <SkillCategory title="Programming Languages" skills={skillsData.languages} icon={Code} />
        <SkillCategory title="Technologies & Tools" skills={skillsData.technologies} icon={Wrench} />
        <SkillCategory title="Databases" skills={skillsData.databases} icon={Database} />
      </div>
      
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]">
        <CardHeader>
          <CardTitle className="font-headline text-xl text-primary flex items-center">
            <Languages className="mr-3 h-6 w-6 text-accent" />
            Spoken Languages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {skillsData.spokenLanguages.map((lang, index) => (
              <li key={index} className="flex justify-between items-center text-foreground">
                <span>{lang.lang}</span>
                <Badge variant="outline" className="text-sm">{lang.level}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Section>
  );
}
