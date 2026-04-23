import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ChevronRight, Utensils, Layout, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Modular Kitchen & Wardrobe Design Silchar | Dream Design",
  description: "Silchar's leading modular kitchen and wardrobe designers. Custom designs, space-efficient solutions, and premium finishes. Book a free consultation.",
};

export default function ModularKitchenPage() {
  const features = [
    {
      title: "Customized Layouts",
      description: "L-shaped, U-shaped, Parallel, or Island kitchens designed for your space.",
      icon: Layout
    },
    {
      title: "Premium Materials",
      description: "High-quality BWR/BWP plywood with specialized finishes and hardware.",
      icon: ShieldCheck
    },
    {
      title: "Space Efficiency",
      description: "Smart storage solutions, pull-outs, and corner units to maximize utility.",
      icon: Utensils
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/projects/1.jpeg"
          alt="Modular Kitchen Design Silchar"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Modular Kitchen & <br />
              <span className="text-primary italic">Wardrobe Design</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed">
              Create the heart of your home with Silchar&apos;s most trusted modular kitchen experts. We blend aesthetics with functionality.
            </p>
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">Get a Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Elevate Your Living Space</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Dream Design Silchar, we understand that a kitchen is more than just a place to cook. It&apos;s where memories are made. Our modular kitchen solutions are designed to be beautiful, durable, and highly functional.
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Whether you are looking for a sleek modern kitchen or a classic wardrobe design, our team led by Mr. Dilip Das ensures every inch of your space is utilized effectively using premium quality products.
              </p>

              <div className="space-y-4">
                {[
                  "L-Shaped & U-Shaped Kitchens",
                  "Parallel & Straight Kitchens",
                  "Custom Wardrobes & Lofts",
                  "Modern Beds & TV Units",
                  "Premium Laminates & Acrylic Finishes",
                  "High-End Hardware & Fittings"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="border-none bg-zinc-50 dark:bg-zinc-900 rounded-2xl overflow-hidden group">
                  <CardContent className="p-8 flex gap-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">Recent Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Take a look at some of our modular kitchen and wardrobe installations across Silchar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["/projects/1.jpeg", "/projects/6.jpeg", "/projects/7.jpeg"].map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`Modular Project ${i+1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to redesign your kitchen?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Schedule a free site visit and get a detailed quote for your project.</p>
          <Button size="lg" variant="secondary" className="rounded-full px-10 font-bold" asChild>
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
