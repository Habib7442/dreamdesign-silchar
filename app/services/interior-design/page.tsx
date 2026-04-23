import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Palette, Sofa, Lightbulb, Layers, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Best Interior Designer in Silchar | Dream Design Silchar",
  description: "Transform your home with Silchar's top interior design studio. From concept to completion, we design warm, inviting homes that reflect your personality.",
  keywords: "interior designer silchar, home interior design silchar, living room design, bedroom design silchar, modular kitchen silchar",
};

const features = [
  {
    icon: Palette,
    title: "Custom Color Schemes",
    desc: "Curated palettes that match your taste and lifestyle.",
  },
  {
    icon: Sofa,
    title: "Space Planning",
    desc: "Optimized layouts that maximize every square foot.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    desc: "Layered solutions to set the perfect mood in every room.",
  },
  {
    icon: Layers,
    title: "Material Selection",
    desc: "Premium materials handpicked for durability and aesthetics.",
  },
];

const offerings = [
  "Living Room Design",
  "Master Suite Design",
  "Modular Kitchen",
  "Bathroom Interior",
  "Dining Area Design",
  "Pooja Room Design",
  "Home Office",
  "Wardrobe Solutions",
];

export default function InteriorDesignPage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-zinc-950">
      {/* Hero Section - Fully Centered */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden py-20">
        <Image
          src="/projects/1.jpeg"
          alt="Modern Home Interior Design Project in Silchar"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.3] scale-105"
          priority
        />
        <div className="container mx-auto px-6 relative z-10 text-white max-w-4xl pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Expert Interior Solutions</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Interior Design <br />
            <span className="text-primary italic font-light">That Inspires</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            From concept to completion, we design warm, inviting homes that reflect your personality and enhance everyday living in Silchar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button size="lg" className="rounded-full px-10 h-14 text-base font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20" asChild>
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-base font-bold bg-white/5 border-white/20 hover:bg-white/10 backdrop-blur-sm" asChild>
              <Link href="/portfolio">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise Section - Centered Heading */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Designing Spaces That Feel Like Home</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            At Dream Design Silchar, we believe that great interior design is about understanding how you live. We create spaces that are not just beautiful, but functional and deeply personal.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
            {offerings.map((item, i) => (
              <div key={item} className="flex flex-col items-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-primary/30 transition-all group">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-bold text-center">{item}</span>
              </div>
            ))}
          </div>

          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
             <Image
                src="/projects/2.jpeg"
                alt="Luxury Interior Design Villa Project by Dream Design Silchar"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-left text-white">
                <p className="text-primary font-bold text-sm uppercase mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold">Modern Luxury Villa, Silchar</h3>
              </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Centered Grid */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">The Dream Design Advantage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="border-none rounded-3xl p-10 bg-white dark:bg-zinc-900 shadow-xl shadow-zinc-200/50 dark:shadow-none text-center hover:-translate-y-2 transition-all duration-300">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process - Centered Steps */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Your Journey to a Dream Home</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
             <div className="hidden md:block absolute top-1/4 left-0 w-full h-[2px] bg-zinc-100 dark:bg-zinc-800 -z-10" />
            {[
              { step: "01", title: "Consultation", desc: "Initial site visit to understand your vision and budget." },
              { step: "02", title: "Concept", desc: "Personalized mood boards and detailed 3D design renders." },
              { step: "03", title: "Execution", desc: "Expert craftsmanship using the highest quality materials." },
              { step: "04", title: "Handover", desc: "Final quality check and delivery of your dream space." },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="h-16 w-16 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 flex items-center justify-center mx-auto mb-8 group-hover:border-primary group-hover:text-primary transition-all shadow-lg">
                  <span className="text-xl font-heading font-bold">{item.step}</span>
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Centered */}
      <section className="py-24 bg-zinc-950 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-primary/5 opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">Get in touch today for a free design consultation and site visit in Silchar.</p>
          <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold shadow-2xl shadow-primary/30" asChild>
            <Link href="/contact">Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
