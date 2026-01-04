import { Link } from "react-router-dom";
import { ArrowRight, Users, Code, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="h-4 w-4" />
                Personal Coaching & Web Development
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Helping Businesses{" "}
                <span className="text-primary">Grow Digitally</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Transform your vision into reality with expert guidance in personal
                development and cutting-edge web solutions. Let's build something
                extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Professional Photo
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Clients Helped" },
              { number: "100+", label: "Projects Delivered" },
              { number: "8+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What I Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to help you and your business reach new
              heights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Personal Coaching */}
            <div className="group p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Coaching</h3>
              <p className="text-muted-foreground mb-6">
                Unlock your potential with tailored coaching sessions designed to
                accelerate your personal and professional growth.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Web Development */}
            <div className="group p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Code className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-muted-foreground mb-6">
                Modern, responsive websites and web applications built with the
                latest technologies to elevate your digital presence.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Work With Me?
              </h2>
              <p className="text-muted-foreground mb-8">
                With years of experience helping individuals and businesses
                succeed, I bring a unique combination of technical expertise and
                personal insight to every project.
              </p>

              <div className="space-y-4">
                {[
                  "Results-driven approach with measurable outcomes",
                  "Personalized strategies tailored to your goals",
                  "Ongoing support and guidance throughout your journey",
                  "Proven track record of client success",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <p className="text-muted-foreground">About Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-foreground rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-background/70 max-w-2xl mx-auto mb-8">
              Let's discuss how I can help you achieve your goals. Book a free
              consultation and take the first step towards success.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
