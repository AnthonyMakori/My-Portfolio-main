import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Code, Palette, Server, Users, Award, Coffee } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import Display from "./Display";


const About = () => {
  const skills = [
    { category: "Frontend", icon: Code, items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", icon: Server, items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Design", icon: Palette, items: ["Figma", "Adobe XD", "UI/UX", "Prototyping"] },
  ];

  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/20">
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
          {/* Profile Photo Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Main photo container */}
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-smooth">
                <img 
                  <Display />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-accent-gradient opacity-20 group-hover:opacity-10 transition-smooth" />
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
              </div>
              
              {/* Background decorative element */}
              <div className="absolute -inset-4 bg-accent-gradient opacity-10 rounded-2xl -z-10 group-hover:opacity-20 transition-smooth" />
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">Anthony Makori</h3>
              <p className="text-xl text-primary font-semibold mb-4">Full-Stack Developer & Designer</p>
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Anthony, a passionate full-stack developer with over 5 years of experience 
                in crafting digital experiences that matter. My journey began with a curiosity about 
                how things work and has evolved into a deep expertise in modern web technologies.
              </p>
              <p>
                I specialize in building scalable applications using React, Node.js, and cloud technologies. 
                I believe in writing clean, maintainable code and creating user experiences that are both 
                functional and delightful. My approach combines technical excellence with creative problem-solving.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I'm always excited to take on 
                new challenges and turn ideas into reality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent-gradient hover:glow-accent transition-smooth hover-scale"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-smooth shadow-card hover-scale text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Preview */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-smooth shadow-card hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
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
