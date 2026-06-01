import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Award, Calendar, Clock, Globe } from 'lucide-react';

/**
 * World-class interactive Speaker Detail Modal in Midnight Dark Theme.
 * Triggered on speaker card clicks with fluid Framer Motion scale spring.
 */
export default function SpeakerModal({ isOpen, onClose, speaker }) {
  const [activeTab, setActiveTab] = useState('bio');

  if (!speaker) return null;

  const TABS = [
    { id: 'bio', label: 'Biography', icon: <Globe className="w-4 h-4" /> },
    { id: 'session', label: 'Scheduled Session', icon: <Calendar className="w-4 h-4" /> },
    { id: 'honors', label: 'Books & Honors', icon: <Award className="w-4 h-4" /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Luxury Modal Body - Overhauled for Dark Mode */}
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-[#172033] border border-white/5 text-white shadow-2xl flex flex-col md:flex-row z-10"
          >
            
            {/* Close trigger */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-red-500 hover:text-white text-gray-400 transition-all duration-200 focus:outline-none z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Portrait & Title */}
            <div className="w-full md:w-2/5 relative bg-[#0B1020] flex flex-col justify-end text-white select-none min-h-[250px] md:min-h-full">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent opacity-95" />
              
              <div className="relative p-6 z-10">
                <span className="inline-block px-2.5 py-0.5 rounded bg-secondary text-primary text-[10px] font-extrabold uppercase mb-2 tracking-widest font-sans">
                  GLF Faculty
                </span>
                <h3 className="text-2xl font-extrabold font-display leading-tight">
                  {speaker.name}
                </h3>
                <p className="text-secondary text-xs mt-1.5 font-bold leading-relaxed">
                  {speaker.designation}
                </p>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider mt-1 font-bold">
                  {speaker.organization}
                </p>
              </div>
            </div>

            {/* Right Column: Tab Panels */}
            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between bg-[#172033]/65">
              
              <div>
                {/* Custom Tab Headings */}
                <div className="flex border-b border-white/5 mb-6 gap-2">
                  {TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-1.5 pb-3 text-xs font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer focus:outline-none ${
                          isActive
                            ? 'border-secondary text-secondary'
                            : 'border-transparent text-gray-400 hover:text-white'
                        }`}
                      >
                        {tab.icon}
                        <span className="hidden sm:inline">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Contents */}
                <div className="min-h-[220px]">
                  
                  {/* Bio tab */}
                  {activeTab === 'bio' && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Distinguished Biography
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed font-sans">
                        {speaker.bio || `${speaker.name} is a highly celebrated scholar and authority in modern cultural studies. Having compiled numerous peer-reviewed papers and historical volumes, they actively advocate for the preservation of vernacular traditions and linguistic heritage across India.`}
                      </p>
                      
                      {/* Expertise badges */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {(speaker.tags || ['Literature', 'Cultural History', 'Anthology']).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-bold font-sans border border-white/5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Session tab */}
                  {activeTab === 'session' && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Scheduled Event
                      </h4>
                      
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/5 shadow-inner">
                        <h5 className="font-bold text-white text-base leading-snug font-display">
                          {speaker.sessionTitle || 'Keynote Dialogue: Civilisation & Rivers'}
                        </h5>
                        
                        <div className="flex gap-4 mt-3 text-xs font-bold text-gray-300">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-secondary" />
                            {speaker.sessionTime || '11:00 AM - 12:30 PM'}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-secondary" />
                            {speaker.sessionDay || 'Day 1 (Aug 15)'}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed font-sans">
                        {speaker.sessionDesc || 'A profound dialogue detailing how the flow of the Ganga river system has acted as a trade conduit, a spiritual nexus, and a central literary catalyst shaping oral storytelling conventions across generations.'}
                      </p>
                    </motion.div>
                  )}

                  {/* Honors tab */}
                  {activeTab === 'honors' && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Books Published & Awards
                      </h4>
                      
                      <ul className="space-y-2.5 text-sm text-gray-300">
                        {(speaker.books || [
                          'Ganga: The Flow of Civilization (2022)',
                          'Oral Archives & Ancient Bihar (2024)',
                          'Recipient of Sahitya Akademi fellowship',
                        ]).map((book, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start">
                            <BookOpen className="w-4.5 h-4.5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="font-semibold">{book}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                </div>
              </div>

              {/* Action buttons */}
              <div className="flex justify-end pt-4 border-t border-white/5">
                <button
                  onClick={onClose}
                  className="px-6 py-2 rounded-xl text-xs font-bold text-secondary hover:bg-white/5 border border-secondary transition-all duration-200 focus:outline-none cursor-pointer"
                >
                  Close Profile
                </button>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
