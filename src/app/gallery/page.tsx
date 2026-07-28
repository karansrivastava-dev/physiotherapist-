import { ImageIcon } from "lucide-react";

export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-brand-pink-light/30 py-16 px-6 lg:px-8 text-center border-b border-gray-100">
        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-brand-navy mb-4">Our Clinic Gallery</h1>
        <p className="text-brand-navy-light max-w-2xl mx-auto">A glimpse of our modern clinic, advanced equipment and patient care in action.</p>
      </section>
      
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center flex-wrap gap-4 mb-12">
             <button className="bg-brand-pink text-white px-6 py-2 rounded-full font-semibold text-sm">All Photos</button>
             <button className="bg-gray-100 text-brand-navy hover:bg-gray-200 px-6 py-2 rounded-full font-semibold text-sm transition-colors">Clinic Interior</button>
             <button className="bg-gray-100 text-brand-navy hover:bg-gray-200 px-6 py-2 rounded-full font-semibold text-sm transition-colors">Equipment</button>
             <button className="bg-gray-100 text-brand-navy hover:bg-gray-200 px-6 py-2 rounded-full font-semibold text-sm transition-colors">Patient Care</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 cursor-pointer shadow-sm hover:shadow-lg transition-shadow">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-100 flex-col gap-2 border border-gray-200 rounded-xl">
                   <ImageIcon className="w-8 h-8 opacity-50" />
                   <span className="text-xs">Gallery Image {idx}</span>
                 </div>
                 <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold flex items-center gap-2">View Image</span>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
