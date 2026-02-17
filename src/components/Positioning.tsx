import React from 'react';

const Positioning: React.FC = () => {
  return (
    <section className="py-24 bg-background border-t border-border transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Intelligent Software Is the Competitive Advantage
            </h2>
            <div className="w-20 h-1 bg-primary mt-6"></div>
          </div>

          <div className="md:w-2/3 text-muted-foreground text-lg leading-relaxed space-y-6">
            <p>
              Most businesses already have software. Very few have <strong className="text-foreground">intelligent systems</strong>.
            </p>
            <p>
              Manual workflows, repetitive processes, disconnected tools, and slow decision-making quietly drain revenue every day. Adding random AI features won’t fix that. Strategic AI integration will.
            </p>
            <p>
              At <span className="text-foreground font-semibold">Mikrosell Systems</span>, we embed artificial intelligence directly into business workflows to create measurable impact.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Positioning;