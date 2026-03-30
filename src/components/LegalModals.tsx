import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-3xl max-h-[80vh] bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50 backdrop-blur-md sticky top-0 z-10">
              <h2 className="text-2xl font-bold italic serif text-white">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-zinc-300 leading-relaxed space-y-6 custom-scrollbar">
              {content}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const TermsContent = () => (
  <div className="space-y-6">
    <section>
      <h3 className="text-white font-bold text-lg mb-2">1. Educational Purpose Only</h3>
      <p>Wave Forex Academy provides educational content and training related to foreign exchange trading. All information, strategies, and signals provided are for educational and informational purposes only and do not constitute financial, investment, or trading advice.</p>
    </section>
    <section>
      <h3 className="text-white font-bold text-lg mb-2">2. Risk Disclosure</h3>
      <p>Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to invest in foreign exchange, you should carefully consider your investment objectives, level of experience, and risk appetite. You could sustain a loss of some or all of your initial investment.</p>
    </section>
    <section>
      <h3 className="text-white font-bold text-lg mb-2">3. No Guarantees</h3>
      <p>While Wave Forex Academy strives to provide high-quality education and effective strategies, we do not guarantee any specific financial results or profits. Past performance is not indicative of future results. Your success depends on your own dedication, discipline, and market conditions.</p>
    </section>
    <section>
      <h3 className="text-white font-bold text-lg mb-2">4. Enrollment and Refunds</h3>
      <p>Enrollment fees for our training programs are non-refundable once the training batch has commenced. We invest significant resources into each student, and our commitment to your success begins the moment you join.</p>
    </section>
    <section>
      <h3 className="text-white font-bold text-lg mb-2">5. Intellectual Property</h3>
      <p>All course materials, including videos, PDFs, strategy documents, and proprietary tools, are the intellectual property of Wave Forex Academy. These materials are provided for your personal use only and may not be shared, resold, or redistributed without explicit written consent.</p>
    </section>
    <section>
      <h3 className="text-white font-bold text-lg mb-2">6. Community Conduct</h3>
      <p>Students are expected to maintain a professional and respectful attitude within our community groups and live sessions. Harassment, spamming, or unauthorized promotion of other services will result in immediate removal from the academy without a refund.</p>
    </section>
  </div>
);

export const PrivacyContent = () => (
  <div className="space-y-6">
    <section>
      <h3 className="text-white font-bold text-lg mb-2">1. Information We Collect</h3>
      <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us. This may include your name, email address, and phone number.</p>
    </section>
    <section>
      <h3 className="text-white font-bold text-lg mb-2">2. How We Use Your Information</h3>
      <p>We use the information we collect to provide you with our training services, process your enrollment, send you updates about the academy, and provide ongoing mentorship and support via WhatsApp and other communication channels.</p>
    </section>
    <section>
      <h3 className="text-white font-bold text-lg mb-2">3. Data Security</h3>
      <p>We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
    </section>
    <section>
      <h3 className="text-white font-bold text-lg mb-2">4. Third-Party Sharing</h3>
      <p>Wave Forex Academy does not sell, rent, or lease its student lists to third parties. We may share data with trusted partners to help perform statistical analysis, send you email or postal mail, or provide student support.</p>
    </section>
    <section>
      <h3 className="text-white font-bold text-lg mb-2">5. Your Privacy Rights</h3>
      <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete the data we hold about you. To exercise these rights, please contact us directly via WhatsApp.</p>
    </section>
    <section>
      <h3 className="text-white font-bold text-lg mb-2">6. Updates to This Policy</h3>
      <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.</p>
    </section>
  </div>
);

export default LegalModal;
