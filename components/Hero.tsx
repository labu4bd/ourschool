import React from 'react';
import Button from './Button';
import { ArrowRight, PlayCircle, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-semibold tracking-wide uppercase mb-2">
              <span className="mr-2 h-2 w-2 rounded-full bg-brand-accent animate-pulse"></span>
              New Courses Available
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark tracking-tight leading-tight">
              Unlock Your Potential with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent">Modern Learning</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Master English and digital skills with our expert-led modular courses. Designed for kids, adults, and professionals aiming for excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                Explore Courses
              </Button>
              <Button variant="ghost" size="lg" icon={<PlayCircle size={18} />}>
                Watch Demo
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-slate-400">
               <div className="flex items-center gap-2">
                 <span className="text-2xl font-bold text-brand-dark">1K+</span>
                 <span className="text-xs font-medium uppercase leading-tight">Active<br/>Students</span>
               </div>
               <div className="w-px h-10 bg-slate-200"></div>
               <div className="flex items-center gap-2">
                 <span className="text-2xl font-bold text-brand-dark">15+</span>
                 <span className="text-xs font-medium uppercase leading-tight">Expert<br/>Tutors</span>
               </div>
               <div className="w-px h-10 bg-slate-200"></div>
               <div className="flex items-center gap-2">
                 <span className="text-2xl font-bold text-brand-dark">4.9</span>
                 <span className="text-xs font-medium uppercase leading-tight">Student<br/>Rating</span>
               </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white">
              <img 
                src="https://picsum.photos/id/42/800/800" 
                alt="Student learning" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-semibold text-lg">"The best investment you can make is in yourself."</p>
                <p className="text-blue-200 text-sm mt-1">- OurSchool Philosophy</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Certified</p>
                  <p className="text-sm font-bold text-slate-800">Excellence</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;