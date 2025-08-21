import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Star, Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const testimonialSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  company: z.string().min(2, "Company must be at least 2 characters"),
  content: z.string().min(10, "Testimonial must be at least 10 characters"),
  rating: z.number().min(1).max(5),
});

type TestimonialFormData = z.infer<typeof testimonialSchema>;

const Testimonials = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userTestimonials, setUserTestimonials] = useState<(TestimonialFormData & { avatar?: string })[]>([]);

  const defaultTestimonials = [
    {
      name: "Robina Damacline",
      role: "Product Manager",
      company: "Kenya Revenue Authority",
      content: "Anthony delivered exceptional results on our i-tax systems. His attention to detail and technical expertise has made his working period with us tramendously outstanding ensuring we improve and achieve more on what we had earlier not put much conciderations on.",
      rating: 5,
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Michael Murigi",
      role: "CTO",
      company: "Datanet Systems Ltd ",
      content: "Working with Anthony was a game-changer for our company. He built scalable solutions that perfectly aligned with our vision and business goals that further saw us making much improvements.",
      rating: 5,
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Emily Muchiri",
      role: "Design Lead",
      company: "Sahara Ventures ",
      content: "Makori has an incredible ability to translate design concepts into flawless code. The collaboration was seamless and the final product exceeded expectations.",
      rating: 5,
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Rabin Lucas",
      role: "C.E.O",
      company: "Falcon Eye Philmz",
      content: "The quality of work and professionalism Anthony brings to every project is outstanding. He consistently deliver on time and within budget.",
      rating: 5,
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Nazrah Nyang'wara",
      role: "Data Scientist",
      company: "Kenya Revenue Authority",
      content: "Makori's full-stack expertise helped us build a robust analytics platform. His insights into both frontend and backend development were invaluable in enabling us automate processes that had earlier proven to be somehow impossible.Just Exemplary work.",
      rating: 5,
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Kevin Ruto",
      role: "Tech Lead",
      company: "Swisskenko Ltd ",
      content: "Exceptional developer with strong problem-solving skills. Makori's code is clean, well-documented, and maintainable. Highly recommended!",
      rating: 5,
      avatar: "/api/placeholder/150/150"
    },
  ];

  const allTestimonials = [...userTestimonials, ...defaultTestimonials];

  const form = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: "",
      role: "",
      company: "",
      content: "",
      rating: 5,
    },
  });

  const onSubmit = (data: TestimonialFormData) => {
    setUserTestimonials(prev => [{
      ...data,
      avatar: "/api/placeholder/150/150"
    }, ...prev]);
    form.reset();
    setIsDialogOpen(false);
  };

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
          <div className="mt-8">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="hover-scale">
                  <Plus className="mr-2 h-5 w-5" />
                  Add Your Testimonial
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Share Your Experience</DialogTitle>
                  <DialogDescription>
                    Tell others about your experience working with me. Your testimonial will be displayed publicly.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Role</FormLabel>
                            <FormControl>
                              <Input placeholder="Your job title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Testimonial</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share your experience working with me..."
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="rating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rating</FormLabel>
                          <FormControl>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-6 w-6 cursor-pointer transition-colors ${
                                    star <= field.value
                                      ? "text-primary fill-primary"
                                      : "text-muted-foreground"
                                  }`}
                                  onClick={() => field.onChange(star)}
                                />
                              ))}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end gap-2 pt-4">
                      <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button type="submit">Submit Testimonial</Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.map((testimonial, index) => (
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