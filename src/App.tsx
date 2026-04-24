import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Award, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  Star, 
  Zap, 
  Lock, 
  BarChart3, 
  History, 
  Wallet, 
  ArrowRight,
  Mail,
  Instagram,
  HelpCircle,
  Clock
} from 'lucide-react';
import { cn } from './lib/utils';
import CountdownTimer from './components/CountdownTimer';
import WhatsAppButton from './components/WhatsAppButton';
import StickyCTA from './components/StickyCTA';
import ExitIntentPopup from './components/ExitIntentPopup';
import ImageGallery from './components/ImageGallery';
import WhatsAppChatSim from './components/WhatsAppChatSim';
import LegalModal, { TermsContent, PrivacyContent } from './components/LegalModals';
import Navbar from './components/Navbar';

// --- Constants ---
const WHATSAPP_LINK = "https://wa.me/2347063455046?text=Hello%2C%20I'm%20interested%20in%20Wave%20Forex%20Academy";
const START_DATE = "2026-04-13T09:00:00";
const PRICE = "₦50,000";

// --- Components ---

const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={cn("py-20 px-6 max-w-7xl mx-auto scroll-mt-20", className)}>
    {children}
  </section>
);

const CTAButton = ({ className, children }: { className?: string; children?: React.ReactNode }) => (
  <motion.a
    href={WHATSAPP_LINK}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={cn(
      "inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-extrabold py-5 px-8 rounded-2xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] text-lg uppercase tracking-tight",
      className
    )}
  >
    <MessageCircle size={24} />
    {children || "ENROLL NOW"}
  </motion.a>
);

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-[10px] font-bold uppercase tracking-widest text-zinc-400", className)}>
    {children}
  </span>
);

