import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const bentoImages = [
  {
    src: "/images/g4.jpeg",
    alt: "Dr. Deepti consulting a patient",
    className: "md:col-span-2 md:row-span-2",
    imageClassName: "object-top",
  },
  {
    src: "/images/g6.png",
    alt: "Patient rehabilitation exercise",
    className: "md:col-span-1 md:row-span-1",
    imageClassName: "object-top",
  },
  {
    src: "/images/g5.jpeg",
    alt: "Physiotherapy treatment session",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/images/g1.jpeg",
    alt: "Patient smiling after recovery",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/g2.jpeg",
    alt: "Guiding a patient through mobility exercises",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/images/g3.jpeg",
    alt: "Hands-on physical therapy",
    className: "md:col-span-2 md:row-span-1",
  },
];

export function BentoGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-primary font-bold text-xs tracking-widest uppercase mb-4">Patient Experience</p>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-brand-secondary mb-6">
              Care in Action
            </h2>
            <p className="text-lg text-brand-grey">
              Every day, we help patients overcome pain and regain their strength. Here’s a glimpse into the dedicated care you can expect.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
          {bentoImages.map((image, index) => (
            <FadeIn 
              key={index} 
              delay={index * 0.1} 
              className={`group relative min-h-[250px] md:min-h-0 rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ${image.className}`}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill 
                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${image.imageClassName || ''}`} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
