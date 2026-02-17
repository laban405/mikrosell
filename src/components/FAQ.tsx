import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const faqs = [
  { question: "What services does your agency offer?", answer: "We specialize in custom mobile app and web development, UI/UX, AI/ML, DevOps, AI-powered applications, interactive dashboards, SEO-optimized mobile apps and websites, SaaS applications, and AI chatbots. Our team builds high-performance digital solutions that enhance user experience and drive business growth." },
  { question: "Do you provide AI-powered solutions for businesses?", answer: "Yes, we integrate advanced AI models like Gemini and others to provide intelligent solutions ranging from chatbots to predictive analytics." },
  { question: "Do you offer ongoing support and maintenance?", answer: "Absolutely. We provide various support packages to ensure your application remains up-to-date, secure, and performant after launch." },
  { question: "Do you guys also develop mobile apps?", answer: "Yes, we develop native and cross-platform mobile applications for iOS and Android using modern frameworks like React Native." },
  { question: "Do you integrate third-party APIs and tools?", answer: "Yes, seamless integration with third-party tools (Stripe, Twilio, Google Maps, etc.) is a core part of our development process." },
  { question: "How can I get started with my project?", answer: "Simply click 'Get a quote' or book an intro call with us. We'll discuss your requirements and provide a tailored proposal." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-background relative">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[150px] rounded-none -z-10" />

      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-none overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white/10 border-primary/30 shadow-lg backdrop-blur-md' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left font-medium text-foreground focus:outline-none"
              >
                <span className="text-lg">{faq.question}</span>
                <span className={`p-2 rounded-none transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-white/5 text-muted-foreground'}`}>
                   {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-white/5 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;