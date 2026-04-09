import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import AppointmentForm from "@/components/AppointmentForm";
import { Link } from "wouter";

export default function Home() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919923271737", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="hero" className="relative pt-20 lg:pt-32 pb-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-secondary/35 to-background">
          <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide">
                  Trusted by 5,000+ Happy Patients
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
                  Your Smile, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Our Passion</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Experience painless, modern dentistry with world-class technology. We are dedicated to providing comprehensive dental care for you and your family.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                  <Link href="/services"><Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl text-lg shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1">Explore Services <ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
                  <Link href="/contact"><Button variant="outline" className="px-8 py-6 rounded-xl text-lg border-2 hover:bg-accent transition-all">Find Location</Button></Link>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-muted-foreground">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Modern Tech</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Expert Doctors</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Painless Care</div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative z-20">
                <AppointmentForm />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">What We Do</span>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mt-2">Comprehensive Dental Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard title="Root Canal Treatment" description="Save your natural tooth with our painless root canal therapy using the latest rotary technology." icon={HeartPulse} delay={0.1} />
              <ServiceCard title="Cosmetic Dentistry" description="Transform your smile with veneers, bonding, and smile makeovers tailored just for you." icon={Sparkles} delay={0.2} />
              <ServiceCard title="Dental Implants" description="Permanent solution for missing teeth. Restore your confidence with our premium implants." icon={ShieldCheck} delay={0.3} />
            </div>

            <div className="text-center mt-12">
              <Link href="/services"><Button variant="outline" className="px-8 py-3 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all">View All Services</Button></Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-6">Ready to brighten your smile?</h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">Book your appointment today and take the first step towards perfect dental health.</p>
            <Button onClick={handleWhatsApp} className="bg-white text-primary hover:bg-white/90 px-10 py-7 rounded-full text-lg font-bold shadow-2xl hover:shadow-white/20 transition-all transform hover:-translate-y-1">
              <Phone className="w-5 h-5 mr-2" /> Call Now: +91 99232 71737
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
