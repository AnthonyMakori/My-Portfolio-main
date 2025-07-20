import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Kenya Revenue Authority (KRA)",
      department: "Data Science Section",
      location: "Nairobi, Kenya",
      period: "2023 - Present",
      type: "Current Position",
      description: "Leading data science initiatives to optimize tax collection and compliance through advanced analytics and machine learning solutions.",
      achievements: [
        "Developed predictive models for tax compliance scoring",
        "Implemented automated data pipelines for revenue analytics",
        "Created dashboards for executive decision-making",
        "Led cross-functional teams in data-driven projects"
      ],
      technologies: ["Python", "R", "SQL", "Machine Learning", "Power BI", "Azure"]
    },
    {
      title: "Statistical Analyst",
      company: "Kenya Revenue Authority (KRA)",
      department: "Statistics and Reporting Section",
      location: "Nairobi, Kenya",
      period: "2021 - 2023",
      type: "Previous Role",
      description: "Specialized in statistical analysis and reporting to support revenue collection strategies and policy formulation.",
      achievements: [
        "Generated comprehensive statistical reports for management",
        "Analyzed revenue trends and patterns across different sectors",
        "Developed automated reporting systems",
        "Collaborated with various departments for data insights"
      ],
      technologies: ["Excel", "SPSS", "Tableau", "SQL", "Statistical Analysis"]
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance Projects",
      department: "Independent Contractor",
      location: "Remote",
      period: "2020 - Present",
      type: "Freelance",
      description: "Delivering custom web applications and digital solutions for various clients across different industries.",
      achievements: [
        "Built 50+ responsive web applications",
        "Developed e-commerce platforms with payment integration",
        "Created management systems for small businesses",
        "Maintained 98% client satisfaction rate"
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"]
    },
    {
      title: "Junior Developer",
      company: "Tech Solutions Ltd",
      department: "Development Team",
      location: "Nairobi, Kenya",
      period: "2019 - 2021",
      type: "Full-time",
      description: "Started career as a junior developer, gaining hands-on experience in software development and project management.",
      achievements: [
        "Contributed to 20+ successful project deliveries",
        "Mentored new team members",
        "Implemented responsive UI components",
        "Optimized application performance"
      ],
      technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap", "Git"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Current Position":
        return "bg-primary/10 text-primary border-primary/20";
      case "Previous Role":
        return "bg-secondary/10 text-secondary-foreground border-secondary/20";
      case "Freelance":
        return "bg-accent/10 text-accent-foreground border-accent/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through data science, development, and analytics
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary opacity-30 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />
                
                <Card className="md:ml-16 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-smooth shadow-card hover-scale">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center gap-2 text-primary font-semibold">
                            <TrendingUp className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="text-muted-foreground">
                            {exp.department}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge className={`${getTypeColor(exp.type)} ml-0 lg:ml-4 mb-4 lg:mb-0 self-start`}>
                        {exp.type}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary"
                              className="bg-secondary/30 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;