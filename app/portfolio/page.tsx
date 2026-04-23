import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Portfolio | Dream Design Silchar - Our Completed Projects",
  description: "Explore our portfolio of interior design and home renovation projects in Silchar. Modular kitchens, living rooms, civil work, and more.",
};

const projects = [
  { id: 1, title: "Modern Modular Kitchen", category: "Kitchen", img: "/projects/1.jpeg" },
  { id: 2, title: "Structural Renovation", category: "Civil", img: "/projects/2.jpeg" },
  { id: 3, title: "Gypsum False Ceiling", category: "Interior", img: "/projects/3.jpeg" },
  { id: 4, title: "Exterior Painting", category: "Painting", img: "/projects/4.jpeg" },
  { id: 5, title: "Steel Railing Installation", category: "Fabrication", img: "/projects/5.jpeg" },
  { id: 6, title: "Premium Kitchen Cabinetry", category: "Kitchen", img: "/projects/6.jpeg" },
  { id: 7, title: "Custom Wardrobe Design", category: "Interior", img: "/projects/7.jpeg" },
  { id: 8, title: "Waterproofing Project", category: "Civil", img: "/projects/8.jpeg" },
  { id: 9, title: "Living Room Transformation", category: "Interior", img: "/projects/4.png" },
  { id: 10, title: "Sliding Window Work", category: "Fabrication", img: "/projects/2.png" },
  { id: 11, title: "PVC Wall Paneling", category: "Interior", img: "/projects/3.png" },
  { id: 12, title: "Apartment Renovation", category: "Full Home", img: "/projects/5.png" },
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-black">
      {/* Premium Header */}
      <section className="pt-40 pb-24 border-b border-zinc-100 dark:border-zinc-900">
        <div className="container mx-auto px-6 md:px-12">
          <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-6">Our Work</p>
          <h1 className="text-5xl md:text-8xl font-heading font-medium leading-none mb-8">
            Selected <br />
            <span className="italic font-light">Masterpieces</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
            A showcase of our dedication to quality and craftsmanship across Silchar. Each project is a testament to our commitment to modern living.
          </p>
        </div>
      </section>

      {/* Grid Layout */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] mb-8">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge variant="secondary" className="bg-white/80 backdrop-blur text-black border-none px-4 py-1 rounded-full uppercase text-[10px] tracking-widest font-bold">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                   <div>
                      <h3 className="text-2xl font-heading font-medium mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-zinc-400 text-sm tracking-widest uppercase">Silchar, Assam</p>
                   </div>
                   <div className="h-12 w-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                      <ArrowUpRight className="h-5 w-5" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Matching Loxora Style */}
      <section className="py-40">
        <div className="container mx-auto px-6 md:px-12">
           <div className="bg-zinc-950 rounded-[3rem] p-12 md:p-32 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/projects/1.jpeg')] bg-cover bg-center opacity-20" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-heading font-medium text-white mb-12">Inspired by <br /><span className="italic">our work?</span></h2>
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
