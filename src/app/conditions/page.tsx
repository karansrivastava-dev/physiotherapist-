import { FadeIn } from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const conditions = [
  "Sciatica & Slip Disc",
  "Neck & Cervical Pain",
  "Frozen Shoulder",
  "Osteoarthritis",
  "Sports Injuries (ACL/PCL)",
  "Post-Fracture Stiffness",
  "Pelvic Floor Dysfunction",
  "Pregnancy-Related Pain",
  "Tennis & Golfer's Elbow",
  "Plantar Fasciitis",
  "Spondylitis",
  "Chronic Back Pain"
];

export default function Conditions() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-brand-bg">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20">
        <FadeIn>
          <p className="text-brand-primary font-bold text-xs tracking-widest uppercase mb-4">Conditions Treated</p>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-brand-secondary leading-tight max-w-4xl mx-auto">
            Specialized care for complex musculoskeletal conditions.
          </h1>
        </FadeIn>
      </section>
      
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition, idx) => (
            <FadeIn key={idx} delay={(idx % 3) * 0.1}>
              <Link href="/contact" className="group flex items-center justify-between bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-primary/30 transition-all duration-300">
                <span className="font-semibold text-brand-secondary text-lg group-hover:text-brand-primary transition-colors">{condition}</span>
                <div className="w-10 h-10 rounded-full bg-brand-softpink flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4} className="mt-20">
          <div className="bg-brand-secondary rounded-[3rem] p-12 lg:p-16 text-center text-white relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-white">Don't see your specific condition?</h2>
               <p className="text-brand-grey text-lg max-w-2xl mx-auto mb-10">
                 We treat a wide variety of neuromuscular and skeletal issues. Contact us directly to discuss your specific symptoms and find out how we can help.
               </p>
               <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-white hover:text-brand-secondary text-white px-8 py-4 rounded-full font-bold transition-colors shadow-lg">
                 Contact Dr. Deepti
               </Link>
             </div>
             {/* Decorative */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary rounded-full blur-[100px] opacity-20"></div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
