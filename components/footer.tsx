"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isContact = pathname === "/contact";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t dark:border-zinc-900 pt-32 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        {!isContact && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
            <div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium leading-[1] mb-12">
                Ready to Start <br />
                <span className="italic font-light">Your Project?</span>
              </h2>
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-4 text-2xl font-medium hover:text-primary transition-all pb-2 border-b-2 border-zinc-200 dark:border-zinc-800 hover:border-primary"
              >
                Get in Touch <ArrowUpRight className="h-8 w-8 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-8">Navigation</p>
                <ul className="space-y-4">
                  {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                    <li key={item}>
                      <Link 
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                        className="text-lg text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-8">Contact</p>
                <ul className="space-y-6">
                  <li className="flex flex-col">
                    <span className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Email</span>
                    <Link href="mailto:dilipdassilchar@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                      dilipdassilchar@gmail.com
                    </Link>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Phone</span>
                    <Link href="tel:+919854382525" className="text-lg font-medium hover:text-primary transition-colors">
                      +91-9854382525
                    </Link>
                    <Link href="tel:+919395841984" className="text-lg font-medium hover:text-primary transition-colors">
                      +91-9395841984
                    </Link>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Address</span>
                    <span className="text-lg font-medium">
                      Meherpur, Silchar, Assam 788015
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {isContact && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
             <div>
                <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-6">Explore</p>
                <ul className="flex flex-wrap gap-x-8 gap-y-4">
                   {["Home", "About", "Services", "Projects"].map((item) => (
                     <li key={item}>
                       <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-lg hover:text-primary transition-colors font-medium">
                         {item}
                       </Link>
                     </li>
                   ))}
                </ul>
             </div>
             <div className="md:col-span-2 flex flex-col md:flex-row md:justify-end gap-12">
                <div>
                   <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-4">Direct Email</p>
                   <p className="text-xl font-medium">dilipdassilchar@gmail.com</p>
                </div>
                <div>
                   <p className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-400 mb-4">Direct Call</p>
                   <p className="text-xl font-medium">+91-9854382525</p>
                </div>
             </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-100 dark:border-zinc-900 gap-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="Dream Design Silchar" 
                width={32} 
                height={32} 
                style={{ width: 'auto', height: 'auto' }}
                className="rounded-sm" 
              />
              <span className="font-heading font-bold text-xl">Dream Design</span>
            </Link>
          </div>
          
          <div className="flex space-x-8 items-center">
            <Link href="https://www.facebook.com/dilip.das.908132" target="_blank" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/social-icons/facebook.png" 
                alt="Facebook" 
                width={20} 
                height={20} 
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
            <Link href="#" target="_blank" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/social-icons/instagram.png" 
                alt="Instagram" 
                width={20} 
                height={20} 
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
            <Link href="https://wa.me/919854382525" target="_blank" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/social-icons/whatsapp.png" 
                alt="WhatsApp" 
                width={20} 
                height={20} 
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
          </div>

          <p className="text-xs text-zinc-400">
            © {currentYear} Dream Design Silchar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
