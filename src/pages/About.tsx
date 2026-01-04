import { Link } from "react-router-dom";
import { ArrowRight, Award, BookOpen, Users, Briefcase, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const milestones = [
    { year: "2016", title: "Started Career", description: "Began journey in tech and personal development" },
    { year: "2018", title: "First Coaching Clients", description: "Helped first 10 clients achieve their goals" },
    { year: "2020", title: "Web Development Focus", description: "Expanded services to include full-stack development" },
    { year: "2022", title: "100+ Projects", description: "Milestone of 100 successful project completions" },
    { year: "2024", title: "Global Reach", description: "Working with clients across 15+ countries" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "I believe in being genuine and transparent in every interaction.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering the highest quality in everything I do.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Success is achieved together through partnership and trust.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Hi, I'm <span className="text-primary">John Doe</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                A passionate coach and web developer dedicated to helping
                individuals and businesses unlock their full potential. With over
                8 years of experience, I've had the privilege of working with
                amazing clients worldwide.
              </p>
              <p className="text-muted-foreground mb-8">
                My mission is simple: to empower you with the tools, strategies,
                and mindset needed to achieve extraordinary results. Whether
                you're looking to grow personally, advance professionally, or
                build a powerful digital presence, I'm here to guide you every
                step of the way.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Let's Connect
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Professional Photo
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, number: "50+", label: "Clients Served" },
              { icon: Award, number: "100+", label: "Projects Completed" },
              { icon: BookOpen, number: "8+", label: "Years Experience" },
              { icon: Users, number: "15+", label: "Countries Reached" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold">
                  {stat.number}
                </div>
                <div className="text-sm text-background/70 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            My Journey
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">
              My journey began with a simple belief: everyone has the potential
              to achieve greatness. After years of working in corporate
              environments, I realized that true fulfillment comes from helping
              others succeed.
            </p>
            <p className="mb-6">
              I transitioned from a traditional career path to pursuing my
              passion for coaching and technology. This unique combination
              allows me to offer a holistic approach to personal and business
              growth—one that addresses both the human element and the digital
              tools needed for success in today's world.
            </p>
            <p>
              Today, I work with entrepreneurs, professionals, and businesses
              around the globe, helping them clarify their vision, develop
              actionable strategies, and build the digital infrastructure needed
              to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Career Milestones
          </h2>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="text-primary font-bold text-lg">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-1">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            My Core Values
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            These principles guide every interaction and project I undertake.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm always excited to connect with new clients and discuss how we
            can achieve great things together.
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

export default About;
