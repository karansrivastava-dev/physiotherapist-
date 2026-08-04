import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, Star, 
  MapPin, Activity, Stethoscope, 
  UserCheck, Shield, ChevronRight, Award, Clock, Dumbbell, Heart, Brain, Bone, HeartPulse, Flower2, HousePlus
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { PaediatricBanner } from "@/components/PaediatricBanner";
import { FAQ } from "@/components/FAQ";
import { BentoGallery } from "@/components/BentoGallery";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-softpink text-brand-primary text-xs font-bold tracking-widest uppercase mb-8 border border-brand-primary/20">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                Accepting New Patients
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-brand-secondary leading-[1.1] mb-8">
                Move Freely Again.<br />
                <span className="text-brand-primary italic">Without Pain.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg sm:text-xl text-brand-grey mb-10 max-w-lg leading-relaxed">
                Expert, personalized physiotherapy care to help you recover, regain strength, and return to the life you love.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="bg-brand-secondary hover:bg-brand-primary text-white px-8 py-4 rounded-full font-semibold text-center transition-colors shadow-lg flex items-center justify-center gap-2 text-lg">
                  Book Your Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="https://wa.me/918009883366" target="_blank" className="bg-white hover:bg-brand-softpink text-[#25D366] border border-gray-200 px-8 py-4 rounded-full font-semibold text-center transition-colors shadow-sm flex items-center justify-center gap-2 text-lg">
                  <WhatsAppIcon className="w-6 h-6" />
                  WhatsApp Us
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-100">
                <div className="group cursor-default hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-3xl font-serif font-bold text-brand-secondary mb-1 group-hover:text-brand-primary transition-colors">15+</h4>
                  <p className="text-xs font-semibold text-brand-grey uppercase tracking-wider">Years Exp.</p>
                </div>
                <div className="group cursor-default hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-3xl font-serif font-bold text-brand-secondary mb-1 group-hover:text-brand-primary transition-colors">5k+</h4>
                  <p className="text-xs font-semibold text-brand-grey uppercase tracking-wider">Patients</p>
                </div>
                <div className="group cursor-default hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-3xl font-serif font-bold text-brand-secondary mb-1 flex items-center gap-1 group-hover:text-brand-primary transition-colors">4.9 <Star className="w-4 h-4 fill-brand-primary text-brand-primary" /></h4>
                  <p className="text-xs font-semibold text-brand-grey uppercase tracking-wider">Google Rating</p>
                </div>
                <div className="group cursor-default hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-xl font-serif font-bold text-brand-secondary mb-1 group-hover:text-brand-primary transition-colors">Neuro & Spine (BPT)</h4>
                  <p className="text-xs font-semibold text-brand-grey uppercase tracking-wider">Certified</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="relative">
            <div className="animate-float">
              <FadeIn delay={0.4} direction="left" className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] bg-gray-200">
                <Image src="/images/herotop.png" alt="Dr. Deepti Mishra Physiotherapist" fill className="object-cover" priority quality={100} />
              </FadeIn>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-softpink rounded-full -z-10 blur-3xl opacity-60 animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-brand-mint rounded-full -z-10 blur-3xl opacity-60 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
            
            <FadeIn delay={0.7} direction="up" className="absolute -bottom-6 -right-6 z-20 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl max-w-[220px] border border-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-xs text-brand-grey font-semibold">Pain Relief</p>
                  <p className="text-sm font-bold text-brand-secondary">Guaranteed</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Paediatric Banner Section */}
      <section className="px-6 lg:px-8 bg-white">
        <PaediatricBanner />
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-8 bg-brand-softpink/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <FadeIn className="max-w-2xl">
              <p className="text-brand-primary font-bold text-xs tracking-widest uppercase mb-4">Core Specialties</p>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                Premium care tailored to your specific needs.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-brand-secondary hover:text-brand-primary transition-colors">
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Bone, title: "Back & Neck Pain", desc: "Targeted therapy to relieve chronic lower back pain, sciatica, and cervical spondylosis.", bgImage: "/images/Back%20&%20Neck%20Pain.jpg", blogLink: "/blog/back-and-neck-pain" },
              { icon: Dumbbell, title: "Sports Injury Rehab", desc: "Advanced protocols to help athletes recover faster from sprains, strains, and tears.", bgImage: "/images/Sports-Injury-Rehab.jpg", blogLink: "/blog/sports-injury-rehab" },
              { icon: Stethoscope, title: "Post Surgery Rehab", desc: "Guided, safe recovery protocols following joint replacements and orthopedic surgeries.", bgImage: "/images/Post-Surgery-Rehab.jpg", blogLink: "/blog/post-surgery-rehab" },
              { icon: Flower2, title: "Women's Health", desc: "Compassionate care for prenatal and postnatal discomfort, and pelvic floor dysfunction.", bgImage: "/images/women's-health.jpg", blogLink: "/blog/womens-health-physiotherapy" },
              { icon: HousePlus, title: "Home Visit Services", desc: "Premium, high-quality physiotherapy sessions in the comfort of your own home.", bgImage: "/images/Home-Visit-Services.jpg", blogLink: "/blog/home-visit-services" },
              { icon: Activity, title: "Geriatric Physiotherapy", desc: "Improving mobility, balance, and quality of life for elderly patients.", bgImage: "/images/Geriatric-Physiotherapy.jpg", blogLink: "/blog/geriatric-physiotherapy" },
            ].map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div 
                  className={`rounded-3xl p-10 h-full border hover:shadow-xl transition-all group flex flex-col relative overflow-hidden ${
                    service.bgImage ? "border-transparent" : "bg-white border-gray-100 hover:border-brand-primary/20"
                  }`}
                >
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
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${
                      service.bgImage ? "bg-white/20 backdrop-blur-sm text-brand-primary" : "bg-brand-softpink text-brand-primary"
                    }`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-2xl font-serif font-bold mb-4 ${service.bgImage ? "text-white" : "text-brand-secondary"}`}>
                      {service.title}
                    </h3>
                    <p className={`leading-relaxed flex-grow ${service.bgImage ? "text-gray-200" : "text-brand-grey"}`}>
                      {service.desc}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between pt-6 border-t border-white/10 z-20">
                      <Link href="/contact" className={`flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all ${
                        service.bgImage ? "text-white" : "text-brand-primary"
                      }`}>
                        Book Assessment <ArrowRight className="w-4 h-4" />
                      </Link>
                      {service.blogLink && (
                        <Link href={service.blogLink} className={`flex items-center gap-1.5 text-sm font-medium hover:opacity-100 transition-opacity ${
                          service.bgImage ? "text-white/70 hover:text-white" : "text-brand-grey hover:text-brand-primary"
                        }`}>
                          Read Article <ChevronRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gray-100">
               <Image src="/images/hero.jpg" alt="Physiotherapy Treatment" fill className="object-cover" />
            </div>
          </FadeIn>
          <div>
            <FadeIn>
              <p className="text-brand-primary font-bold text-xs tracking-widest uppercase mb-4">Why Dr. Deepti Mishra</p>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-secondary leading-tight mb-8">
                A different approach to healing and recovery.
              </h2>
            </FadeIn>
            
            <div className="space-y-8">
              {[
                { icon: UserCheck, title: "1-on-1 Personalized Care", desc: "No rushed appointments. You get my undivided attention for the entire duration of your session." },
                { icon: Shield, title: "Evidence-Based Treatment", desc: "We only use proven, medically-backed techniques to ensure your safety and optimal recovery." },
                { icon: Stethoscope, title: "Root Cause Resolution", desc: "We don't just treat the symptoms; we identify and address the underlying cause of your pain." }
              ].map((item, idx) => (
                <FadeIn key={idx} delay={0.2 + (idx * 0.1)}>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-brand-mint rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-secondary mb-2">{item.title}</h4>
                      <p className="text-brand-grey leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Strip */}
      <section className="py-16 bg-brand-secondary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="flex flex-wrap justify-center gap-4 lg:gap-8 opacity-80 font-serif text-lg lg:text-2xl">
              <span>Sciatica</span> • <span>Frozen Shoulder</span> • <span>Slip Disc</span> • <span>Arthritis</span> • <span>Tennis Elbow</span> • <span>Knee Pain</span>
           </div>
        </div>
      </section>

      {/* Home Visit Section */}
      <section className="py-24 px-6 lg:px-8 bg-brand-softpink/50">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-sm text-brand-primary mb-8 rotate-3 hover:rotate-0 transition-transform">
               <MapPin className="w-8 h-8" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-secondary leading-tight mb-6">
              Expert care, delivered to your doorstep.
            </h2>
            <p className="text-xl text-brand-grey max-w-2xl mx-auto mb-12">
              Can't make it to the clinic? We offer premium home visit physiotherapy services across select areas in Lucknow.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 text-lg shadow-lg">
              Request Home Visit
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Bento Gallery - Patient Care */}
      <BentoGallery />

      {/* FAQ Section */}
      <FAQ />

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
             <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-secondary">Life-changing results.</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Neha Sharma",
                role: "Mother of a 6-year-old child",
                text: "\"Dr. Deepti's approach to paediatric rehabilitation is incredible. She made the sessions so playful and engaging that my son actually looked forward to them. His coordination and balance have improved significantly!\""
              },
              {
                name: "Rahul Desai",
                role: "State-Level Runner",
                text: "\"After a severe hamstring tear, I thought my racing days were over. The sports injury rehab program here was exactly what I needed. I'm back on the track faster than I ever expected.\""
              },
              {
                name: "Arvind Patel",
                role: "Retired Teacher",
                text: "\"At 72, severe joint pain made walking difficult. The geriatric physiotherapy sessions at home have been a blessing. I have regained my mobility and can comfortably play with my grandchildren again.\""
              }
            ].map((testimonial, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-brand-bg rounded-3xl p-8 border border-gray-100 relative h-full flex flex-col">
                  <div className="flex gap-1 text-brand-primary mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-brand-secondary font-medium leading-relaxed mb-8 italic flex-grow">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-bold text-brand-secondary text-sm">{testimonial.name}</p>
                      <p className="text-xs text-brand-grey">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
