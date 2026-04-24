import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Portfolio | Dream Design Silchar - Our Completed Projects",
  description: "Explore our portfolio of interior design and home renovation projects in Silchar. Modular kitchens, living rooms, civil work, and more.",
};

// List of all project images found in public/projects
const projectImages = [
  "1.jpeg", "2.png", "3.jpeg", "4.jpeg", "4.png", "5.jpeg", "5.png", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg",
  "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg",
  "20.jpeg", "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg", "25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg",
  "30.png", "31.jpeg"
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-black">
      {/* Premium Header */}
      <section className="pt-40 pb-16 border-b border-zinc-100 dark:border-zinc-900">
        <div className="container mx-auto px-6 md:px-12">
          <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-6">Our Work</p>
          <h1 className="text-5xl md:text-8xl font-heading font-medium leading-none mb-8">
            Visual <br />
            <span className="italic font-light">Excellence</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
            A pure visual journey through our finest interior and construction projects across Silchar.
          </p>
        </div>
      </section>

      {/* Masonry Grid Layout - Pure Visuals */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {projectImages.map((imgName, index) => (
              <div 
                key={index} 
                className="break-inside-avoid group relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative w-full h-auto">
                   {/* We use a relative container with responsive height or naturally scaled images */}
                   <Image
                    src={`/projects/${imgName}`}
                    alt={`Dream Design Project ${index + 1}`}
                    width={800}
                    height={1000}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-40 pt-10">
        <div className="container mx-auto px-6 md:px-12">
           <div className="bg-zinc-950 rounded-[3rem] p-12 md:p-32 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/projects/1.jpeg')] bg-cover bg-center opacity-10" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-heading font-medium text-white mb-12">Ready to create <br /><span className="italic">your masterpiece?</span></h2>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-4 text-2xl font-medium text-white hover:text-primary transition-all pb-2 border-b-2 border-white/20 hover:border-primary"
                >
                  Start Your Project <ArrowUpRight className="h-8 w-8" />
                </a>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
