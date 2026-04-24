"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight, 
  ArrowUpRight,
  Play,
  Quote,
  Star
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
} as const;

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const services = [
  { id: "01", title: "Interior Design", href: "/services/interior-design" },
  { id: "02", title: "Construction Work", href: "/services/construction" },
  { id: "03", title: "Waterproofing", href: "/services/waterproofing" },
  { id: "04", title: "Painting", href: "/services/painting" },
  { id: "05", title: "Custom Furniture", href: "/services/custom-furniture" },
];

const processSteps = [
  { id: "01", title: "Consultation and Discovery", desc: "We start by understanding your space, goals, and requirements. This step helps define the scope and vision.", image: "/projects/1.jpeg" },
  { id: "02", title: "Planning & Design", desc: "Once the vision is clear, we create detailed plans and 3D designs for your approval.", image: "/projects/3.jpeg" },
  { id: "03", title: "Execution and Coordination", desc: "Our skilled team manages the construction and installation with meticulous attention to detail.", image: "/projects/14.jpeg" },
  { id: "04", title: "Final Styling and Delivery", desc: "The final stage focuses on finishing touches to ensure the space aligns with the original vision.", image: "/projects/4.png" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-black text-zinc-900 dark:text-zinc-100">
      
      {/* Hero Section - Matching the dramatic Loxora style */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_bg.png"
            alt="Modern Living Room Interior Design Silchar"
            fill
            sizes="100vw"
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-6xl md:text-6xl lg:text-8xl font-heading font-medium text-white mb-8 leading-[1.1] tracking-tight">
              Interior Design for <br />
              <span className="text-white font-bold italic">Modern Living</span>
            </h1>
            
            <div className="flex flex-col items-center mt-12">
              <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 px-10 h-16 text-lg font-bold shadow-xl shadow-primary/20" asChild>
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Showcase Video */}
      <section className="py-24 bg-white dark:bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-4">Vision in Motion</p>
            <h2 className="text-4xl md:text-6xl font-heading font-medium">Crafting <span className="italic">Experiences</span></h2>
          </div>
          <motion.div 
            {...fadeIn}
            className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border border-zinc-100 dark:border-zinc-900"
          >
            <video 
              src="/ad_video.mp4" 
              loop 
              playsInline 
              controls
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects - New Section (Top 10 Masterpieces) */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16 gap-8">
            <div>
              <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-4">Portfolio</p>
              <h2 className="text-4xl md:text-6xl font-heading font-medium">Selected <br /><span className="italic uppercase">Masterpieces</span></h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-zinc-200 dark:border-zinc-800 px-10 h-14 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all uppercase tracking-widest text-xs font-bold">
              <Link href="/portfolio" className="flex items-center gap-2">
                View All Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["1.jpeg", "2.png", "4.jpeg", "5.jpeg", "8.jpeg", "12.jpeg", "20.jpeg", "25.jpeg", "28.jpeg", "23.jpeg", "15.jpeg"].map((img, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                className={`relative overflow-hidden rounded-[2rem] group cursor-pointer ${i === 0 ? "md:col-span-2 md:aspect-[16/9]" : "aspect-[3/4]"}`}
              >
                <Image
                  src={`/projects/${img}`}
                  alt={`Dream Design Featured Project ${img}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Achievement Banner style */}
      <section className="py-16 border-b border-zinc-100 dark:border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-1">96%</h3>
              <p className="text-zinc-500 text-sm uppercase tracking-widest">Client Satisfaction</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-1">17+</h3>
              <p className="text-zinc-500 text-sm uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-1">300+</h3>
              <p className="text-zinc-500 text-sm uppercase tracking-widest">Projects Completed</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-1">100%</h3>
              <p className="text-zinc-500 text-sm uppercase tracking-widest">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Minimalist & Elegant */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn} className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/owner.jpeg"
                alt="Dilip Das - Founder of Dream Design Silchar"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div {...fadeIn}>
              <Badge variant="outline" className="mb-6 uppercase tracking-[0.3em] font-bold text-primary border-primary">Since 2007</Badge>
              <h2 className="text-4xl md:text-6xl font-heading font-medium mb-8 leading-tight">
                We design modern interior spaces that balance <br />
                <span className="italic">function and aesthetics</span>
              </h2>
              <div className="space-y-6 text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-xl">
                <p>
                  Led by Mr. Dilip Das, Dream Design Silchar is an interior design studio dedicated to creating refined residential and commercial spaces. Our approach combines modern design with careful planning for every interior aspect.
                </p>
                <p>
                  Our mission is to provide high-quality, durable, and aesthetic home solutions while maintaining fair pricing and professional transparency in Silchar.
                </p>
              </div>
              <Button asChild variant="link" className="mt-10 px-0 text-lg font-medium group underline decoration-primary underline-offset-8 decoration-2">
                <Link href="/about">
                  Learn More <ArrowUpRight className="ml-2 h-5 w-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - Numbered Grid (Loxora Style) */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-4">Our Method</p>
            <h2 className="text-4xl md:text-6xl font-heading font-medium">A Structured Interior <br /><span className="italic">Design Process</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                {...fadeIn}
                className="group"
              >
                <div className="mb-8">
                  <span className="text-4xl font-heading font-light text-zinc-300 group-hover:text-primary transition-colors">{step.id}</span>
                </div>
                <div className="relative aspect-[3/4] mb-8 rounded-2xl overflow-hidden">
                  <Image
                    src={step.image}
                    alt={`Dream Design Silchar Project - ${step.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-all duration-700"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Section - Clean Vertical List (Loxora Style) */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-4">Expertise</p>
              <h2 className="text-4xl md:text-6xl font-heading font-medium mb-10">Our Interior Design <br /><span className="italic">Services</span></h2>
              <p className="text-zinc-500 text-lg max-w-md leading-relaxed">
                We are an interior design studio dedicated to creating spaces that feel comfortable, balanced, and practical. Our approach combines modern design.
              </p>
              <Button className="mt-12 rounded-full px-8 h-12">View All Services</Button>
            </div>
            <div className="space-y-0">
              {services.map((service) => (
                <Link 
                  key={service.id}
                  href={service.href}
                  className="group flex items-center justify-between py-10 border-b border-zinc-100 dark:border-zinc-900 hover:px-4 transition-all duration-500"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-sm font-medium text-zinc-400">{service.id}</span>
                    <span className="text-2xl md:text-3xl font-heading font-medium group-hover:text-primary transition-colors">{service.title}</span>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-zinc-300 group-hover:text-primary group-hover:rotate-45 transition-all duration-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements / Social Proof Section */}
      <section className="py-32 bg-zinc-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-5xl font-heading font-medium mb-12">Our Achievements <br /><span className="italic">For Interior Design</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
                {[
                  { year: "2007", title: "Founded in Silchar", desc: "Started the journey of excellence." },
                  { year: "2015", title: "100+ Projects", desc: "Milestone of trusted home solutions." },
                  { year: "2020", title: "Innovation Award", desc: "Recognized for modern PVC designs." },
                  { year: "2024", title: "Market Leader", desc: "Silchar's top choice for turnkey projects." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-6 pb-8 border-b border-white/10 group">
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                    <div>
                      <h4 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-zinc-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/projects/6.jpeg"
                alt="Award Winning Interior Design Project Silchar"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover brightness-90"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-transparent to-transparent">
                <p className="text-white/80 text-lg italic">&quot;Beautiful results through a skilled and personable team.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials (Optional) */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center">
          <Quote className="h-12 w-12 text-primary/20 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-medium mb-16 italic">&quot;Dream Design transformed my old house <br /> into a modern masterpiece.&quot;</h2>
          <div className="flex flex-col items-center">
             <div className="flex gap-1 mb-4 text-yellow-500">
               {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
             </div>
             <p className="font-bold text-xl">Rahul</p>
             <p className="text-zinc-500 uppercase tracking-widest text-xs mt-1">Verified Client</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[100px] rounded-full translate-x-1/2" />
          <h2 className="text-4xl md:text-7xl font-heading font-medium text-white mb-8">Ready to Start Your <br /><span className="italic">Interior Design Project?</span></h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
             <div className="text-white/60 text-lg">
                <p>+91-9854382525</p>
                <p>dilipdassilchar@gmail.com</p>
             </div>
             <Button size="lg" className="rounded-full px-10 h-16 text-lg bg-primary hover:bg-primary/90">Book Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
