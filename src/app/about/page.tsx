import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { Award, Clock, GraduationCap, Users } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-brand-primary font-bold text-xs tracking-widest uppercase mb-4">Meet Your Physiotherapist</p>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-brand-secondary leading-tight max-w-4xl">
              Dedicated to helping you live a pain-free life.
            </h1>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-100 shadow-2xl">
              <Image src="/images/doctor.png" alt="Dr. Deepti Mishra" fill className="object-cover" priority />
            </div>
          </FadeIn>
          
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-secondary leading-tight">
                Hi, I'm Dr. Deepti Mishra.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="space-y-6 text-lg text-brand-grey leading-relaxed">
                <p>
                  With over 15 years of clinical experience, my mission has always been to empower my patients to move better and live healthier. I believe that pain shouldn't hold you back from doing what you love.
                </p>
                <p>
                  My approach is deeply personalized. I take the time to understand not just your symptoms, but your lifestyle, your goals, and the root cause of your discomfort. We don't just treat the pain; we build strength and resilience.
                </p>
                <p>
                  As a female practitioner, I am also deeply passionate about Women's Health, providing a safe, comfortable, and empowering environment for prenatal, postnatal, and pelvic floor rehabilitation.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-brand-softpink flex items-center justify-center text-brand-primary shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary text-lg">BPT, MPT</h4>
                    <p className="text-sm text-brand-grey">Advanced Qualifications</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-brand-softpink flex items-center justify-center text-brand-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary text-lg">15+ Years</h4>
                    <p className="text-sm text-brand-grey">Clinical Experience</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-brand-softpink flex items-center justify-center text-brand-primary shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary text-lg">5,000+</h4>
                    <p className="text-sm text-brand-grey">Happy Patients</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-brand-softpink flex items-center justify-center text-brand-primary shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary text-lg">Certified</h4>
                    <p className="text-sm text-brand-grey">Advanced Techniques</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
