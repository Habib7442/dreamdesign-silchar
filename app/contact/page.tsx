"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    service: "Modular Kitchen",
    message: ""
  });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Dream Design Silchar, my name is ${formData.name}. %0A%0A*Phone:* ${formData.phone} %0A*Service:* ${formData.service} %0A*Details:* ${formData.message}`;
    window.open(`https://wa.me/919854382525?text=${text}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id || 'service']: e.target.value });
  };

  return (
    <div className="flex flex-col w-full bg-white dark:bg-black text-zinc-900 dark:text-zinc-100">
      {/* Premium Header */}
      <section className="pt-32 pb-16 border-b border-zinc-100 dark:border-zinc-900">
        <div className="container mx-auto px-6 md:px-12">
          <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-6">Contact</p>
          <h1 className="text-5xl md:text-8xl font-heading font-medium leading-none mb-8">
            Let&apos;s Start a <br />
            <span className="italic font-light">Conversation</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
            Ready to transform your space? Reach out to us for a free consultation and quote. We&apos;re here to bring your vision to life in Silchar.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Form - Minimalist */}
            <div>
              <p className="uppercase tracking-[0.4em] text-xs font-black text-primary mb-8">Inquiry Form</p>
              <form onSubmit={handleWhatsAppRedirect} className="space-y-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div className="space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-2 focus-within:border-primary transition-colors">
                    <Label htmlFor="name" className="text-xs uppercase tracking-widest text-zinc-400">Full Name</Label>
                    <Input 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      className="border-none bg-transparent p-0 text-xl placeholder:text-zinc-300 focus-visible:ring-0 rounded-none h-auto" 
                    />
                  </div>
                  <div className="space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-2 focus-within:border-primary transition-colors">
                    <Label htmlFor="phone" className="text-xs uppercase tracking-widest text-zinc-400">Phone Number</Label>
                    <Input 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX" 
                      className="border-none bg-transparent p-0 text-xl placeholder:text-zinc-300 focus-visible:ring-0 rounded-none h-auto" 
                    />
                  </div>
                </div>
                <div className="space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-2 focus-within:border-primary transition-colors">
                  <Label htmlFor="service" className="text-xs uppercase tracking-widest text-zinc-400">Service Interested In</Label>
                  <select 
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="flex w-full border-none bg-transparent p-0 text-xl focus-visible:outline-none appearance-none cursor-pointer"
                  >
                    <option>Modular Kitchen</option>
                    <option>Civil & Construction</option>
                    <option>False Ceiling & PVC</option>
                    <option>Painting Services</option>
                    <option>Metal Fabrication</option>
                    <option>Full Home Renovation</option>
                  </select>
                </div>
                <div className="space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-2 focus-within:border-primary transition-colors">
                  <Label htmlFor="message" className="text-xs uppercase tracking-widest text-zinc-400">Project Details</Label>
                  <Textarea 
                    id="message" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..." 
                    className="border-none bg-transparent p-0 text-xl placeholder:text-zinc-300 focus-visible:ring-0 rounded-none min-h-[100px] resize-none" 
                  />
                </div>
                <Button size="lg" type="submit" className="rounded-full px-12 h-16 text-lg group">
                  Send Message <ArrowUpRight className="ml-2 h-5 w-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="lg:pl-12">
               <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-12">Details</p>
               <div className="space-y-16">
                  <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                        <Phone className="h-4 w-4" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-zinc-400">Call Us</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-3xl font-heading font-medium">9854382525 <span className="text-sm font-sans text-primary">(WhatsApp)</span></p>
                      <p className="text-3xl font-heading font-medium">9395841984</p>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                        <Mail className="h-4 w-4" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-zinc-400">Email Us</span>
                    </div>
                    <p className="text-3xl font-heading font-medium text-break">dilipdassilchar@gmail.com</p>
                  </div>

                  <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-zinc-400">Our Location</span>
                    </div>
                    <p className="text-2xl font-heading font-medium">Meherpur, Silchar, Cachar, Assam 788015</p>
                  </div>

                  <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                        <Clock className="h-4 w-4" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-zinc-400">Hours</span>
                    </div>
                    <p className="text-3xl font-heading font-medium">Mon - Sat: 9 AM - 7 PM</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="h-[600px] rounded-[3rem] overflow-hidden hover:opacity-90 transition-all duration-1000 border border-zinc-200 dark:border-zinc-800 relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.16814674345!2d92.7789!3d24.8333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4a77959080bf%3A0xc346d764724b423b!2sMeherpur%2C%20Silchar%2C%20Assam%20788015!5e0!3m2!1sen!2sin!4v1713876000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
