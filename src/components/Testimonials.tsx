import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "From the moment we booked until the end of the journey, everything was handled perfectly. The guides were incredibly knowledgeable.",
    author: "JUSTIN LAKSAMANA",
    role: "Chief Product Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "We don't just make things look good. We build systems that work. The team at Atelier understood our vision perfectly.",
    author: "SARAH JENKINS",
    role: "Director of Marketing",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "The level of detail and strategic thinking they brought to our rebrand was unlike anything we've experienced before.",
    author: "MICHAEL CHEN",
    role: "Founder, TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-background border-t border-border transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
           <div className="max-w-xl">
             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
               WHAT CLIENTS ARE<br/>SAYING ABOUT US
             </h2>
           </div>
           <div className="text-right max-w-xs">
             <p className="text-muted-foreground text-sm">
               We believe the best creative work starts with deep understanding.
             </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {testimonials.map((t) => (
             <div key={t.id} className="bg-card border border-border p-10 relative group hover:border-foreground/20 transition-colors">
                <Quote className="text-muted-foreground w-10 h-10 mb-6" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-10 min-h-[80px]">
                   "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                   <img src={t.image} alt={t.author} className="w-10 h-10 rounded-none object-cover grayscale group-hover:grayscale-0 transition-all" />
                   <div>
                      <h4 className="text-foreground text-xs font-bold uppercase tracking-widest">{t.author}</h4>
                      <p className="text-muted-foreground text-[10px] uppercase tracking-widest">{t.role}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;