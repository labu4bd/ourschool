import React from 'react';
import { Course } from '../types';
import { Clock, Users, BookOpen, ArrowRight } from 'lucide-react';
import Button from './Button';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
            course.category === 'Language' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
          }`}>
            {course.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
           <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand-blue transition-colors">
            {course.title}
          </h3>
        </div>
        
        <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
          {course.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
              #{tag}
            </span>
          ))}
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4 mb-4">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={14} />
            <span>{course.level}</span>
          </div>
        </div>

        <Button variant="outline" size="sm" className="w-full justify-between group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue">
          View Details <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;