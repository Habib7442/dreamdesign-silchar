import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Hammer, Shield, Square } from "lucide-react";

export const metadata = {
  title: "Aluminum Windows & Steel Railing Fabrication Silchar | Dream Design",
  description: "Professional metal fabrication services in Silchar. Steel railings, aluminum section windows, doors, and iron window grills. Durable and precise craftsmanship.",
};

export default function FabricationPage() {
  const items = [
    {
      title: "Aluminum Windows & Doors",
      description: "High-quality aluminum section windows and doors with smooth sliding mechanisms.",
      icon: Square
    },
    {
      title: "Steel Railing",
      description: "Custom-designed stainless steel railings for balconies, stairs, and terraces.",
      icon: Shield
    },
    {
      title: "Iron Window Grills",
      description: "Durable and secure iron grills designed to match your home's aesthetics.",
      icon: Hammer
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/projects/5.jpeg"
          alt="Fabrication Services Silchar"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Aluminum & Metal <br />
              <span className="text-primary italic">Fabrication Services</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed">
              Durable, secure, and aesthetically pleasing metal work. We specialize in precision fabrication for residential and commercial properties in Silchar.
            </p>
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">Request an Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item) => (
              <Card key={item.title} className="group border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                    <CheckCircle2 className="h-4 w-4" /> Precision Guaranteed
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Built for Strength and Style</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our fabrication team focuses on both the structural integrity and the visual finish of every piece. Whether it&apos;s a sliding window or a decorative railing, we use the best quality aluminum and steel.
              </p>
              <div className="space-y-4">
                {[
                  "Premium Grade Stainless Steel (SS 304/316)",
                  "Branded Aluminum Sections",
                  "Expert Welding & Finishing",
                  "Custom Design Consultations",
                  "Secure Installation Services"
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/projects/5.png"
                  alt="Metal Fabrication Quality"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Need custom metal work?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Get high-quality fabrication services tailored to your specific dimensions.</p>
          <Button size="lg" variant="secondary" className="rounded-full px-10 font-bold" asChild>
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