const Marquee = () => {
  const scrollingTestimonials = [
    "I've finally found consistency after years of searching. - Blessing E.",
    "The live sessions are incredible. Seeing the mentors execute in real-time is the best. - Tunde R.",
    "I recovered my losses from 3 years of bad trading within 2 months. - Chinedu O.",
    "The risk management module alone saved me from a massive loss last week. - Emeka V.",
    "Now I finally understand what I'm doing. No more guessing. - Sarah M.",
    "The signal group alone is worth 10x the price. - Ahmed K.",
    "Wave Forex Academy is the only one that actually shows you how to trade live. - Fatima S."
  ];

  return (
    <div className="relative flex items-center overflow-x-hidden mb-8 py-3 border-y border-zinc-800/50 bg-zinc-900/30">
      {/* Static Alert Label */}
      <div className="flex-none px-6 z-10 border-r border-zinc-800/50 bg-zinc-900/80 backdrop-blur-sm">
        <span className="text-red-500 font-black uppercase tracking-widest text-[10px] animate-pulse">
          Alert
        </span>
      </div>

      {/* Marquee Content */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {scrollingTestimonials.map((t, i) => (
            <span key={i} className="mx-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
              <Star size={10} className="fill-green-500 text-green-500" />
              {t}
            </span>
          ))}
        </div>
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {scrollingTestimonials.map((t, i) => (
            <span key={i} className="mx-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
              <Star size={10} className="fill-green-500 text-green-500" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [legalModal, setLegalModal] = useState<{ type: 'terms' | 'privacy' | null; isOpen: boolean }>({ type: null, isOpen: false });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { name: "Chinedu O.", text: "I recovered my losses from 3 years of bad trading within 2 months of joining Wave Academy. The strategy is pure gold.", role: "Full-time Trader" },
    { name: "Sarah M.", text: "Now I finally understand what I'm doing. No more guessing. The mentorship is what makes the difference.", role: "Part-time Trader" },
    { name: "Ahmed K.", text: "The signal group alone is worth 10x the price. But the training is what gave me true financial freedom.", role: "Student" },
    { name: "Blessing E.", text: "The Wave Strategy is the most logical way to trade. I've finally found consistency after years of searching.", role: "Forex Trader" },
    { name: "Tunde R.", text: "The live sessions are incredible. Seeing the mentors execute in real-time is the best way to learn.", role: "Entrepreneur" },
    { name: "Emeka V.", text: "The risk management module alone saved me from a massive loss last week. This academy is a lifesaver.", role: "Part-time Trader" },
    { name: "Fatima S.", text: "I've tried many courses, but Wave Forex Academy is the only one that actually shows you how to trade live.", role: "Forex Enthusiast" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-green-500 origin-left z-[100]" style={{ scaleX }} />

      {/* 1. HERO SECTION */}
      <header id="home" className="relative pt-32 pb-20 overflow-hidden border-b border-zinc-800/50 scroll-mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(34,197,94,0.1),transparent_70%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Marquee />
            <Badge className="mb-6">
              <Users size={12} className="text-green-500" />
              Wave Forex Academy Batch April 2026
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 uppercase italic font-serif">
              Real Trades. <br />
              <span className="text-green-500">Real Results.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Stop falling for "get rich quick" hype. Master the institutional strategy we use to pull <span className="text-white font-bold">consistent profits</span> from the market every single day.
            </p>

            <div className="flex flex-col items-center gap-6">
              <CTAButton />
              <div className="flex items-center gap-4 text-sm text-zinc-500 font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i} 
                      src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&w=40&h=40`} 
                      className="w-8 h-8 rounded-full border-2 border-zinc-900" 
                      alt="User" 
                      referrerPolicy="no-referrer" 
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40x40?text=U'; }}
                    />
                  ))}
                </div>
                <span>Join 500+ successful traders</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 relative"
          >
            <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full" />
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dhzouslh1/image/upload/v1774879269/1000152823_fggmb4.jpg" 
                alt="Forex Trading Chart" 
                style={{ width: '100%', borderRadius: '10px' }} 
                referrerPolicy="no-referrer"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x600?text=Insert+Real+TradingView+Chart'; }}
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. TRUST BREAKER SECTION */}
      <Section className="bg-zinc-950/80 border-y border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-red-500/10 text-red-400 border-red-500/20">
            <ShieldCheck size={12} />
            Transparency First
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 italic font-serif leading-tight">
            Before You Join Any Forex Academy, <span className="text-red-500">See This…</span>
          </h2>
          <div className="space-y-8 text-xl text-zinc-400 leading-relaxed">
            <p>
              The internet is flooded with "gurus" showing rented Lamborghinis and fake MT4 screenshots. Most of them have never placed a real trade in their lives. They sell you dreams while you lose your hard-earned capital.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <XCircle className="text-red-500" size={20} />
                  The Scams
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>• Manipulated demo accounts</li>
                  <li>• "Perfect" Canva-styled graphs</li>
                  <li>• No live execution proof</li>
                  <li>• Hiding losing trades</li>
                </ul>
              </div>
              <div className="p-8 bg-green-500/5 border border-green-500/20 rounded-2xl">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={20} />
                  Wave Academy
                </h4>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li>• Raw MT4/MT5 history</li>
                  <li>• Real TradingView analysis</li>
                  <li>• Live execution during class</li>
                  <li>• Full transparency on all trades</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 2.5 WATCH US IN ACTION */}
      <Section className="bg-zinc-900/50 border-y border-zinc-800/50">
        <div className="text-center mb-12">
          <Badge className="mb-4">Live Proof</Badge>
          <h2 className="text-4xl md:text-5xl font-bold italic font-serif mb-4">Watch Us In Action</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">See how we analyze and execute trades in real-time. No hype, just pure market mechanics.</p>
        </div>
        <div className="max-w-md mx-auto aspect-[9/16] bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl relative">
          <iframe 
            src="https://www.youtube.com/embed/XO31Ygo2jmM" 
            title="Wave Forex Academy Live Proof"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
        <div className="mt-12 text-center">
          <CTAButton />
        </div>
      </Section>

      {/* 3. REAL TRADE PROOF SECTION (CORE) */}
      <Section id="proof" className="text-center">
        <Badge className="mb-6">
          <BarChart3 size={12} className="text-green-500" />
          Core Evidence
        </Badge>
        <h2 className="text-4xl md:text-6xl font-black mb-6 italic font-serif uppercase">
          Real Market Participation.
        </h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-16">
          We don't use illustrations. We use raw screenshots from our live trading accounts.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dhzouslh1/image/upload/v1774879269/1000152822_u4bwpq.jpg" 
              alt="MT5 Profit Proof" 
              style={{ width: '100%', borderRadius: '10px' }} 
              referrerPolicy="no-referrer"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x500?text=Insert+Real+MT5+Profit+Screenshot'; }}
            />
            <div className="p-6 text-left border-t border-zinc-800">
              <h4 className="font-bold text-white mb-2 italic font-serif">Institutional Execution:</h4>
              <p className="text-zinc-500 text-sm">Real-time profit growth using our proprietary Wave Strategy. We target high-probability zones with precision.</p>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dhzouslh1/image/upload/v1774879269/1000152825_psrriz.jpg" 
              alt="TradingView Execution Proof" 
              style={{ width: '100%', borderRadius: '10px' }} 
              referrerPolicy="no-referrer"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x500?text=Insert+Real+TradingView+Execution+Proof'; }}
            />
            <div className="p-6 text-left border-t border-zinc-800">
              <h4 className="font-bold text-white mb-2 italic font-serif">Market Analysis:</h4>
              <p className="text-zinc-500 text-sm">Clear institutional footprints identified. We wait for the setup and execute with zero hesitation.</p>
            </div>
          </div>
        </div>
        
        <ImageGallery />
        
        <div className="mt-12">
          <CTAButton />
        </div>
      </Section>

      {/* 4. BENEFITS */}
      <Section className="bg-zinc-900/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold italic font-serif mb-4">The Wave Advantage</h2>
          <p className="text-zinc-400">Transform from a confused retail trader to a professional market analyst.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Zap />, title: "Institutional Skillset", desc: "Learn to read the market like the big banks. No retail indicators, no lagging signals." },
            { icon: <ShieldCheck />, title: "Bulletproof Risk Control", desc: "Our 1% rule ensures you stay in the game even during losing streaks. Consistency is key." },
            { icon: <TrendingUp />, title: "High-Probability Setups", desc: "Identify high-reward trades with minimal drawdown. We focus on quality over quantity." },
          ].map((benefit, i) => (
            <div key={i} className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-green-500/50 transition-all group">
              <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. SYSTEM EXPLANATION */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-green-500/5 blur-3xl rounded-full" />
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dhzouslh1/image/upload/v1774970648/1000154838_1_wxdarb.jpg" 
                alt="Student Growth Chart" 
                style={{ width: '100%', borderRadius: '10px' }} 
                referrerPolicy="no-referrer"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x800?text=Insert+Real+Student+Growth+Chart'; }}
              />
            </div>
          </div>
          <div>
            <Badge className="mb-6">The Roadmap</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic font-serif leading-tight">
              From Beginner to <span className="text-green-500">Confident Trader</span>
            </h2>
            <div className="space-y-8">
              {[
                { step: "Phase 1: The Foundation", desc: "Master market structure and price action. Learn why the market moves before you ever place a trade." },
                { step: "Phase 2: The Strategy", desc: "Implement the Wave Institutional Strategy. Identify high-probability zones and institutional footprints." },
                { step: "Phase 3: Live Execution", desc: "Trade live with us. Watch our screens as we analyze and execute in real-time markets." },
                { step: "Phase 4: Mastery & Scaling", desc: "Learn to manage emotions and scale your capital. Transition from trading small lots to managing significant funds." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-none w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center font-bold text-green-500">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.step}</h4>
                    <p className="text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 6. TESTIMONIALS */}
      <Section className="bg-zinc-900/50 overflow-hidden text-center">
        <div className="mb-16">
          <Badge className="mb-4">Success Stories</Badge>
          <h2 className="text-4xl md:text-5xl font-bold italic font-serif">What Our Students Say</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto h-[400px] md:h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full p-8 md:p-12 bg-zinc-900 border border-zinc-800 rounded-[2rem] shadow-2xl relative"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} className="fill-green-500 text-green-500" />)}
              </div>
              <p className="text-zinc-200 italic mb-10 text-xl md:text-2xl leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex flex-col items-center gap-4">
                <img 
                  src={`https://images.unsplash.com/photo-${1500000000000 + currentTestimonial * 2000000}?auto=format&fit=crop&w=64&h=64`} 
                  className="w-16 h-16 rounded-full border-2 border-zinc-700 object-cover" 
                  alt={testimonials[currentTestimonial].name}
                  referrerPolicy="no-referrer"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64x64?text=U'; }}
                />
                <div>
                  <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-[0.2em]">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentTestimonial === i ? "bg-green-500 w-8" : "bg-zinc-700 hover:bg-zinc-500"
                )}
              />
            ))}
          </div>
        </div>

        <div className="mt-24">
          <CTAButton />
        </div>
      </Section>

      {/* 8. AUTHORITY BUILDING */}
      <Section id="about" className="border-y border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold italic font-serif mb-8">More Than Just a Signal Group</h2>
          <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
            Wave Forex Academy is a structured educational institution. We don't just throw signals at you; we provide a complete ecosystem for your growth. From foundational theory to advanced live execution, we are with you every step of the way.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Students", val: "500+" },
              { label: "Success Rate", val: "85%" },
              { label: "Mentors", val: "5" },
              { label: "Years Exp", val: "7+" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-black text-white mb-1">{stat.val}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. WHO THIS IS FOR */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-green-500/5 border border-green-500/20 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-green-500" />
              Who This Is For
            </h3>
            <ul className="space-y-4 text-zinc-400">
              <li>• Serious beginners ready to learn the right way.</li>
              <li>• Traders tired of blowing accounts.</li>
              <li>• People seeking a reliable second income.</li>
              <li>• Anyone willing to follow a strict trading plan.</li>
            </ul>
          </div>
          <div className="p-10 bg-red-500/5 border border-red-500/20 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <XCircle className="text-red-500" />
              Who This Is NOT For
            </h3>
            <ul className="space-y-4 text-zinc-400">
              <li>• People looking for "get rich quick" schemes.</li>
              <li>• Gamblers who refuse to follow rules.</li>
              <li>• Unserious individuals unwilling to study.</li>
              <li>• People using money they can't afford to lose.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 10. BONUSES */}
      <Section className="bg-zinc-900/30">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-green-500 border-green-500/20">Exclusive Bonuses</Badge>
          <h2 className="text-4xl md:text-5xl font-bold italic font-serif">Wait, There's More...</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Trading Setup Guide", val: "₦25,000", desc: "The exact software and settings we use for maximum clarity." },
            { title: "Risk Management Blueprint", val: "₦40,000", desc: "Our proprietary calculator to ensure you never blow an account." },
            { title: "Private Community Access", val: "₦50,000", desc: "Lifetime access to our alumni group for networking and trades." },
            { title: "Weekly Market Analysis", val: "₦30,000", desc: "Live sessions every Sunday to prepare for the trading week." },
          ].map((bonus, i) => (
            <div key={i} className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl flex justify-between items-start gap-6">
              <div>
                <h4 className="text-xl font-bold mb-2">{bonus.title}</h4>
                <p className="text-zinc-500 text-sm">{bonus.desc}</p>
              </div>
              <span className="text-green-500 font-bold whitespace-nowrap">{bonus.val}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 10.5 INTERACTIVE CONSULTATION */}
      <Section className="bg-zinc-950/50 border-y border-zinc-800/50 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)]" />
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <Badge className="mb-6">Live Consultation</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic font-serif leading-tight uppercase">
              Not Sure If This Is <br />
              <span className="text-green-500">For You?</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              Chat with our automated advisor right here. We'll help you identify your current level and show you exactly how Wave Forex Academy can transform your trading journey.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="text-green-500" size={20} />
                <span>Instant level assessment</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="text-green-500" size={20} />
                <span>Personalized roadmap preview</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="text-green-500" size={20} />
                <span>Direct path to enrollment</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-green-500/10 blur-[100px] rounded-full" />
            <WhatsAppChatSim />
          </div>
        </div>
      </Section>

      {/* 11. URGENCY + SCARCITY */}
      <Section className="text-center">
        <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8 italic font-serif">Registration Closes Soon</h2>
          <p className="text-xl text-zinc-400 mb-12">The April batch starts on <span className="text-white font-bold">April 13th</span>. Once the slots are filled, we close registration to focus on our students.</p>
          
          <CountdownTimer targetDate={START_DATE} />
          
          <div className="mt-12">
            <p className="text-sm text-zinc-500 uppercase tracking-widest mb-6">Only 7 slots remaining for this batch</p>
            <CTAButton />
          </div>
        </div>
      </Section>

      {/* 12. PRICING SECTION */}
      <Section id="pricing">
        <div className="max-w-3xl mx-auto bg-zinc-900 border-2 border-green-500 rounded-3xl md:rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.15)]">
          <div className="bg-green-500 p-4 text-center">
            <p className="text-white font-black uppercase tracking-widest text-sm">Most Popular Choice</p>
          </div>
          <div className="p-6 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 italic font-serif">1 Month Intensive Training</h3>
            <p className="text-zinc-500 mb-8">Everything you need to become a pro trader.</p>
            
            <div className="mb-12 flex flex-col items-center">
              <span className="text-4xl sm:text-5xl md:text-8xl font-black text-white block leading-none tracking-tighter">
                {PRICE}
              </span>
              <p className="text-zinc-500 mt-4 line-through text-xl md:text-2xl opacity-50">Value: ₦550,000+</p>
            </div>

            <ul className="space-y-4 text-left max-w-md mx-auto mb-12">
              {[
                "1 Month Intensive Live Training",
                "24/7 Signal Group Access",
                "Institutional Wave Strategy",
                "Risk Management Blueprint",
                "Weekly Live Market Analysis",
                "Certificate of Completion",
                "Lifetime Alumni Support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <CTAButton className="w-full" />
            <p className="mt-6 text-zinc-500 text-sm flex items-center justify-center gap-2">
              <Lock size={14} />
              Secure Enrollment via WhatsApp
            </p>
          </div>
        </div>
      </Section>

      {/* 14. FAQ SECTION */}
      <Section id="faq" className="max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold italic font-serif">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "Is this legit?", a: "Absolutely. We are a registered academy with a physical presence and hundreds of verified student results. Our strategy is based on real market mechanics, not hype." },
            { q: "Can beginners join?", a: "Yes! We start from the basics and build you up to advanced institutional strategies. You don't need any prior experience." },
            { q: "What is the minimum capital required to start trading?", a: "We recommend starting with at least $100 to $200 to practice proper risk management. However, the skill you learn here can be applied to any account size, including prop firm accounts with $100k+ funding." },
            { q: "Do I need a laptop, or can I trade with my phone?", a: "A laptop is highly recommended for detailed chart analysis and for the best learning experience. However, we also teach you how to manage and execute trades professionally using just your mobile phone." },
            { q: "How soon can I start earning?", a: "While we don't promise 'overnight riches', our students typically start seeing consistent results within their first month of following the strategy. Your earning potential depends on your dedication to the rules." },
            { q: "Is the signal group free after the 1-month training?", a: "Yes! Your enrollment fee covers lifetime access to our signal group and the Wave Alumni community. We do not charge any recurring monthly subscriptions." },
            { q: "What happens after the 1-month intensive training?", a: "You aren't left alone. You transition into our Lifetime Mentorship phase, where you get weekly market breakdowns, trade reviews, and continuous support from our senior mentors." },
            { q: "Do you offer a certificate?", a: "Yes. Upon successful completion of the training and demonstrating mastery of the Wave Strategy, you will receive a verified Certificate of Completion from Wave Forex Academy." },
            { q: "What if I fail to understand the strategy?", a: "We have a 'No Trader Left Behind' policy. If you're struggling, you can join the next batch's live sessions for free until you fully grasp the concepts. Your success is our reputation." },
          ].map((faq, i) => (
            <details key={i} className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              <summary className="p-6 cursor-pointer flex justify-between items-center font-bold text-lg list-none">
                {faq.q}
                <ChevronRight className="group-open:rotate-90 transition-transform text-zinc-500" />
              </summary>
              <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer id="contact" className="py-20 border-t border-zinc-800 text-center px-6 scroll-mt-20">
        <h2 className="text-3xl font-black italic font-serif mb-8 uppercase tracking-tighter">Wave Forex Academy</h2>
        <p className="text-zinc-400 text-sm mb-8 max-w-3xl mx-auto leading-relaxed">
          Wave Forex Academy is a results-driven forex training platform built to turn complete beginners and struggling traders into confident, disciplined market participants through practical, real-time learning. Rather than relying on hype or blind signals, the academy focuses on teaching a clear, structured trading approach—combining live market guidance, consistent trade opportunities, and strong risk management principles—so students understand exactly what they are doing and why. With a supportive learning environment, hands-on mentorship, and a focus on long-term profitability, Wave Forex Academy positions itself as a trusted path for anyone serious about mastering forex and creating a sustainable income skill.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-zinc-400 text-sm mb-12">
          <div className="flex items-center gap-2">
            <MessageCircle size={16} className="text-green-500" />
            <span>+234 706 345 5046</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-green-500" />
            <a href="mailto:wgloacademy@gmail.com" className="hover:text-white transition-colors">wgloacademy@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Instagram size={16} className="text-green-500" />
            <a 
              href="https://www.instagram.com/waveacademy2026?utm_source=qr&igsh=MXI4emZmbmM4NmY3bw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              @waveacademy2026
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-8 text-zinc-400 text-sm mb-12">
          <button 
            onClick={() => setLegalModal({ type: 'terms', isOpen: true })}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Terms
          </button>
          <button 
            onClick={() => setLegalModal({ type: 'privacy', isOpen: true })}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Privacy
          </button>
          <a href={WHATSAPP_LINK} className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-zinc-600 text-xs">© 2026 Wave Forex Academy. All rights reserved.</p>
      </footer>

      {/* Floating Elements */}
      <WhatsAppButton />
      <StickyCTA />
      <ExitIntentPopup />

      {/* Legal Modals */}
      <LegalModal
        isOpen={legalModal.isOpen && legalModal.type === 'terms'}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
        title="Terms of Service"
        content={<TermsContent />}
      />
      <LegalModal
        isOpen={legalModal.isOpen && legalModal.type === 'privacy'}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
        title="Privacy Policy"
        content={<PrivacyContent />}
      />
    </div>
  );
}
