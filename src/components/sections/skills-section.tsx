
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Wrench, Database, Languages } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SkillCategoryData {
  id: string;
  title: string;
  skills: string[];
  icon: LucideIcon;
}

const skillCategories: SkillCategoryData[] = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: ["JavaScript", "Java (JEE, Spring)", "Python", "Dart", "SQL"],
    icon: Code,
  },
  {
    id: "technologies",
    title: "Technologies & Tools",
    skills: ["ReactJS", "Angular", "Flutter", "Firebase", "Docker", "Git/GitHub"],
    icon: Wrench,
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
    icon: Database,
  }
];

const spokenLanguagesData = {
  title: "Spoken Languages",
  languages: [
    { lang: "Arabic", level: "Native" },
    { lang: "French", level: "Professional" },
    { lang: "English", level: "Fluent" },
  ],
  icon: Languages,
};

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-muted/30">
      <SectionHeader title="Skills" subtitle="My technical and linguistic abilities." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        {skillCategories.map((category) => (
          <Card key={category.id} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03]">
            <CardHeader className="flex flex-row items-start space-x-4 p-4 md:p-6">
              <category.icon className="h-10 w-10 md:h-12 md:w-12 text-accent shrink-0" />
              <div className="flex-grow mt-1 md:mt-0">
                <CardTitle className="font-headline text-lg md:text-xl text-primary">
                  {category.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 p-4 md:p-6">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm px-3 py-1 bg-accent/10 text-accent-foreground hover:bg-accent/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03]">
        <CardHeader className="flex flex-row items-start space-x-4 p-4 md:p-6">
          <spokenLanguagesData.icon className="h-10 w-10 md:h-12 md:w-12 text-accent shrink-0" />
          <div className="flex-grow mt-1 md:mt-0">
            <CardTitle className="font-headline text-lg md:text-xl text-primary">
              {spokenLanguagesData.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0 p-4 md:p-6">
          <ul className="space-y-2">
            {spokenLanguagesData.languages.map((lang, index) => (
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
