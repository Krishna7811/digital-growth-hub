import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const whatsappNumber = "1234567890";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I'm interested in your services.`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your transformation? Reach out today and let's
            discuss how I can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you have a question about my services, want to discuss a
                potential project, or just want to say hello, I'd love to hear
                from you. Fill out the form or reach out directly.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:hello@johndoe.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@johndoe.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <Button
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>

              {/* Availability */}
              <div className="mt-8 p-6 rounded-xl bg-secondary/50">
                <h3 className="font-semibold text-foreground mb-2">
                  Availability
                </h3>
                <p className="text-muted-foreground text-sm">
                  I typically respond within 24 hours. For urgent matters, please
                  reach out via WhatsApp.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    Currently accepting new clients
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              {
                q: "What is your typical response time?",
                a: "I respond to all inquiries within 24 hours, usually much sooner.",
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes! I offer a free 30-minute discovery call to discuss your needs.",
              },
              {
                q: "Can you work with international clients?",
                a: "Absolutely. I work with clients globally across different time zones.",
              },
              {
                q: "What payment methods do you accept?",
                a: "I accept bank transfers, PayPal, and major credit cards.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
