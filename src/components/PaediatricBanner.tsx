import Image from "next/image";
import Link from "next/link";
import { Baby, ArrowRight, Star, Circle, Brain, Activity, Infinity, HeartPulse, Dumbbell } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function PaediatricBanner({ showExploreButton = true }: { showExploreButton?: boolean }) {
  return (
    <FadeIn>
      <div className="relative w-full max-w-7xl mx-auto rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-[#fffafb] border border-brand-softpink shadow-sm grid grid-cols-1 md:grid-cols-2 my-12">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-1/2 opacity-20 text-brand-primary">
          <Star className="w-6 h-6" />
        </div>
        <div className="absolute top-16 left-[55%] opacity-10 text-brand-primary">
          <Circle className="w-3 h-3" />
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-10 text-brand-primary">
          {/* Using a simple placeholder for the bear since lucide doesn't have a teddy bear */}
          <Baby className="w-24 h-24" />
        </div>

        {/* Content Side */}
        <div className="p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-brand-softpink rounded-2xl flex items-center justify-center text-brand-primary">
              <Baby className="w-6 h-6" />
            </div>
            <p className="text-brand-primary font-bold text-xs tracking-widest uppercase">
              Specialized Child Care
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-secondary leading-tight mb-6">
            Paediatric <br /> Rehabilitation
          </h2>
          
          <p className="text-brand-grey text-lg max-w-md leading-relaxed mb-8">
            Supporting children's physical development through personalized therapy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-8">
            {[
              { label: "Developmental Delay", icon: Brain },
              { label: "Coordination Issues", icon: Baby },
              { label: "Cerebral Palsy", icon: Activity },
              { label: "Balance & Strength", icon: HeartPulse },
              { label: "Autism Support", icon: Infinity },
              { label: "Sports Injury (Kids)", icon: Dumbbell },
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-softpink flex items-center justify-center text-[#f472b6] shrink-0">
                  <point.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-brand-secondary">{point.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {showExploreButton && (
              <Link href="/services" className="inline-flex items-center gap-2 bg-[#f472b6] hover:bg-brand-primary text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md">
                Explore Service <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-brand-primary text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md">
              Book Session <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative min-h-[400px] md:min-h-[500px] w-full h-full bg-brand-softpink/20 flex items-center justify-center p-6 lg:p-10">
          <style>{`
            @keyframes floatUp {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
            }
            @keyframes floatDown {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(12px); }
            }
            .animate-float-up { animation: floatUp 6s ease-in-out infinite; }
            .animate-float-down { animation: floatDown 7s ease-in-out infinite; }
          `}</style>

          {/* The curved separator */}
          <div className="hidden md:block absolute -top-[10%] -bottom-[10%] -left-16 w-32 bg-[#fffafb] rounded-[100%] z-10 border-r border-dashed border-brand-softpink/50" />
          
          <div className="relative z-20 w-full max-w-[450px] lg:max-w-[550px] aspect-square mx-auto md:mr-4 lg:mr-12 my-8 md:my-0 flex-shrink-0">
            {/* Image 1 - Top Left */}
            <div tabIndex={0} className="absolute top-[2%] left-[2%] w-[55%] aspect-[4/3] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform -rotate-6 hover:rotate-0 focus:rotate-0 hover:scale-110 focus:scale-110 hover:z-50 focus:z-50 focus:outline-none transition-all duration-500 z-10 animate-float-up cursor-pointer">
               <Image src="/images/Paediatric-Rehabilitation1.jpg" alt="Child Therapy Session" fill className="object-cover" />
               <div className="absolute inset-0 bg-brand-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Image 2 - Top Right */}
            <div tabIndex={0} className="absolute top-[12%] right-[0%] w-[50%] aspect-[3/2] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 focus:rotate-0 hover:scale-110 focus:scale-110 hover:z-50 focus:z-50 focus:outline-none transition-all duration-500 z-20 animate-float-down cursor-pointer">
               <Image src="/images/Paediatric-Rehabilitation2.jpg" alt="Child Therapy Activity" fill className="object-cover" />
               <div className="absolute inset-0 bg-brand-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Image 3 - Bottom Left */}
            <div tabIndex={0} className="absolute bottom-[12%] left-[5%] w-[48%] aspect-[3/2] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 focus:rotate-0 hover:scale-110 focus:scale-110 hover:z-50 focus:z-50 focus:outline-none transition-all duration-500 z-30 animate-float-down cursor-pointer">
               <Image src="/images/Paediatric-Rehabilitation3.jpg" alt="Pediatric Physio Care" fill className="object-cover" />
               <div className="absolute inset-0 bg-brand-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Image 4 - Bottom Right */}
            <div tabIndex={0} className="absolute bottom-[2%] right-[5%] w-[60%] aspect-[4/3] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-6 hover:rotate-0 focus:rotate-0 hover:scale-110 focus:scale-110 hover:z-50 focus:z-50 focus:outline-none transition-all duration-500 z-40 animate-float-up cursor-pointer">
               <Image src="/images/Paediatric-Rehabilitation4.jpg" alt="Happy Child Recovering" fill className="object-cover" />
               <div className="absolute inset-0 bg-brand-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
