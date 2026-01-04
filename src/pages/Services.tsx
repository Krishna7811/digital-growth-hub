import { Link } from "react-router-dom";
import { Users, Code, ArrowRight, Target, Lightbulb, Rocket, Globe, Smartphone, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to help you and your business thrive
            in today's competitive landscape.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              icon={Users}
              title="Personal Coaching"
              description="Transform your mindset and unlock your full potential with personalized coaching sessions."
              benefits={[
                "One-on-one coaching sessions",
                "Goal setting and accountability",
                "Leadership development",
                "Career transition support",
                "Work-life balance strategies",
              ]}
            />
            <ServiceCard
              icon={Code}
              title="Web Development"
              description="Custom websites and web applications built with modern technologies for optimal performance."
              benefits={[
                "Responsive website design",
                "E-commerce solutions",
                "Custom web applications",
                "Performance optimization",
                "Ongoing maintenance & support",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Coaching Details */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                Personal Coaching
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Elevate Your Personal & Professional Life
              </h2>
              <p className="text-muted-foreground mb-8">
                My coaching approach combines proven methodologies with personalized
                strategies to help you overcome challenges, set meaningful goals,
                and achieve lasting success.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Target,
                    title: "Goal Clarity",
                    description: "Define clear, actionable objectives",
                  },
                  {
                    icon: Lightbulb,
                    title: "Mindset Shift",
                    description: "Transform limiting beliefs into strengths",
                  },
                  {
                    icon: Rocket,
                    title: "Performance",
                    description: "Maximize productivity and impact",
                  },
                  {
                    icon: Users,
                    title: "Leadership",
                    description: "Develop influential leadership skills",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Users className="h-24 w-24 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Details */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Code className="h-24 w-24 text-primary/30" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Code className="h-4 w-4" />
                Web Development
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Modern Digital Solutions That Convert
              </h2>
              <p className="text-muted-foreground mb-8">
                From stunning websites to complex web applications, I deliver
                solutions that not only look great but drive real business results
                through strategic design and development.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Globe,
                    title: "Web Design",
                    description: "Beautiful, user-focused interfaces",
                  },
                  {
                    icon: Smartphone,
                    title: "Responsive",
                    description: "Perfect on every device and screen",
                  },
                  {
                    icon: Rocket,
                    title: "Performance",
                    description: "Fast loading, optimized experiences",
                  },
                  {
                    icon: Palette,
                    title: "Branding",
                    description: "Consistent visual identity throughout",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss your needs and create a tailored solution that delivers
            real results for you and your business.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
