import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ArrowRight, Activity } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-brand-bg items-center justify-center text-center px-6">
      <FadeIn>
        <div className="w-24 h-24 bg-brand-softpink rounded-3xl flex items-center justify-center text-brand-primary mx-auto mb-8 animate-pulse">
          <Activity className="w-12 h-12" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-secondary mb-4">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-secondary mb-6">
          Oops! Looks like this page pulled a muscle.
        </h2>
        
        <p className="text-brand-grey max-w-lg mx-auto mb-10 text-lg leading-relaxed">
          We can't seem to find the page you're looking for. It might have been moved or no longer exists, but we can definitely help you find your way back to health!
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-primary text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg text-lg mx-auto"
        >
          Return to Homepage
          <ArrowRight className="w-5 h-5" />
        </Link>
      </FadeIn>
    </div>
  );
}
