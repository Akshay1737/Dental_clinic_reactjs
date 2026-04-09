import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertAppointmentSchema } from "@/lib/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const services = [
  "General Checkup",
  "Root Canal",
  "Teeth Whitening",
  "Braces & Aligners",
  "Kids Dentistry",
  "Dental Implants",
  "Emergency Care",
];

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM", "06:00 PM",
];

export default function AppointmentForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const form = useForm({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      timeSlot: "",
      service: "General Checkup",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const message = `*New Appointment Request*\nName: ${data.name}\nPhone: ${data.phone}\nDate: ${data.date}\nTime Slot: ${data.timeSlot}\nService: ${data.service}`;
      const whatsappUrl = `https://wa.me/919923271737?text=${encodeURIComponent(message)}`;

      toast({
        title: "Booking Initiated",
        description: "Redirecting to WhatsApp to confirm your appointment...",
      });

      form.reset();
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
      <h3 className="text-xl font-bold font-heading mb-6 text-foreground">Book Your Slot</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl><Input placeholder="Enter your name" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl><Input placeholder="Enter phone number" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col min-w-0">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full min-w-0 overflow-hidden justify-between pl-3 pr-2 text-left font-normal border-input bg-background hover:bg-muted/50",
                            !field.value && "text-muted-foreground",
                            field.value && "text-foreground border-primary/40"
                          )}
                        >
                          {field.value ? (
                            <span className="truncate">{format(new Date(`${field.value}T00:00:00`), "dd MMM yyyy")}</span>
                          ) : (
                            <span className="truncate">Pick a date</span>
                          )}
                          <CalendarIcon className={cn("h-4 w-4 shrink-0 opacity-60", field.value && "text-primary opacity-100")} />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 border-border" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value ? new Date(`${field.value}T00:00:00`) : undefined}
                        onSelect={(date) => field.onChange(date ? format(date, "yyyy-MM-dd") : "")}
                        disabled={(date) => date < today || date < new Date("1900-01-01")}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeSlot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Slot</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {timeSlots.map((slot) => <SelectItem key={slot} value={slot}>{slot}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Required</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl><SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger></FormControl>
                  <SelectContent>
                    {services.map((service) => <SelectItem key={service} value={service}>{service}</SelectItem>)}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-primary py-6 text-lg rounded-xl" disabled={isSubmitting}>
            {isSubmitting ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing...</>
            ) : (
              "Confirm & Book on WhatsApp"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
