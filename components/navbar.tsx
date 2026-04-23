"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Interior Design",
    href: "/services/interior-design",
    description: "Warm, inviting homes that reflect your personality.",
  },
  {
    title: "Construction Work",
    href: "/services/construction",
    description: "Build your dream home from the ground up.",
  },
  {
    title: "Waterproofing",
    href: "/services/waterproofing",
    description: "Protect your roofs and walls with a perfect finish.",
  },
  {
    title: "Painting",
    href: "/services/painting",
    description: "Interior and exterior painting services.",
  },
  {
    title: "Custom Furniture",
    href: "/services/custom-furniture",
    description: "Bespoke furniture tailored to your space.",
  },
];


export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const servicesRef = React.useRef<HTMLDivElement>(null);
  
  const isHome = pathname === "/";
  const isContact = pathname === "/contact";
  const isService = pathname?.startsWith("/services");

  // Close services dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = cn(
    "text-sm font-bold transition-all duration-300 hover:text-primary",
    (!scrolled && (isHome || isService)) 
      ? "text-white" 
      : "text-zinc-900 dark:text-zinc-100"
  );

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 py-4",
        scrolled 
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b py-3 shadow-md" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative h-12 w-12 rounded-xl overflow-hidden group bg-white shadow-md flex items-center justify-center p-1 border border-zinc-100">
            <Image 
              src="/logo.png" 
              alt="Dream Design Silchar Official Logo" 
              width={48} 
              height={48} 
              style={{ height: '48px', width: 'auto' }}
              className="object-contain group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
            <div className={cn(
              "flex flex-col leading-none transition-colors",
              (!scrolled && (isHome || isService)) ? "text-white" : "text-zinc-900 dark:text-white"
            )}>
              <span className="font-heading font-bold text-2xl tracking-tight">Dream Design</span>
              <span className=" italic text-sm text-primary tracking-[0.2em] uppercase font-bold">Silchar</span>
            </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-10">
              <Link href="/" className={navLinkClass}>
                Home
              </Link>
              <Link href="/about" className={navLinkClass}>
                About
              </Link>
              
              <div className="relative" ref={servicesRef}>
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={cn(
                    "text-sm font-bold transition-all duration-300 flex items-center gap-1 hover:text-primary",
                    (!scrolled && (isHome || isService)) ? "text-white" : "text-zinc-900 dark:text-zinc-100"
                  )}
                >
                  Services
                  <svg className={cn("h-3 w-3 transition-transform duration-300", servicesOpen && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>

                {servicesOpen && (
                  <div className="absolute top-full right-0 mt-3 z-50 w-[300px] bg-[#0a192f] rounded-2xl shadow-2xl border border-white/10 py-3 animate-in fade-in-0 zoom-in-95 duration-200">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="flex items-start gap-3 px-5 py-3 hover:bg-white/5 transition-colors group"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary/50 group-hover:bg-primary shrink-0 transition-colors" />
                        <div>
                          <p className="text-white font-bold text-sm leading-tight">{service.title}</p>
                          <p className="text-zinc-400 text-xs mt-1 leading-snug">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/portfolio" className={navLinkClass}>
                Projects
              </Link>
            </nav>

            <Button 
              asChild 
              className={cn(
                "rounded-full px-8 h-12 transition-all duration-300 font-bold shadow-lg shadow-primary/20",
                (!scrolled && (isHome || isService))
                  ? "bg-white text-black hover:bg-white/90" 
                  : "bg-primary text-white hover:bg-primary/90"
              )}
            >
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(true)}
              className={cn((!scrolled && (isHome || isService)) ? "text-white hover:bg-white/10" : "text-black dark:text-white hover:bg-black/5")}
            >
              <Menu className="h-7 w-7" />
            </Button>
          </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[999] bg-white dark:bg-zinc-950 flex flex-col p-8 md:hidden shadow-2xl"
          >
            <div className="flex justify-between items-center mb-16 border-b border-zinc-100 dark:border-zinc-900 pb-8">
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-2xl tracking-tight">Dream Design</span>
                <span className="italic text-sm text-primary tracking-[0.2em] uppercase font-bold">Silchar</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-8 w-8" />
              </Button>
            </div>

            <nav className="flex flex-col gap-6 overflow-y-auto pb-10">
              <Link href="/" className="text-4xl font-heading font-bold hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="text-4xl font-heading font-bold hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>About</Link>
              
              {/* Mobile Services Toggle */}
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-4xl font-heading font-bold hover:text-primary transition-colors flex items-center justify-between"
                >
                  Services
                  <svg className={cn("h-6 w-6 transition-transform", servicesOpen && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col gap-4 pl-4 border-l-2 border-primary/20 overflow-hidden"
                    >
                      {services.map((service) => (
                        <Link 
                          key={service.href} 
                          href={service.href} 
                          className="text-xl font-medium text-zinc-500 dark:text-zinc-400 hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/portfolio" className="text-4xl font-heading font-bold hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link href="/contact" className="text-4xl font-heading font-bold hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
            </nav>
            
            <div className="mt-auto pb-6 border-t border-zinc-100 dark:border-zinc-900 pt-8">
               <p className="text-zinc-400 uppercase tracking-widest text-xs mb-4">Get in touch</p>
               <p className="text-xl font-bold text-primary mb-1">+91 9854382525</p>
               <p className="text-sm font-medium text-zinc-500">dilipdassilchar@gmail.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-primary",
            className
          )}
          {...props}
        >
          <div className="text-base font-bold leading-none mb-1">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
