import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      content: "Alex delivered exceptional results on our e-commerce platform. Their attention to detail and technical expertise made the entire process smooth and efficient.",
      rating: 5,
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      content: "Working with Alex was a game-changer for our startup. They built a scalable solution that perfectly aligned with our vision and business goals.",
      rating: 5,
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Emily Johnson",
      role: "Design Lead",
      company: "Creative Agency",
      content: "Alex has an incredible ability to translate design concepts into flawless code. The collaboration was seamless and the final product exceeded expectations.",
      rating: 5,
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "David Kim",
      role: "Founder",
      company: "InnovateLabs",
      content: "The quality of work and professionalism Alex brings to every project is outstanding. They consistently deliver on time and within budget.",
      rating: 5,
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director",
      company: "GrowthCo",
      content: "Alex's full-stack expertise helped us build a robust analytics platform. Their insights into both frontend and backend development were invaluable.",
      rating: 5,
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "James Wilson",
      role: "Tech Lead",
      company: "Enterprise Solutions",
      content: "Exceptional developer with strong problem-solving skills. Alex's code is clean, well-documented, and maintainable. Highly recommended!",
      rating: 5,
      avatar: "/api/placeholder/150/150"
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-smooth shadow-card hover-scale"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="h-5 w-5 text-primary fill-primary" 
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;