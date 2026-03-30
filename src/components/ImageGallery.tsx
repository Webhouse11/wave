import React from 'react';
import { motion } from 'framer-motion';

interface ProofImage {
  src: string;
  caption: string;
  type: string;
}

const proofImages: ProofImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1611974717483-9b910c063bb9?q=80&w=800&auto=format&fit=crop',
    caption: 'Real-time market analysis using Wave Strategy',
    type: 'Chart Analysis',
  },
  {
    src: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop',
    caption: 'Institutional entry points identified on EUR/USD',
    type: 'Trade Setup',
  },
  {
    src: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=800&auto=format&fit=crop',
    caption: 'Consistent profit growth across multiple pairs',
    type: 'Profit Proof',
  },
  {
    src: 'https://images.unsplash.com/photo-1611974717483-9b910c063bb9?q=80&w=800&auto=format&fit=crop',
    caption: 'Live execution proof - GBP/JPY +60 Pips',
    type: 'Execution',
  }
];

const FALLBACK_IMAGE = 'https://via.placeholder.com/800x500?text=Forex+Proof+Image+Not+Available';

export default function ImageGallery() {
  return (
    <div className="relative overflow-hidden py-10" id="profit-proof-gallery">
      <div className="flex overflow-x-auto gap-6 px-4 pb-8 snap-x snap-mandatory no-scrollbar">
        {proofImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex-none w-[300px] md:w-[450px] snap-center"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl group">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0px' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border bg-green-500/20 text-green-400 border-green-500/30">
                    {image.type}
                  </span>
                </div>
              </div>
              <div className="p-4 border-t border-zinc-800">
                <p className="text-zinc-300 text-sm font-medium italic serif">“{image.caption}”</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
