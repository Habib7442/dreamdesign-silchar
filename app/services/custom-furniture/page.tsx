import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Armchair, Ruler, Palette, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom Furniture Design in Silchar | Bespoke Furniture Maker | Dream Design",
  description: "Get handcrafted custom furniture in Silchar. We design bespoke furniture pieces and built-in solutions that perfectly complement your space.",
  keywords: "custom furniture silchar, furniture maker silchar, bespoke furniture assam, modular wardrobe silchar, custom bed design silchar",
};

const features = [
  {
    icon: Armchair,
    title: "Bespoke Designs",
    desc: "Every piece is custom-designed to your exact size and style specifications.",
  },
  {
    icon: Ruler,
    title: "Precision Crafted",
    desc: "Millimeter-accurate measurements ensure every unit fits perfectly.",
  },
  {
    icon: Palette,
    title: "Finish Options",
    desc: "Choose from natural wood, laminate, acrylic, or PU finishes.",
  },
  {
    icon: Sparkles,
    title: "Built to Last",
    desc: "Premium solid teak and marine plywood for maximum durability.",
  },
];

const offerings = [
  "Custom Wardrobes",
  "Modular Beds",
  "TV Units",
  "Study Tables",
  "Dining Sets",
  "Sofa Units",
  "Kitchen Cabinets",
  "Shoe Racks",
];

export default function CustomFurniturePage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-zinc-950">
      {/* Hero Section - Fully Centered */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden py-20">
        <Image
          src="/projects/2.jpeg"
          alt="Bespoke Custom Furniture Design and Craftsmanship in Silchar"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.3] scale-105"
          priority
        />
        <div className="container mx-auto px-6 relative z-10 text-white max-w-4xl pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Artisanal Craftsmanship</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Custom Furniture <br />
            <span className="text-primary italic font-light">Made for You</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Handcrafted furniture that blends style with utility. We create bespoke pieces that fit your space and reflect your lifestyle perfectly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button size="lg" className="rounded-full px-10 h-14 text-base font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20" asChild>
              <Link href="/contact">Design Your Furniture</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The Craft</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Handcrafted Excellence</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            Our furniture is more than just decor — it&apos;s a statement. From space-saving wardrobes to luxury bed frames, we use premium materials to build pieces that last generations.
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
                src="/projects/1.png"
                alt="Premium Handcrafted Furniture Piece by Dream Design Silchar"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">Need Bespoke Furniture?</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">Let our expert designers help you create furniture that perfectly complements your home interior.</p>
          <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold shadow-2xl shadow-primary/30" asChild>
            <Link href="/contact">Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
