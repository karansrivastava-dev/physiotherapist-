import { FadeIn } from "@/components/FadeIn";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-brand-bg">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <p className="text-brand-primary font-bold text-xs tracking-widest uppercase mb-4">Get In Touch</p>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-brand-secondary leading-tight max-w-4xl mx-auto">
            Ready to start your recovery journey?
          </h1>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <FadeIn direction="right">
            <div className="bg-white rounded-[3rem] p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-brand-secondary mb-8">Send a Message</h3>
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY_HERE" />
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-secondary">Full Name</label>
                  <input type="text" name="name" required placeholder="Jane Doe" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all bg-gray-50/50" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-secondary">Phone</label>
                    <input type="tel" name="phone" required placeholder="+91 98765 43210" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all bg-gray-50/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-secondary">Service Needed</label>
                    <select name="service" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all bg-gray-50/50 text-gray-700">
                      <option value="">Select an option</option>
                      <option value="Clinic Visit">Clinic Visit</option>
                      <option value="Home Visit">Home Visit</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-secondary">Message</label>
                  <textarea name="message" rows={4} required placeholder="How can we help you?" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all bg-gray-50/50 resize-none"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-brand-secondary hover:bg-brand-primary text-white px-8 py-5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-primary/30">
                  Book Appointment <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </FadeIn>
          
          {/* Details */}
          <div className="space-y-8 flex flex-col justify-center lg:pl-8">
            <FadeIn delay={0.2}>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-brand-softpink rounded-2xl flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-secondary text-xl mb-2">Clinic Location</h4>
                  <p className="text-brand-grey leading-relaxed">
                    Premium Clinic Layout<br/>
                    Lucknow, Uttar Pradesh 226017<br/>
                    India
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-brand-softpink rounded-2xl flex items-center justify-center text-brand-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-secondary text-xl mb-2">Direct Contact</h4>
                  <p className="text-brand-grey mb-1">Mobile: +91 98765 43210</p>
                  <p className="text-brand-grey">WhatsApp: Available 24/7</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-brand-softpink rounded-2xl flex items-center justify-center text-brand-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-secondary text-xl mb-2">Email Address</h4>
                  <p className="text-brand-grey">hello@deeptimishra.com</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
