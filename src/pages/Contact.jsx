import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { insertContactMessageSchema } from "@/lib/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const message = `*New Contact Message*\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nMessage: ${data.message}`;
      const whatsappUrl = `https://wa.me/919923271737?text=${encodeURIComponent(message)}`;

      toast({
        title: "Message Ready",
        description: "Opening WhatsApp to send your message.",
      });

      form.reset();
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold font-heading text-foreground mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to help you achieve your perfect smile. Reach out to us for appointments or any queries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <Card className="shadow-md border border-border/60 bg-card"><CardContent className="p-6 flex items-start space-x-4"><div className="bg-primary/10 p-3 rounded-lg"><MapPin className="w-6 h-6 text-primary" /></div><div><h3 className="font-bold text-card-foreground mb-1">Our Location</h3><p className="text-muted-foreground text-sm">123 Dental Street, Medical Park,<br />Mumbai, Maharashtra 400001</p></div></CardContent></Card>
              <Card className="shadow-md border border-border/60 bg-card"><CardContent className="p-6 flex items-start space-x-4"><div className="bg-primary/10 p-3 rounded-lg"><Phone className="w-6 h-6 text-primary" /></div><div><h3 className="font-bold text-card-foreground mb-1">Phone Number</h3><p className="text-muted-foreground text-sm">+91 99232 71737</p><p className="text-muted-foreground/80 text-xs mt-1">Available on WhatsApp</p></div></CardContent></Card>
              <Card className="shadow-md border border-border/60 bg-card"><CardContent className="p-6 flex items-start space-x-4"><div className="bg-primary/10 p-3 rounded-lg"><Mail className="w-6 h-6 text-primary" /></div><div><h3 className="font-bold text-card-foreground mb-1">Email Address</h3><p className="text-muted-foreground text-sm">info@infinity.com</p></div></CardContent></Card>
              <Card className="shadow-md border border-border/60 bg-card text-card-foreground"><CardContent className="p-6 flex items-start space-x-4"><div className="bg-primary/10 p-3 rounded-lg"><Clock className="w-6 h-6 text-primary" /></div><div><h3 className="font-bold text-card-foreground mb-1">Opening Hours</h3><p className="text-muted-foreground text-sm">Mon - Sat: 10:00 AM - 8:00 PM</p><p className="text-primary text-sm font-medium">Sunday: Closed</p></div></CardContent></Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="shadow-lg overflow-hidden border border-border/60 bg-card">
                <div className="h-2 bg-primary w-full" />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-heading text-card-foreground mb-6">Send us a Message</h3>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Rajiv Sharma" {...field} className="h-12 bg-background/70 focus:bg-background transition-colors" /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="+91 9923271734" {...field} className="h-12 bg-background/70 focus:bg-background transition-colors" /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="rajiv@example.com" type="email" {...field} className="h-12 bg-background/70 focus:bg-background transition-colors" /></FormControl><FormMessage /></FormItem>
                      )} />

                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="How can we help you?" {...field} className="min-h-[150px] bg-background/70 focus:bg-background transition-colors resize-none" /></FormControl><FormMessage /></FormItem>
                      )} />

                      <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg rounded-xl shadow-lg hover:shadow-primary/25 transition-all">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
