import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import AppointmentForm from "@/components/AppointmentForm";
import { Activity, Smile, UserCheck, Heart, Zap, Sparkles, Calendar } from "lucide-react";

export default function Services() {
  const services = [
    { title: "General Checkup", description: "Routine examinations and professional cleaning to maintain optimal oral hygiene.", icon: UserCheck },
    { title: "Root Canal", description: "Advanced painless root canal treatment to save infected teeth from extraction.", icon: Activity },
    { title: "Teeth Whitening", description: "Professional whitening services to brighten your smile by several shades safely.", icon: Sparkles },
    { title: "Braces & Aligners", description: "Correct misaligned teeth with traditional braces or invisible aligners for a perfect bite.", icon: Smile },
    { title: "Kids Dentistry", description: "Specialized gentle care for children to ensure healthy dental development.", icon: Heart },
    { title: "Emergency Care", description: "Immediate attention for dental emergencies like toothaches, breaks, or trauma.", icon: Zap },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="bg-secondary/30 py-16 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold font-heading text-foreground mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of dental treatments using state-of-the-art technology to ensure you receive the best care possible.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} delay={index * 0.1} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-primary/5 rounded-3xl p-2 border border-primary/10">
                  <AppointmentForm />
                </div>
                <div className="mt-8 bg-card text-card-foreground rounded-2xl p-6 shadow-xl border border-border transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-primary w-6 h-6" />
                    <h3 className="text-xl font-bold font-heading">Clinic Hours</h3>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex justify-between border-b border-border pb-2"><span>Mon - Sat</span><span className="font-medium text-card-foreground">10:00 AM - 07:00 PM</span></div>
                    <div className="flex justify-between text-primary font-medium"><span>Sunday</span><span>Closed</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-20 py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://perfect32ranchi.com/wp-content/uploads/2024/07/6-min.png" alt="Modern Equipment" className="rounded-3xl shadow-xl w-full" />
              </div>
              <div>
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
                <h2 className="text-3xl font-bold font-heading text-foreground mt-2 mb-6">Advanced Technology for Precise Care</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We utilize the latest in dental technology, including digital X-rays, intraoral cameras, and laser dentistry, to provide accurate diagnoses and effective treatments.
                </p>
                <ul className="space-y-4">
                  {[
                    "Digital X-Rays with 90% less radiation",
                    "Laser Dentistry for painless soft tissue procedures",
                    "Advanced sterilization protocols for your safety",
                    "Intraoral scanners for comfortable impressions",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-muted-foreground"><div className="w-2 h-2 bg-primary rounded-full mr-3" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
