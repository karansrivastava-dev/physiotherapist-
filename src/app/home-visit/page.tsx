import { FadeIn } from "@/components/FadeIn";
import { MessageCircle, Zap, Stethoscope, Home, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const steps = [
  {
    id: 1,
    title: "Connect & Request",
    desc: "Reach out to us via WhatsApp or our contact form to request a home visit in Lucknow.",
    icon: MessageCircle,
  },
  {
    id: 2,
    title: "Fast Response",
    desc: "Our team will get back to you promptly to acknowledge your request and gather initial details.",
    icon: Zap,
  },
  {
    id: 3,
    title: "Conditions Discussion",
    desc: "We discuss your symptoms, medical history, and specific needs to prepare the right treatment plan.",
    icon: Stethoscope,
  },
  {
    id: 4,
    title: "Home Visit",
    desc: "Our expert physiotherapist arrives at your doorstep in Lucknow fully equipped for your session.",
    icon: Home,
  },
];

export default function HomeVisit() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-brand-bg">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-24">
        <FadeIn>
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-softpink text-brand-primary text-xs font-bold tracking-widest uppercase mb-6 border border-brand-primary/20">
            <MapPin className="w-4 h-4" />
            Serving all across Lucknow
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-brand-secondary leading-tight max-w-4xl mx-auto mb-8">
            Premium Physiotherapy <br className="hidden md:block" />
            <span className="text-brand-primary italic">At Your Doorstep.</span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-grey max-w-2xl mx-auto leading-relaxed mb-10">
            Experience the highest standard of personalized care in the comfort of your own home. Skip the travel and focus entirely on your recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/918009883366" target="_blank" className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-semibold text-center transition-colors shadow-lg flex items-center justify-center gap-2 text-lg">
              <WhatsAppIcon className="w-5 h-5" />
              Book via WhatsApp
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* How It Works - Animated Workflow */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 relative">
        <FadeIn delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-secondary mb-4">How It Works</h2>
            <p className="text-brand-grey">A simple, seamless process to get you the care you need.</p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-brand-softpink -translate-x-1/2 z-0 rounded-full"></div>

          <div className="space-y-12 md:space-y-0 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <FadeIn key={step.id} delay={index * 0.2} direction={isEven ? "left" : "right"}>
                  <div className={`flex flex-col md:flex-row items-center justify-between w-full md:mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Content Box */}
                    <div className="w-full md:w-[45%] bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow relative">
                      <div className="text-brand-primary font-bold text-5xl opacity-10 absolute -top-4 -right-2 font-serif">
                        0{step.id}
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-brand-secondary mb-3">{step.title}</h3>
                      <p className="text-brand-grey leading-relaxed">{step.desc}</p>
                    </div>

                    {/* Center Icon */}
                    <div className="hidden md:flex w-16 h-16 rounded-full bg-brand-primary border-4 border-brand-bg items-center justify-center text-white shadow-lg z-10">
                      <step.icon className="w-6 h-6" />
                    </div>

                    {/* Empty Space for layout */}
                    <div className="hidden md:block w-[45%]"></div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
