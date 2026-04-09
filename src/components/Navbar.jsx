import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isServicesPage = location === "/services";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/919923271737", "_blank");
  };

  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Smile className="h-8 w-8 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-foreground leading-none">Infinity</span>
                <span className="text-xs text-muted-foreground font-medium tracking-wider">DENTAL CLINIC</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span
                  className={`cursor-pointer text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary font-bold" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <ThemeToggle
                className={
                  isServicesPage
                    ? "border border-primary/30 bg-primary/10 text-primary hover:bg-primary/15 dark:bg-primary/15 dark:border-primary/40"
                    : ""
                }
              />
              <Button
                onClick={handleWhatsApp}
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg hover:shadow-primary/30 transition-all"
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle
              className={
                isServicesPage
                  ? "border border-primary/30 bg-primary/10 text-primary hover:bg-primary/15 dark:bg-primary/15 dark:border-primary/40"
                  : ""
              }
            />
            <button onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground hover:text-primary transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium cursor-pointer transition-colors ${
                      location === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </div>
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 text-lg shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
