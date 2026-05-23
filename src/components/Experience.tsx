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
      period: "2025",
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
  title: "Freelance Full Stack Software Developer",
  company: "Upwork",
  department: "Software Development",
  location: "Remote",
  period: "2023 - 2024",
  type: "Freelance",
  description:
    "Developed and maintained custom web and mobile applications for international clients across multiple industries including fintech, healthcare, education, ecommerce, hospitality, investment management, and retail systems. Delivered scalable, secure, and user-focused digital solutions while managing the complete software development lifecycle from planning and UI/UX implementation to deployment, optimization, and maintenance.",
  achievements: [
    "Designed and implemented custom web applications tailored to diverse client business requirements and operational workflows.",
    "Managed the complete software development lifecycle including system design, coding, debugging, testing, deployment, and maintenance.",
    "Developed business websites, payment gateway integrations, investment platforms, school management systems, hospital systems, pharmacy systems, POS systems, and ecommerce platforms.",
    "Built responsive and user-friendly interfaces using modern frontend technologies and markup languages such as HTML, CSS, JavaScript, and React.",
    "Optimized web applications for maximum speed, scalability, reliability, and cross-device compatibility.",
    "Integrated REST APIs and external data sources to support real-time system functionality and third-party services.",
    "Collaborated with backend developers, UI/UX designers, and cross-functional remote teams to improve usability and application performance.",
    "Created reusable components and libraries to improve development efficiency and maintainability across projects.",
    "Validated and secured user input before backend submission to enhance application security and data integrity.",
    "Designed and implemented mobile-based and Android-compatible features for improved accessibility and user experience.",
    "Performed unit testing, bug fixing, troubleshooting, and continuous performance improvements for deployed applications.",
    "Prepared functional requirement documents, mockups, guides, and prototypes to support project planning and client communication.",
    "Continuously researched and implemented emerging technologies and development practices to maximize software efficiency and delivery quality.",
    "Maintained high-quality graphic standards, brand consistency, and responsive UI/UX implementation across client projects."
  ],
  technologies: [
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "PHP",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "MongoDB",
    "MySQL",
    "REST APIs",
    "WebSockets",
    "Android",
    "Firebase",
    "Git",
    "AWS"
  ]
},
   {
  title: "Full Stack Software Developer",
  company: "Sahara Ventures",
  department: "Software Development",
  location: "Nairobi, Kenya",
  period: "2023",
  type: "Full-time",
  description:
    "Worked as a Full Stack Software Developer collaborating with cross-functional teams to design, develop, test, and maintain enterprise applications and automation solutions. Focused on software quality assurance, workflow optimization, debugging, and delivering scalable solutions aligned with client and business requirements.",
  achievements: [
    "Collaborated with cross-functional teams to review project requirements, technical specifications, and software designs while providing practical implementation feedback.",
    "Prepared structured test plans, testing strategies, and detailed test cases to ensure software reliability and performance.",
    "Coordinated software testing activities by estimating timelines, setting development priorities, and managing project deliverables.",
    "Designed and developed websites, enterprise platforms, and workflow automation scripts to improve operational efficiency.",
    "Identified, documented, tracked, and resolved software defects to enhance application stability and usability.",
    "Performed regression testing on bug fixes to ensure product consistency and minimize recurring software issues.",
    "Implemented testing processes and quality assurance practices for both new and existing software projects.",
    "Collaborated with product managers, developers, and remote teams to define system requirements and optimize project execution.",
    "Monitored debugging processes and optimized software solutions to improve performance and responsiveness.",
    "Investigated root causes of software issues and provided guidance and support for end-users during solution adoption.",
    "Tracked QA metrics including defect density, issue resolution rates, and open bug counts to monitor software quality improvements.",
    "Researched and implemented modern testing tools, methodologies, and best practices to improve product standards and development efficiency."
  ],
  technologies: [
    "JavaScript",
    "PHP",
    "Laravel",
    "MySQL",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Git",
    "REST APIs",
    "Automation Scripts",
    "QA Testing",
    "Software Debugging"
  ]
},
{
  title: "Junior Software Engineer",
  company: "TechBridge Solutions",
  department: "Software Engineering",
  location: "Nairobi, Kenya",
  period: "2024",
  type: "Full-time",
  description:
    "Supported the development and deployment of secure and scalable business applications for local clients across multiple sectors. Focused on software implementation, API integrations, debugging, testing, and system optimization to improve operational performance and customer experience.",
  achievements: [
    "Designed and deployed customized business applications tailored to client operational requirements and business processes.",
    "Integrated M-Pesa APIs including C2B, B2C, and STK Push to support seamless and secure digital payment processing.",
    "Built and implemented School Management Systems, Property Rental Platforms, CRM solutions, and Project Tracking applications for local organizations.",
    "Installed, configured, customized, and tested software systems to ensure smooth deployment and high user satisfaction.",
    "Collaborated closely with stakeholders to provide project updates, gather requirements, and resolve software-related challenges.",
    "Worked alongside development and QA teams to deliver secure, scalable, and high-performance software solutions.",
    "Conducted root cause analysis during debugging sessions, documenting software anomalies and implementing effective fixes.",
    "Improved application reliability and system performance by optimizing existing features and resolving critical bugs before production release.",
    "Participated in end-to-end software testing and validation to ensure quality standards and functional consistency.",
    "Supported continuous improvement initiatives by enhancing workflows, refining features, and implementing performance optimizations."
  ],
  technologies: [
    "JavaScript",
    "React",
    "PHP",
    "Laravel",
    "MySQL",
    "M-Pesa APIs",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "REST APIs",
    "Git",
    "Software Testing",
    "Debugging"
  ]
},
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