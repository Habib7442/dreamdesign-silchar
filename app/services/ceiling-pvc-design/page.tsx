import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, LayoutGrid, Palette, Sparkles } from "lucide-react";

export const metadata = {
  title: "False Ceiling & Interior PVC Design Silchar | Dream Design",
  description: "Transform your interiors with professional false ceiling installation and PVC design in Silchar. ACP board designs, gypsum ceilings, and custom interior solutions.",
};

export default function CeilingPage() {
  const designs = [
    {
      title: "Gypsum False Ceiling",
      description: "Elegant and smooth finishes for living rooms, bedrooms, and commercial spaces.",
      image: "/projects/3.jpeg"
    },
    {
      title: "PVC Wall & Ceiling",
      description: "Durable, moisture-resistant, and aesthetically pleasing PVC paneling solutions.",
      image: "/projects/11.jpeg" // Using what's available
    },
    {
      title: "ACP Board Design",
      description: "Modern architectural finishes with Aluminum Composite Panels for a premium look.",
      image: "/projects/12.jpeg" // Using what's available
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/projects/3.jpeg"
          alt="False Ceiling Design Silchar"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              False Ceiling & <br />
              <span className="text-primary italic">Interior PVC Design</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed">
              Add a touch of elegance to your ceilings and walls. We create stunning interior designs that reflect your style.
            </p>
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">Book Design Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">Transform Your Vertical Spaces</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Interiors are not just about furniture; they are about the ambience created by your walls and ceilings. At Dream Design Silchar, we specialize in high-quality decorative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Sparkles, title: "Modern Aesthetics", desc: "Contemporary designs that wow your guests." },
              { icon: LayoutGrid, title: "Custom Patterns", desc: "Tailored to match your room's layout." },
              { icon: Palette, title: "Color Schemes", desc: "Expert advice on colors and lighting integration." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
                <item.icon className="h-10 w-10 text-primary mb-6" />
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.map((design) => (
              <Card key={design.title} className="group border-none overflow-hidden rounded-2xl bg-white dark:bg-zinc-950 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={design.image}
                    alt={design.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{design.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{design.description}</p>
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                    <CheckCircle2 className="h-4 w-4" /> Professional Finish
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Enhance your home today</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Get a personalized design plan for your false ceiling and wall panels.</p>
          <Button size="lg" variant="secondary" className="rounded-full px-10 font-bold" asChild>
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
