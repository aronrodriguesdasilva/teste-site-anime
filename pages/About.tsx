import React from 'react';
import { BookOpen, Target, Eye, Palette, BrainCircuit, PenTool, Link as LinkIcon, Rss } from 'lucide-react';
import { IMAGES } from '../types';

const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Banner */}
      <div className="w-full max-w-4xl px-4 pt-8 pb-4">
        <div className="relative w-full border-2 border-ink dark:border-white shadow-manga dark:shadow-manga-dark bg-white dark:bg-black p-2">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden grayscale contrast-125 border border-ink dark:border-white/20">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.aboutHero})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-black tracking-widest text-white uppercase bg-accent-anime border border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] w-fit transform -rotate-1">
                About Us
              </span>
              <h1 className="text-white tracking-tighter text-4xl md:text-6xl font-black uppercase leading-none mb-2 drop-shadow-md">
                Beyond the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Surface</span>
              </h1>
              <div className="h-1 w-24 bg-white mb-4"></div>
              <p className="text-gray-300 text-sm md:text-base font-medium font-mono uppercase tracking-wide max-w-[480px]">
                Deep Analysis. Modern Aesthetics. <br />Uncompromising Quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-12 w-full"></div>

      {/* Purpose Section */}
      <section className="w-full max-w-4xl px-4 relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-ink dark:bg-white/20 hidden md:block"></div>
        <div className="md:pl-10">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-ink dark:text-white" size={32} />
            <h2 className="text-ink dark:text-white tracking-tighter text-3xl font-black uppercase bg-paper dark:bg-paper-dark px-2 border-2 border-ink dark:border-white shadow-manga-sm dark:shadow-manga-sm-dark inline-block transform -skew-x-6">
              Our Purpose
            </h2>
          </div>
          <div className="bg-paper dark:bg-gray-manga-dark border-l-4 border-ink dark:border-white p-6 my-4">
            <p className="text-ink dark:text-gray-300 text-lg font-medium leading-relaxed mb-6 font-body">
              In an era of fast-paced news and clickbait headlines, <span className="bg-ink text-white dark:bg-white dark:text-ink px-1 font-bold uppercase">Shinjitsu</span> exists to slow things down. We explore the storytelling mechanics, art direction, and cultural impact of modern anime and manga.
            </p>
            <p className="text-ink dark:text-gray-300 text-lg font-medium leading-relaxed font-body">
              We believe that animation is a medium, not a genre. Our critical essays are written for the true enthusiast who wants to understand the <i className="font-serif font-bold border-b-2 border-accent-anime">why</i> and <i className="font-serif font-bold border-b-2 border-accent-anime">how</i> behind their favorite series.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full max-w-4xl px-4 my-12 flex justify-center">
        <div className="w-full border-t-2 border-dashed border-ink dark:border-white/30"></div>
      </div>

      {/* Editorial Vision */}
      <section className="w-full max-w-4xl px-4">
        <div className="flex items-center justify-end gap-3 mb-8">
          <h2 className="text-ink dark:text-white tracking-tighter text-3xl font-black uppercase text-right">Editorial Vision</h2>
          <Eye className="text-ink dark:text-white" size={32} />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative p-6 bg-paper dark:bg-gray-manga-dark border-2 border-ink dark:border-white hover:shadow-manga dark:hover:shadow-manga-dark transition-all duration-300">
            <div className="absolute -top-3 -left-3 bg-accent-anime w-8 h-8 flex items-center justify-center border-2 border-black dark:border-white">
              <Palette className="text-white" size={16} />
            </div>
            <h3 className="text-ink dark:text-white font-black uppercase text-lg mb-3 mt-2 border-b-2 border-gray-100 dark:border-gray-800 pb-2">Aesthetic Focus</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">We prioritize the visual language of anime, analyzing cinematography, color theory, and character design through a monochromatic lens.</p>
          </div>
          <div className="group relative p-6 bg-paper dark:bg-gray-manga-dark border-2 border-ink dark:border-white hover:shadow-manga dark:hover:shadow-manga-dark transition-all duration-300">
            <div className="absolute -top-3 -left-3 bg-accent-anime w-8 h-8 flex items-center justify-center border-2 border-black dark:border-white">
              <BrainCircuit className="text-white" size={16} />
            </div>
            <h3 className="text-ink dark:text-white font-black uppercase text-lg mb-3 mt-2 border-b-2 border-gray-100 dark:border-gray-800 pb-2">Critical Depth</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">No surface-level recaps. We dive into thematic elements, philosophical underpinnings, and narrative structures.</p>
          </div>
        </div>
      </section>

      <div className="w-full max-w-4xl px-4 my-12 flex justify-center">
        <div className="w-full border-t-2 border-dashed border-ink dark:border-white/30"></div>
      </div>

      {/* Profile */}
      <section className="w-full max-w-4xl px-4 pb-16">
        <div className="bg-paper dark:bg-gray-manga-dark border-2 border-ink dark:border-white p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-manga dark:shadow-manga-dark">
          <div className="relative flex-shrink-0">
            <div className="w-32 h-32 overflow-hidden border-2 border-ink dark:border-white bg-gray-200">
              <img src={IMAGES.editorAvatar} alt="Editor" className="w-full h-full object-cover grayscale contrast-110" />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-accent-anime text-white border-2 border-ink dark:border-white w-10 h-10 flex items-center justify-center shadow-sm">
              <PenTool size={20} />
            </div>
          </div>
          <div className="flex flex-col text-center md:text-left w-full">
            <div className="mb-1 flex flex-col md:flex-row md:items-baseline gap-2">
              <h3 className="text-ink dark:text-white text-2xl font-black uppercase tracking-tight">Alex K. Chen</h3>
              <span className="text-xs font-bold bg-ink text-white dark:bg-white dark:text-ink px-2 py-0.5 uppercase tracking-wider">Lead Editor</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-accent-anime pl-3 italic">
              "A lifelong fan of animation with a background in film studies. Obsessed with the intersection of traditional Japanese art and cyberpunk aesthetics."
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <button className="group flex items-center justify-center w-10 h-10 border-2 border-ink dark:border-white hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-ink transition-all">
                <span className="font-bold text-lg">@</span>
              </button>
              <button className="group flex items-center justify-center w-10 h-10 border-2 border-ink dark:border-white hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-ink transition-all">
                <LinkIcon size={18} />
              </button>
              <button className="group flex items-center justify-center w-10 h-10 border-2 border-ink dark:border-white hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-ink transition-all">
                <Rss size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;