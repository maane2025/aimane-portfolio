
import Image from 'next/image';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: ["JavaScript", "Java (JEE, Spring)", "Python", "Dart", "SQL"],
    imageUrl: "https://placehold.co/64x64.png",
    imageHint: "abstract code"
  },
  {
    id: "technologies",
    title: "Technologies & Tools",
    skills: ["ReactJS", "Angular", "Flutter", "Firebase", "Docker", "Git/GitHub"],
    imageUrl: "https://placehold.co/64x64.png",
    imageHint: "gears tools"
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
    imageUrl: "https://placehold.co/64x64.png",
    imageHint: "database server"
  }
];

const spokenLanguagesData = {
  title: "Spoken Languages",
  languages: [
    { lang: "Arabic", level: "Native" },
    { lang: "French", level: "Professional" },
    { lang: "English", level: "Fluent" },
  ],
  imageUrl: "https://placehold.co/64x64.png",
  imageHint: "dialogue speech"
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
  imageUrl: string;
  imageHint: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, imageUrl, imageHint }) => (
  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]">
    <CardHeader className="flex flex-row items-start space-x-4 p-4 md:p-6">
      <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0">
        <Image
          src={imageUrl}
          alt={`${title} icon`}
          width={64}
          height={64}
          className="rounded-md object-cover"
          data-ai-hint={imageHint}
        />
      </div>
      <div className="flex-grow mt-1 md:mt-0">
        <CardTitle className="font-headline text-lg md:text-xl text-primary">
          {title}
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent className="pt-0 p-4 md:p-6">
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.id}
            title={category.title}
            skills={category.skills}
            imageUrl={category.imageUrl}
            imageHint={category.imageHint}
          />
        ))}
      </div>
      
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]">
        <CardHeader className="flex flex-row items-start space-x-4 p-4 md:p-6">
          <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0">
            <Image
              src={spokenLanguagesData.imageUrl}
              alt={`${spokenLanguagesData.title} icon`}
              width={64}
              height={64}
              className="rounded-md object-cover"
              data-ai-hint={spokenLanguagesData.imageHint}
            />
          </div>
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
