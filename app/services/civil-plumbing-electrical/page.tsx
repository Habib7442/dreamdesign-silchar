import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Droplets, Zap, Hammer, Shield } from "lucide-react";

export const metadata = {
  title: "Civil, Plumbing & Electrical Contractors Silchar | Dream Design",
  description: "Expert civil contractors in Silchar. Professional plumbing, electrical work, and specialized waterproofing for roofs and walls. Durable and reliable solutions.",
};

export default function CivilPage() {
  const categories = [
    {
      title: "Expert Waterproofing",
      description: "Advanced solutions for roof, wall, and basement waterproofing to protect your structure.",
      icon: Droplets,
      items: ["Roof Waterproofing", "Wall Damp Treatment", "Basement Protection", "Leakage Repair"]
    },
    {
      title: "Plumbing & Electrical",
      description: "Safe and durable plumbing and electrical installations by certified professionals.",
      icon: Zap,
      items: ["New Installations", "Maintenance & Repair", "Safe Wiring", "Piping & Fittings"]
    },
    {
      title: "Tiles, Granite & Marble",
      description: "High-precision fitting for tiles, granite, and marble to enhance your floor and wall aesthetics.",
      icon: Hammer,
      items: ["Floor Tiling", "Wall Tiling", "Granite Platforms", "Marble Polishing"]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/projects/2.jpeg"
          alt="Civil Contractors Silchar"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Civil, Plumbing & <br />
              <span className="text-primary italic">Electrical Work</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed">
              The foundation of a great home is its structural integrity. We provide reliable civil solutions backed by years of expertise in Silchar.
            </p>
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Card key={cat.title} className="border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <cat.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">{cat.title}</h3>
                  <p className="text-muted-foreground mb-8">{cat.description}</p>
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm font-medium">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/projects/8.jpeg"
                  alt="Civil Work Quality"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Why Choose Our Civil Services?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Civil work requires precision and deep technical knowledge. At Dream Design Silchar, we don&apos;t just build; we ensure durability. Our waterproofing techniques are specifically designed for the climatic conditions of Silchar.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Skilled Labor", desc: "Personable and highly trained workforce." },
                  { title: "Quality Materials", desc: "Best-in-class cement, pipes, and wires." },
                  { title: "Fair Pricing", desc: "No hidden costs, transparent billing." },
                  { title: "Timely Delivery", desc: "Respect for project timelines." }
                ].map((point) => (
                  <div key={point.title} className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">{point.title}</h4>
                      <p className="text-xs text-muted-foreground">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Have a construction requirement?</h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">From minor repairs to major renovations, we are here to help you in Silchar.</p>
          <Button size="lg" className="rounded-full px-10 font-bold" asChild>
            <Link href="/contact">Talk to Mr. Dilip Das</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
