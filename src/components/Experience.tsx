import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Kenya Revenue Authority (KRA)",
      department: "iTax Department ",
      period: "2025",
      location: "Nairobi, Kenya",
      description: "Leading data science initiatives to optimize tax collection and compliance through advanced analytics and machine learning solutions.",
      achievements: [
        "Spearheaded the enhancement of iTax decisioning systems, improving accuracy in taxpayer processing and significantly reducing errors in compliance workflows.",
        "Oversaw the rollout of critical digital tax services that broadened accessibility and streamlined tax filing for millions of Kenyan taxpayers, including underserved segments.",
        "Implemented data-driven product development methodologies that accelerated delivery timelines, reducing release cycles from months to weeks and ensuring timely responses to evolving tax policy and user requirements.",
        "Designed and optimized iTax system architecture to efficiently handle millions of daily taxpayer transactions with high reliability and minimal latency.",
        "Implemented event-driven processing and caching mechanisms to enhance real-time tax data validation, reconciliation, and reporting.",
        "Developed automated compliance validation tools and reporting dashboards, significantly reducing manual oversight and ensuring policy enforcement at scale."
      ],
      technologies: ["Python", "R", "SQL", "Machine Learning", "Power BI", "Azure","Laravel", "React", "Node.js", "Docker", "Kubernetes"]
    },
    {
      title: "Full Stack Software Developer",
      company: "Kenya Revenue Authority (KRA)",
      department: "Data Science Department",
      location: "Nairobi, Kenya",
      period: "2024-2025",
      description: "contributed to the design and development of mission-critical platforms supporting tax compliance, revenue collection, and data-driven decision-making.",
      achievements: [
        "Developed a taxpayer-centric system to streamline interactions, case management, and compliance support.",
        "Designed and deployed a system for managing tax compliance cases, audits, and investigations.",
        "Developed a platform to support tax revenue monitoring, reconciliation, and reporting.",
        "Built a platform to support taxpayer outreach campaigns (email, SMS, and digital channels)."
      ],
      technologies: ["Excel", "SPSS", "Tableau", "SQL", "Statistical Analysis","Django", "React","Laravel","Vue.js"]
    },
    {
      title: "Team Lead",
      company: "Cybermonk Software Development ",
      department: "Software Development",
      location: "Mombasa, Kenya",
      period: "2024",
      type: "Full Time",
      description: "delivering enterprise-grade platforms that enhanced operational efficiency for clients in sectors such as logistics, fintech, and hospitality.",
      achievements: [
        "Transformed a low-performing team into a high-output unit, raising sprint completion rates from 40% to 95% within four months through process restructuring, coaching, and agile discipline.",
        "Established mentorship and peer-learning programs that elevated technical expertise and supported the career growth of junior engineers.",
        "Designed and deployed cloud-native platforms tailored for high-volume, real-time operations common in regional e-commerce and financial services.",
        "Delivered live tracking systems using WebSocket technology, enabling real-time visibility for logistics and transport clients with large concurrent user bases",
        "Built and managed automated CI/CD pipelines that reduced release cycles from hours to minutes, significantly accelerating client delivery timelines.",
        "Delivered scalable digital solutions that reduced operational costs and improved ROI for Mombasa-based and regional clients."
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"]
    },
    {
      title: "Senior Software Engineer",
      company: "Seven Seas Technologies (SST Group)",
      department: "Development Team",
      location: "Nairobi, Kenya",
      period: "2024",
      type: "Full-time",
      description: "Engineered large-scale enterprise applications supporting healthcare and financial service operations, with a focus on reliability, security, and compliance",
      achievements: [
        "Engineered large-scale enterprise applications supporting healthcare and financial service operations, with a focus on reliability, security, and compliance.",
        "Modernized legacy platforms by migrating them to cloud-native architectures, improving system resilience and reducing infrastructure costs.",
        "Developed and deployed API-first solutions, enabling seamless connectivity between government, financial, and healthcare platforms.",
        "Integrated biometric and identity-verification systems to strengthen compliance and improve user authentication.",
        "Introduced continuous testing frameworks, significantly improving defect detection during early development stages.",
        "Led technical workshops for cross-functional teams, sharing best practices and reinforcing engineering standards."
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