import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Palette, 
  Settings, 
  Smartphone,
  GitBranch,
  Monitor
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-primary",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 },
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "text-accent",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-primary",
      skills: [
        { name: "AWS/Vercel", level: 85 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Kubernetes", level: 70 },
      ]
    },
    {
      title: "Design & UX",
      icon: Palette,
      color: "text-accent",
      skills: [
        { name: "Figma", level: 90 },
        { name: "UI/UX Design", level: 85 },
        { name: "Prototyping", level: 88 },
        { name: "Adobe XD", level: 75 },
      ]
    },
  ];

  const tools = [
    { name: "Git/GitHub", icon: GitBranch },
    { name: "VS Code", icon: Monitor },
    { name: "Docker", icon: Settings },
    { name: "Figma", icon: Palette },
    { name: "Postman", icon: Settings },
    { name: "React Native", icon: Smartphone },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-smooth shadow-card hover-scale"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <category.icon className={`h-8 w-8 ${category.color} mr-3`} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-secondary"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-smooth px-4 py-2 text-base hover-scale"
              >
                <tool.icon className="mr-2 h-4 w-4" />
                {tool.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;