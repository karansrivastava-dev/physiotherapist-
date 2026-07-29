import { FadeIn } from "@/components/FadeIn";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const posts = [
  { id: "geriatric-physiotherapy", title: "Geriatric Physiotherapy: Helping Seniors Stay Active, Independent, and Pain-Free", desc: "\"Growing Older Doesn't Mean Giving Up Your Independence\"", date: "29 July 2026", readTime: "10 min read", image: "/images/Geriatric-Physiotherapy.jpg" },
  { id: "home-visit-services", title: "Home Visit Physiotherapy Services: Expert Care in the Comfort of Your Home", desc: "\"Healing Doesn't Always Have to Begin at a Clinic\"", date: "29 July 2026", readTime: "8 min read", image: "/images/Home-Visit-Services.jpg" },
  { id: "womens-health-physiotherapy", title: "Women's Health Physiotherapy: Supporting Every Woman Through Every Stage of Life", desc: "\"Your Health Changes Throughout Life—Your Care Should Too\"", date: "29 July 2026", readTime: "11 min read", image: "/images/women's-health.jpg" },
  { id: "post-surgery-rehab", title: "Post-Surgery Rehabilitation: The Key to a Faster, Safer, and Stronger Recovery", desc: "\"Surgery Is Only the First Step—Recovery Is Where Healing Truly Begins\"", date: "29 July 2026", readTime: "9 min read", image: "/images/Post-Surgery-Rehab.jpg" },
  { id: "sports-injury-rehab", title: "Sports Injury Rehabilitation: Recover Stronger, Move Better, Return with Confidence", desc: "\"An Injury Doesn't Have to End Your Game\"", date: "29 July 2026", readTime: "10 min read", image: "/images/Sports-Injury-Rehab.jpg" },
  { id: "back-and-neck-pain", title: "Back & Neck Pain: Why It Happens and How Physiotherapy Can Help", desc: "\"It's just a little pain...\" — Until It Starts Controlling Your Life", date: "29 July 2026", readTime: "8 min read", image: "/images/Back%20&%20Neck%20Pain.jpg" }
];

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-brand-bg">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20">
        <FadeIn>
          <p className="text-brand-primary font-bold text-xs tracking-widest uppercase mb-4">Health Blog</p>
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
                  {post.image ? (
                    <Image src={post.image} alt={post.title} fill className="object-cover z-0 transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/0 transition-colors z-10" />
                  )}
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
