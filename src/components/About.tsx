import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Code, Palette, Server } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const skills = [
    { category: "Frontend", icon: Code, items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", icon: Server, items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Design", icon: Palette, items: ["Figma", "Adobe XD", "UI/UX", "Prototyping"] },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-80 h-80 object-cover rounded-2xl shadow-card hover-scale"
              />
              <div className="absolute inset-0 rounded-2xl bg-accent-gradient opacity-20" />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Full-Stack Developer & Designer</h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over 5 years of experience in web development, I specialize in building 
                scalable applications and beautiful user interfaces. My journey started with 
                a passion for problem-solving and has evolved into expertise across the full stack.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating user experiences 
                that are both functional and delightful. When I'm not coding, you'll find me 
                exploring new technologies or contributing to open-source projects.
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-accent-gradient hover:glow-accent transition-smooth"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-smooth shadow-card hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <skill.icon className="h-8 w-8 text-primary mr-3" />
                  <h4 className="text-xl font-semibold">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <Badge 
                      key={itemIndex} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;