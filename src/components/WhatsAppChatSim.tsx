import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, User, Check, CheckCheck } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: string;
}

const BOT_NAME = "Wave Academy Support";
const WHATSAPP_LINK = "https://wa.me/2348060180077?text=I'm%20ready%20to%20enroll%20in%20Wave%20Forex%20Academy";

export default function WhatsAppChatSim() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const addMessage = (text: string, sender: 'bot' | 'user') => {
    const newMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      text,
      sender,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const botReply = async (text: string, delay = 1500) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, delay));
    addMessage(text, 'bot');
    setIsTyping(false);
  };

  // Initial Message
  useEffect(() => {
    const startChat = async () => {
      await botReply("Hello 👋\nWelcome to *Wave Forex Academy* 📊");
      await botReply("Quick one…\nAre you looking to:\n\n1️⃣ Learn forex from scratch\n2️⃣ Improve your current trading\n3️⃣ Start earning from trading\n\nReply with 1, 2, or 3 👇");
      setCurrentStep(1);
    };
    startChat();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleOption = async (option: string) => {
    addMessage(option, 'user');
    
    if (currentStep === 1) {
      if (option === '1') {
        await botReply("Perfect 👌\nYou don’t need any prior experience.");
        await botReply("We take you from ZERO to understanding how to trade confidently.");
        await botReply("Can I ask… have you ever tried forex before or this is your first time?");
      } else if (option === '2') {
        await botReply("Nice 🔥\nThen this will help you fix what’s not working.");
        await botReply("Most traders struggle with entries and risk management — we focus heavily on that.");
        await botReply("What has been your biggest challenge so far?");
      } else if (option === '3') {
        await botReply("Love that mindset 💰");
        await botReply("Forex is one of the most powerful ways to build income when done right.");
        await botReply("Are you currently trading or just getting started?");
      }
      setCurrentStep(2);
      
      // Trust Building after a short delay
      setTimeout(async () => {
        await botReply("We don’t just teach theory…\nWe show real trades, real charts, and real results.");
        await botReply("Our students learn how to:\n✔ Understand the market\n✔ Take correct entries\n✔ Manage risk properly\n\nThat’s how consistency comes in.");
        await botReply("Would you like to see how the training works? (Reply YES)");
        setCurrentStep(3);
      }, 3000);
    } else if (currentStep === 3 && option.toLowerCase().includes('yes')) {
      await botReply("Great 👍");
      await botReply("Here’s what you’ll get inside Wave Forex Academy:\n\n📚 1 Month Intensive Training\n📊 Live market guidance\n📡 24/7 Signal access\n📈 Minimum 1 trade daily\n🎓 Certificate + ongoing support\n\nThis is a complete system, not just signals.");
      await botReply("Training fee is ₦200,000");
      await botReply("Before you decide…\n\nLet me ask:\nAre you serious about learning this skill, or just exploring for now?");
      setCurrentStep(4);
    } else if (currentStep === 4) {
      await botReply("I understand 👌");
      await botReply("Think about this… Most people lose more than that trying random signals.");
      await botReply("Here, you’re learning a skill that can pay you for life.");
      await botReply("Next batch starts: April 6");
      await botReply("We already have people reserving slots. Do you want me to send you payment details to secure your spot?");
      setCurrentStep(5);
    } else if (currentStep === 5 && option.toLowerCase().includes('yes')) {
      await botReply("Perfect 🔥");
      await botReply("Here are the details to get started:\n\nBank: [Bank Name]\nAcct: [Account Number]\nName: Wave Forex Academy\n\nOnce done, send your proof here so we can confirm your slot immediately.");
      await botReply("Or click below to chat directly with me on WhatsApp for any final questions! 👇");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col h-[600px]">
      {/* Header */}
      <div className="bg-[#075E54] p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center overflow-hidden">
          <User className="text-zinc-500" />
        </div>
        <div>
          <h3 className="text-white font-bold text-sm">{BOT_NAME}</h3>
          <p className="text-green-200 text-[10px]">Online</p>
        </div>
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#e5ddd5] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"
      >
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-3 rounded-xl shadow-sm relative ${
                msg.sender === 'user' 
                  ? 'bg-[#dcf8c6] text-zinc-900 rounded-tr-none' 
                  : 'bg-white text-zinc-900 rounded-tl-none'
              }`}>
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="text-[9px] text-zinc-500">{msg.timestamp}</span>
                  {msg.sender === 'user' && <CheckCheck size={12} className="text-blue-500" />}
                </div>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-[#f0f0f0] border-t border-zinc-200">
        <div className="flex flex-wrap gap-2 mb-4">
          {currentStep === 1 && ['1', '2', '3'].map(opt => (
            <button 
              key={opt}
              onClick={() => handleOption(opt)}
              className="px-4 py-2 bg-white border border-zinc-300 rounded-full text-sm font-medium hover:bg-zinc-50 transition-colors"
            >
              Option {opt}
            </button>
          ))}
          {currentStep === 3 && (
            <button 
              onClick={() => handleOption('YES')}
              className="px-4 py-2 bg-white border border-zinc-300 rounded-full text-sm font-medium hover:bg-zinc-50 transition-colors"
            >
              YES, show me
            </button>
          )}
          {currentStep === 4 && (
            <button 
              onClick={() => handleOption('I am serious')}
              className="px-4 py-2 bg-white border border-zinc-300 rounded-full text-sm font-medium hover:bg-zinc-50 transition-colors"
            >
              I am serious
            </button>
          )}
          {currentStep === 5 && (
            <button 
              onClick={() => handleOption('YES')}
              className="px-4 py-2 bg-white border border-zinc-300 rounded-full text-sm font-medium hover:bg-zinc-50 transition-colors"
            >
              YES, send details
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-zinc-400 border border-zinc-300">
            Type a message...
          </div>
          <a 
            href={WHATSAPP_LINK}
            className="w-10 h-10 bg-[#128C7E] rounded-full flex items-center justify-center text-white shadow-md"
          >
            <Send size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
