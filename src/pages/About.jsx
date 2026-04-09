import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BadgeCheck, Trophy, Users, Handshake, Heart, Star } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24">
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold font-heading text-foreground mb-6">About Infinity</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Founded with a vision to provide accessible, high-quality dental care, Infinity has grown into one of the most trusted dental clinics in the region. We believe that a healthy smile is the gateway to a healthy life.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full z-0" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-full z-0" />
                <img src="https://drkaursdentalranchi.com/wp-content/uploads/2023/09/PHOTO-2023-09-18-10-10-03-1152x1536.jpg" alt="Our Doctor" className="relative z-10 rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]" />
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold font-heading text-foreground mb-4">Meet Dr. Sharma</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 15 years of clinical experience, Dr. Sharma is a renowned dental surgeon specializing in cosmetic dentistry and implantology. He is committed to staying updated with the latest advancements in dentistry to provide the best possible care to his patients.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all"><Trophy className="w-8 h-8 text-yellow-500 mb-3" /><h3 className="font-bold text-card-foreground mb-1">Award Winning</h3><p className="text-sm text-muted-foreground">Recognized for excellence in patient care.</p></div>
                  <div className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all"><BadgeCheck className="w-8 h-8 text-primary mb-3" /><h3 className="font-bold text-card-foreground mb-1">Certified</h3><p className="text-sm text-muted-foreground">Board certified with international training.</p></div>
                  <div className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all"><Users className="w-8 h-8 text-blue-500 mb-3" /><h3 className="font-bold text-card-foreground mb-1">Patient Focused</h3><p className="text-sm text-muted-foreground">Over 5,000 satisfied smiles created.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-heading text-foreground mb-4">Our Core Values</h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div className="p-6"><div className="w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center mx-auto mb-6"><Handshake className="w-7 h-7 text-primary" /></div><h3 className="text-xl font-bold text-foreground mb-3">Integrity</h3><p className="text-muted-foreground">We believe in honest, transparent treatment planning with no hidden costs.</p></div>
              <div className="p-6"><div className="w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center mx-auto mb-6"><Heart className="w-7 h-7 text-primary" /></div><h3 className="text-xl font-bold text-foreground mb-3">Compassion</h3><p className="text-muted-foreground">We understand dental anxiety and strive to make every visit comfortable.</p></div>
              <div className="p-6"><div className="w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center mx-auto mb-6"><Star className="w-7 h-7 text-primary" /></div><h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3><p className="text-muted-foreground">We never compromise on the quality of materials or hygiene standards.</p></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
