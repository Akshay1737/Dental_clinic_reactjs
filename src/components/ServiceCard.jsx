import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ServiceCard({ title, description, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
        <CardHeader className="text-center pt-8">
          <div className="mx-auto bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-xl font-bold font-heading text-card-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center pb-8">
          <CardDescription className="text-base text-muted-foreground leading-relaxed">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
