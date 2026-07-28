import { FadeIn } from "@/components/FadeIn";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  { id: "relieve-neck-pain", title: "How to Relieve Neck Pain Naturally", desc: "Simple exercises and lifestyle tips to reduce neck pain and stiffness.", date: "12 May 2024", readTime: "5 min read" },
  { id: "exercises-back-pain", title: "Best Exercises for Back Pain", desc: "Effective exercises to strengthen your back and prevent pain.", date: "10 May 2024", readTime: "4 min read" },
  { id: "knee-pain-relief", title: "Knee Pain Relief Exercises", desc: "Easy and safe exercises for stronger knees.", date: "08 May 2024", readTime: "6 min read" },
  { id: "physiotherapy-pregnancy", title: "Physiotherapy During Pregnancy", desc: "Stay healthy and active during your pregnancy journey.", date: "05 May 2024", readTime: "7 min read" }
];

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-brand-bg">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20">
        <FadeIn>
          <p className="text-brand-primary font-bold text-xs tracking-widest uppercase mb-4">Health & Wellness Journal</p>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-brand-secondary leading-tight max-w-4xl mx-auto">
            Expert insights for a healthier, active life.
          </h1>
        </FadeIn>
      </section>
      
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-brand-primary/20 transition-all duration-300 flex flex-col h-full group">
                <div className="w-full h-56 bg-brand-softpink relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/0 transition-colors z-10" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-brand-secondary text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm z-20">
                    <Calendar className="w-3 h-3 text-brand-primary" />
                    {post.date}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-bold text-brand-secondary text-xl mb-3 line-clamp-2 leading-snug group-hover:text-brand-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-brand-grey mb-8 flex-grow line-clamp-3 leading-relaxed">{post.desc}</p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                     <span className="text-xs font-medium text-brand-grey flex items-center gap-1.5">
                       <Clock className="w-3 h-3" /> {post.readTime}
                     </span>
                     <Link href={`/blog/${post.id}`} className="text-brand-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                       Read <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
