import React, { useState } from 'react';
import { Clock, User, ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Reusable Schedule Card showing detailed session logs with interactive accordion expansions.
 */
export default function ScheduleCard({ time, title, speaker, description, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative pl-8 pb-10 last:pb-0 reveal-hidden" style={{ animationDelay: `${index * 100}ms` }}>
      
      {/* Vertical Timeline Connection Line */}
      <div className="absolute left-[11px] top-2 bottom-0 w-0.5 bg-gray-200 group-last:hidden" />

      {/* Timeline Bullet Node */}
      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow flex items-center justify-center transition-all duration-300 ${
        isExpanded ? 'bg-secondary ring-4 ring-secondary/15' : 'bg-primary'
      }`} />

      {/* Timeline Card */}
      <div className={`p-5 md:p-6 rounded-2xl bg-white border transition-all duration-300 shadow-sm ${
        isExpanded ? 'border-primary/25 shadow-md' : 'border-gray-100 hover:border-gray-200'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          {/* Timing & Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold font-sans">
              <Clock className="w-3.5 h-3.5" />
              {time}
            </span>
          </div>

          {/* Toggle Expand button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-gray-400 hover:text-primary transition-colors focus:outline-none"
          >
            {isExpanded ? (
              <>
                Hide Details <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show Details <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Session Title */}
        <h3 className="text-lg md:text-xl font-bold font-display text-gray-900 mt-3 leading-snug">
          {title}
        </h3>

        {/* Speaker Name Tag */}
        {speaker && (
          <div className="inline-flex items-center gap-1.5 mt-2.5 text-sm font-semibold text-gray-700">
            <User className="w-4 h-4 text-secondary" />
            <span>Hosted by: <span className="text-primary">{speaker}</span></span>
          </div>
        )}

        {/* Mobile-only toggle button */}
        <div className="mt-3 flex sm:hidden">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1 text-xs font-bold text-primary focus:outline-none"
          >
            {isExpanded ? 'Collapse' : 'View Details'}
          </button>
        </div>

        {/* Expandable Session Description */}
        <div className={`grid transition-all duration-300 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-gray-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}>
          <div className="overflow-hidden">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-sans">
              {description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
