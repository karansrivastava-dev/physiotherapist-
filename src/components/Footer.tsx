import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-brand-secondary text-white pt-24 pb-12 rounded-t-[3rem] mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section: CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/10 pb-16 mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-6">Ready to move freely again?</h2>
            <p className="text-brand-grey text-lg max-w-md">
              Book a session today and start your journey towards a pain-free, active life.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="group flex items-center gap-3 text-lg font-semibold bg-brand-primary hover:bg-white hover:text-brand-secondary px-8 py-4 rounded-full transition-all duration-300"
          >
            Book Your Session
            <span className="w-10 h-10 rounded-full bg-white/20 group-hover:bg-brand-secondary/10 flex items-center justify-center transition-colors">
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <Link href="/" className="flex flex-col mb-8">
              <span className="font-serif font-bold text-3xl text-white leading-none tracking-tight">
                Deepti Mishra<span className="text-brand-primary">.</span>
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-grey mt-2">Physiotherapist</span>
            </Link>
            <p className="text-brand-grey leading-relaxed mb-8 max-w-sm">
              Helping you move better and live pain-free with personalized, evidence-based physiotherapy care in a premium environment.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-brand-grey">
              <li><Link href="/blog/back-and-neck-pain" className="hover:text-white transition-colors">Back Pain</Link></li>
              <li><Link href="/blog/sports-injury-rehab" className="hover:text-white transition-colors">Sports Injury</Link></li>
              <li><Link href="/blog/womens-health-physiotherapy" className="hover:text-white transition-colors">Women's Health</Link></li>
              <li><Link href="/blog/post-surgery-rehab" className="hover:text-white transition-colors">Post Surgery</Link></li>
              <li><Link href="/blog/home-visit-services" className="hover:text-white transition-colors">Home Visit</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-brand-grey">
              <li><Link href="/about" className="hover:text-white transition-colors">About Deepti</Link></li>
              <li><Link href="/conditions" className="hover:text-white transition-colors">Conditions We Treat</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Health Blog</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6">Visit Us</h4>
            <ul className="space-y-6 text-brand-grey">
              <li className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-brand-primary shrink-0" />
                <span>Rajajipuram,<br/>Lucknow, UP 226017</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <a href="tel:+918009883366" className="hover:text-white transition-colors">+91 80098 83366</a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                <a href="mailto:hello@deeptimishra.com" className="hover:text-white transition-colors">hello@deeptimishra.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-grey">
          <p>&copy; {new Date().getFullYear()} Deepti Mishra Physiotherapy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
