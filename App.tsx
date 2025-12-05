import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import Features from './components/Features';
import Footer from './components/Footer';
import { COURSES } from './constants';
import Button from './components/Button';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Courses Grid Section */}
        <section id="courses" className="py-20 relative">
           {/* Section Background Decor */}
           <div className="absolute top-1/3 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
           <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold text-brand-accent uppercase tracking-wider mb-2">Our Curriculum</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-dark">Explore Our Top-Rated Courses</h3>
                <p className="mt-4 text-slate-600 text-lg">
                  Designed by experts to take you from beginner to advanced in record time.
                </p>
              </div>
              <Button variant="outline" className="hidden md:inline-flex">View All Courses</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {COURSES.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
              
              {/* Call to action card */}
              <div className="bg-brand-blue rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white shadow-xl hover:shadow-2xl transition-shadow">
                <div className="bg-white/20 p-4 rounded-full mb-6">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Not sure where to start?</h3>
                <p className="text-blue-100 mb-8">Take our free placement test to find the perfect level for you.</p>
                <Button variant="primary" className="w-full bg-white text-brand-blue hover:bg-blue-50 hover:text-brand-dark shadow-none">
                  Take Placement Test
                </Button>
              </div>
            </div>

            <div className="mt-12 text-center md:hidden">
              <Button variant="outline" className="w-full">View All Courses</Button>
            </div>
          </div>
        </section>

        <Features />
        
        {/* Newsletter / CTA Section */}
        <section className="py-20 bg-brand-blue relative overflow-hidden">
           {/* Abstract patterns */}
          <div className="absolute inset-0 opacity-10">
             <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full"></div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your journey?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Join over 5,000 students who have transformed their careers and confidence with OurSchool.it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-accent/50 w-full shadow-lg"
              />
              <Button variant="primary" className="bg-brand-accent hover:bg-orange-400 text-white px-8 py-4 shadow-xl shadow-orange-900/20 whitespace-nowrap">
                Join Now
              </Button>
            </div>
            <p className="text-blue-200 text-xs mt-4">No credit card required for free trial.</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;