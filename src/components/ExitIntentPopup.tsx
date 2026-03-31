import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, TrendingUp } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
            id="exit-intent-popup"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 text-green-500 rounded-full mb-6">
                <TrendingUp size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 italic serif">Wait! Don't Miss Out...</h2>
              <p className="text-zinc-400 mb-8 text-lg">
                The next class starts on <span className="text-white font-bold">April 13th</span>. 
                Slots are filling up fast. Secure your spot now and start your journey to consistent profits.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/2347063455046?text=I'm%20interested%20in%20Wave%20Forex%20Academy"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-xl transition-all shadow-lg active:scale-95"
                >
                  <MessageCircle size={20} />
                  CHAT ON WHATSAPP NOW
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-500 hover:text-zinc-300 text-sm font-medium transition-colors"
                >
                  No thanks, I'll pass on financial freedom
                </button>
              </div>
            </div>

            <div className="bg-zinc-800/50 p-4 text-center border-t border-zinc-800">
              <p className="text-xs text-zinc-500 uppercase tracking-widest">Only 7 slots remaining for April batch</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
