import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "San Francisco, CA",
      period: "2018 - 2022",
      gpa: "3.8/4.0",
      achievements: ["Magna Cum Laude", "Dean's List", "CS Student of the Year"],
      description: "Specialized in Software Engineering and Web Development. Completed capstone project on AI-powered web applications.",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Tech Academy",
      location: "Online",
      period: "2017 - 2018",
      gpa: "4.0/4.0",
      achievements: ["Top Graduate", "Best Final Project"],
      description: "Intensive 12-month program covering modern web technologies including React, Node.js, and cloud deployment.",
    },
    {
      degree: "High School Diploma",
      institution: "Central High School",
      location: "San Francisco, CA",
      period: "2014 - 2018",
      gpa: "3.9/4.0",
      achievements: ["Valedictorian", "National Honor Society"],
      description: "Advanced Placement courses in Computer Science and Mathematics.",
    },
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "React Developer Certification",
    "MongoDB Certified Developer",
    "Certified Kubernetes Administrator",
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional certifications
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-smooth shadow-card hover-scale"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                      <h4 className="text-lg font-medium text-primary">{edu.institution}</h4>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="text-sm">
                        <span className="font-medium">GPA: </span>
                        <span className="text-primary font-semibold">{edu.gpa}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <Badge 
                            key={achIndex}
                            variant="secondary"
                            className="bg-accent/20 text-accent-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Professional Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="bg-primary/10 text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground transition-smooth px-4 py-2 text-base hover-scale"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;