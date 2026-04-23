import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Paintbrush, ShieldCheck, Sun, Home, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "House Painting Services in Silchar | Interior & Exterior Painting | Dream Design",
  description: "Professional interior and exterior painting services in Silchar. Premium finishes, texture painting, and expert color consultation.",
  keywords: "house painting silchar, interior painting silchar, exterior painting assam, texture painting silchar, wall painting contractor silchar",
};

const features = [
  {
    icon: Paintbrush,
    title: "Skilled Painters",
    desc: "Highly skilled professionals with years of experience in luxury finishes.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "We use top-tier products from Asian Paints, Berger, and Nerolac.",
  },
  {
    icon: CheckCircle2,
    title: "Hassle-Free",
    desc: "Complete furniture masking and thorough post-work cleanup.",
  },
  {
    icon: Sun,
    title: "Weather-Proof",
    desc: "Exterior coatings designed to withstand extreme humidity and rain.",
  },
];

const offerings = [
  "Emulsion Finishes",
  "Texture Painting",
  "Stencil Designs",
  "Wood Polishing",
  "Metal Painting",
  "Weather Coatings",
  "Crack Filling",
  "Wallpaper",
];

export default function PaintingPage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-zinc-950">
      {/* Hero Section - Fully Centered */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden py-20">
        <Image
          src="/projects/4.jpeg"
          alt="Professional Home Painting and Texture Services in Silchar"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.3] scale-105"
          priority
        />
        <div className="container mx-auto px-6 relative z-10 text-white max-w-4xl pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Premium Painting Solutions</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Expert <br />
            <span className="text-primary italic font-light">Painting Services</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Give your home a fresh new identity with our professional painting services. Vibrant colors, flawless finishes, and lasting durability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button size="lg" className="rounded-full px-10 h-14 text-base font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20" asChild>
              <Link href="/contact">Request Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Flawless Finish Guaranteed</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            From luxury interior emulsions to heavy-duty exterior weather protection, we provide comprehensive painting solutions tailored to your needs.
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
                src="/projects/4.png"
                alt="Expert Interior Wall Painting and Finishing by Dream Design Silchar"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Why Us</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Painting Made Hassle-Free</h2>
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

      {/* CTA */}
      <section className="py-24 bg-zinc-950 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">Ready for a Fresh Look?</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">Get a free color consultation and quote today. Transform your home with Dream Design.</p>
          <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold shadow-2xl shadow-primary/30" asChild>
            <Link href="/contact">Request Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
