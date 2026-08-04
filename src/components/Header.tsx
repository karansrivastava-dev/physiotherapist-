"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Conditions", href: "/conditions" },
  { name: "Home Visit", href: "/home-visit" },
  { name: "About", href: "/about" },
  { name: "Health Blog", href: "/blog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex flex-col">
            <span className="font-serif font-bold text-2xl text-brand-secondary leading-none tracking-tight">
              Deepti Mishra<span className="text-brand-primary">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-grey mt-1 font-medium">Physiotherapist</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-secondary hover:text-brand-primary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8 items-center bg-white/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/40 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`text-sm font-medium transition-all duration-300 ${isActive ? 'text-brand-primary font-semibold' : 'text-brand-grey hover:text-brand-secondary'}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <Link 
            href="/contact" 
            className="group flex items-center gap-2 text-sm font-semibold leading-6 text-white bg-brand-secondary hover:bg-brand-primary px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_8px_16px_-6px_rgba(15,23,42,0.3)] hover:shadow-[0_8px_16px_-6px_rgba(245,108,141,0.4)]"
          >
            Book Session
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-brand-secondary/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brand-bg px-6 py-6 sm:max-w-sm shadow-2xl">
            <div className="flex items-center justify-between border-b border-brand-grey/10 pb-5">
              <Link href="/" className="-m-1.5 p-1.5 flex flex-col" onClick={() => setMobileMenuOpen(false)}>
                <span className="font-serif font-bold text-2xl text-brand-secondary">
                  Deepti Mishra<span className="text-brand-primary">.</span>
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-full p-2.5 text-brand-secondary bg-white shadow-sm border border-brand-grey/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6">
                <div className="space-y-1 py-6">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${isActive ? 'text-brand-primary bg-brand-softpink' : 'text-brand-secondary hover:bg-white'}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
                <div className="py-8 space-y-4 border-t border-brand-grey/10">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full rounded-full bg-brand-primary text-white px-3 py-4 text-base font-semibold shadow-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Appointment
                  </Link>
                  <a href="tel:+919876543210" className="flex items-center justify-center w-full rounded-full bg-white border border-brand-grey/20 px-3 py-4 text-base font-semibold text-brand-secondary gap-2 shadow-sm">
                    <Phone className="w-5 h-5" /> +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
