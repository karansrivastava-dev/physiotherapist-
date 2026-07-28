import { FadeIn } from "@/components/FadeIn";
import { Activity, Bone, Dumbbell, Stethoscope, Flower2, HousePlus, ArrowRight, UserCheck, Shield, Brain } from "lucide-react";
import Link from "next/link";
import { PaediatricBanner } from "@/components/PaediatricBanner";

const services = [
  { id: "back-pain", icon: Bone, title: "Back & Neck Pain", desc: "Targeted therapy to relieve chronic lower back pain, sciatica, and cervical spondylosis.", bgImage: "/images/Back%20&%20Neck%20Pain.jpg" },
  { id: "sports-injury", icon: Dumbbell, title: "Sports Injury Rehab", desc: "Advanced protocols to help athletes recover faster from sprains, strains, and tears.", bgImage: "/images/Sports-Injury-Rehab.jpg" },
  { id: "post-surgery", icon: Stethoscope, title: "Post Surgery Rehab", desc: "Guided, safe recovery protocols following joint replacements and orthopedic surgeries.", bgImage: "/images/Post-Surgery-Rehab.jpg" },
  { id: "womens-health", icon: Flower2, title: "Women's Health", desc: "Compassionate care for prenatal and postnatal discomfort, and pelvic floor dysfunction.", bgImage: "/images/women's-health.jpg" },
  { id: "home-visit", icon: HousePlus, title: "Home Visit Services", desc: "Premium, high-quality physiotherapy sessions in the comfort of your own home.", bgImage: "/images/Home-Visit-Services.jpg" },
  { id: "geriatric", icon: Activity, title: "Geriatric Physiotherapy", desc: "Improving mobility, balance, and quality of life for elderly patients.", bgImage: "/images/Geriatric-Physiotherapy.jpg" },
  { id: "postural-correction", icon: UserCheck, title: "Postural Correction", desc: "Comprehensive assessment and exercises to align your posture and relieve strain.", bgImage: "/images/Postural-Correction.jpg" },
  { id: "preventive", icon: Shield, title: "Preventive Physiotherapy", desc: "Proactive care and conditioning to prevent injuries before they happen.", bgImage: "/images/Preventive-Physiotherapy.jpg" },
  { id: "neurological", icon: Brain, title: "Neurological Rehabilitation", desc: "Specialized treatment for stroke, Parkinson's, and other neurological conditions.", bgImage: "/images/Neurological-Rehabilitation.jpg" },
  { id: "orthopedic", icon: Bone, title: "Orthopedic Physiotherapy", desc: "Expert care for joint pain, fractures, and post-surgical rehabilitation.", bgImage: "/images/Orthopedic-Physiotherapy.jpg" }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-brand-bg">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20">
        <FadeIn>
          <p className="text-brand-primary font-bold text-xs tracking-widest uppercase mb-4">Our Expertise</p>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-brand-secondary leading-tight max-w-4xl mx-auto">
            Comprehensive care for every stage of your recovery.
          </h1>
        </FadeIn>
      </section>
      
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <PaediatricBanner showExploreButton={false} />
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <Link href="/contact" className={`block rounded-[2rem] p-10 h-full border hover:shadow-2xl transition-all duration-300 group relative overflow-hidden ${
                service.bgImage ? "border-transparent shadow-md" : "bg-white border-gray-100 shadow-sm hover:border-brand-primary/20"
              }`}>
                {service.bgImage && (
                  <>
                    <div 
                      className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105" 
                      style={{ backgroundImage: `url("${service.bgImage}")` }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40 z-0" />
                  </>
                )}
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 ${
                    service.bgImage ? "bg-white/20 backdrop-blur-sm text-brand-primary" : "bg-brand-softpink text-brand-primary"
                  }`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className={`text-2xl font-serif font-bold mb-4 ${service.bgImage ? "text-white" : "text-brand-secondary"}`}>{service.title}</h3>
                  <p className={`leading-relaxed mb-8 flex-grow ${service.bgImage ? "text-gray-200" : "text-brand-grey"}`}>{service.desc}</p>
                  <div className={`flex items-center gap-2 text-sm font-semibold group-hover:gap-4 transition-all ${
                    service.bgImage ? "text-white" : "text-brand-primary"
                  }`}>
                    Book Assessment <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
