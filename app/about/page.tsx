import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "About Us | Dream Design Silchar - Established 2007",
  description: "Learn about the history and evolution of Dream Design Silchar. Led by Mr. Dilip Das, we have been providing trusted home and interior solutions since 2007.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-black">
      {/* Premium Header */}
      <section className="pt-40 pb-24 border-b border-zinc-100 dark:border-zinc-900">
        <div className="container mx-auto px-6 md:px-12">
          <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-6">About Us</p>
          <h1 className="text-5xl md:text-8xl font-heading font-medium leading-none mb-8">
            Building Trust <br />
            <span className="italic font-light">Since 2007</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
            Dream Design Silchar is an interior design and construction studio dedicated to creating refined residential and commercial spaces for over 17 years.
          </p>
        </div>
      </section>

      {/* Founder Section - Minimalist */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
              <Image
                src="/owner.jpeg"
                alt="Mr. Dilip Das - Founder"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-3xl font-heading font-medium mb-1">Dilip Das</p>
                <p className="uppercase tracking-[0.2em] text-xs font-bold opacity-70">Founder & CEO</p>
              </div>
            </div>
            <div>
              <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-8">The Journey</p>
              <h2 className="text-4xl md:text-6xl font-heading font-medium mb-10 leading-tight">
                Evolution of <br />
                <span className="italic font-light text-primary">Excellence</span>
              </h2>
              <div className="space-y-8 text-lg text-zinc-500 leading-relaxed max-w-xl">
                <p>
                  Dream Design Silchar was founded in 2007 with a vision to provide reliable and professional home renovation services to the residents of Silchar. Under the leadership of Mr. Dilip Das, the company has grown into a full-service interior and construction firm.
                </p>
                <p>
                  Our journey has been defined by a commitment to professional integrity, ethical values, and excellence. We have consistently integrated modern technology with our years of experience to deliver results that exceed client expectations.
                </p>
                <p>
                  Today, we stand as a versatile solution for homeowners, handling everything from complex structural repairs to premium interior finishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Grid style like Loxora achievements */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { id: "01", title: "Our Mission", desc: "To provide high-quality, durable, and aesthetic home solutions while maintaining fair pricing and professional transparency." },
              { id: "02", title: "Our Vision", desc: "To be the most trusted name in Silchar for end-to-end home transformations, known for our skilled team and personable service." },
              { id: "03", title: "Our Values", desc: "Integrity, Quality, and Client Trust. We believe in building long-term relationships through our workmanship." }
            ].map((value) => (
              <div key={value.id} className="group">
                <span className="text-4xl font-heading font-light text-zinc-200 dark:text-zinc-800 group-hover:text-primary transition-colors block mb-8">{value.id}</span>
                <h3 className="text-2xl font-heading font-medium mb-4">{value.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-7xl font-heading font-medium mb-12 italic">Let&apos;s build your <br /> dream space together.</h2>
          <Link 
            href="/contact" 
            className="group inline-flex items-center gap-4 text-2xl font-medium hover:text-primary transition-all pb-2 border-b-2 border-zinc-200 dark:border-zinc-800 hover:border-primary"
          >
            Work with Silchar&apos;s Best <ArrowUpRight className="h-8 w-8" />
          </Link>
        </div>
      </section>
    </div>
  );
}
