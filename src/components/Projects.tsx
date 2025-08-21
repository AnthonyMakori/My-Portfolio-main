import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.png";

const Projects = () => {
  const projects = [
    {
      title: "E-CycleLink",
      description: "A modern e-waste dispose and collect platform that entirely simplifies the complete process and ensuring salers earn carbon credits from the sales and can later use the credits for purchases. This greatly encourages polution reduction to the environment",
      image: project1,
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team workflows.",
      image: project2,
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Movie Streaming Platform",
      description: "Full-featured movie streaming platform that enables users to purchase and stream their favourite local films",
      image: project3,
      tech: ["React", "Firebase", "Socket.io", "Tailwind"],
      liveUrl: "https://www.falconeyephilmz.com/",
      githubUrl: "#",
    },
    {
      title: "Agri Dom",   
      description: "Agri Dom is a platform that enables Farmers to track all their produce, Input and output of all types of farming that can be done in either small scale or large scale farming.",
      image: project4,
      tech: ["React", "Framer Motion", "Tailwind", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: " Bandwidth Analytics Dashboard",
      description: "Data visualization platform with interactive charts and real-time business metrics to allow network companies efficiently assign and monitoe bandwidth usage of their clients while equally maintaining high credibility, performance and speed of internet access.",
      image: project5,
      tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Hotel management system",
      description: "A smart hotel management system that covers both accomodation and Menu items, Users get to scan table QR codes and make order placements, this way reducing paper work and up and down order taking movements while also properly tracking every activity in the hotel",
      image: project6,
      tech: ["React", "OpenAI", "Node.js", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work, from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-smooth shadow-card hover-scale overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="text-primary border-primary/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-accent-gradient hover:glow-accent transition-smooth">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;