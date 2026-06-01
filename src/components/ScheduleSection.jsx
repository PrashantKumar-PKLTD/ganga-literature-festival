import React, { useState } from 'react';
import ScheduleCard from './ScheduleCard';
import { Calendar, Search, Filter } from 'lucide-react';

const SCHEDULE_DATA = {
  day1: [
    {
      time: '09:00 AM - 10:00 AM',
      category: 'ceremony',
      title: 'Delegate Registration & Morning Tea',
      speaker: '',
      description: 'Collect your premium festival badges, delegate kits, and food coupons. Morning hot tea and traditional snacks will be served in the Gyan Bhawan exhibition lobby.',
    },
    {
      time: '10:00 AM - 11:00 AM',
      category: 'ceremony',
      title: 'Lamp Lighting Ceremony & Inaugural Address',
      speaker: 'Governor of Bihar & Chief Guests',
      description: 'The formal opening of the Ganga Literature Festival 2026. Includes the auspicious traditional lamp lighting ceremony, opening Vedic hymns, and a special message from our chief guests on Bihar\'s historical and intellectual contributions to human civilisation.',
    },
    {
      time: '11:00 AM - 12:30 PM',
      category: 'keynote',
      title: 'Keynote Dialogue: Rivers as Lifelines of Intellectual Culture',
      speaker: 'Prof. Kedarnath Singh',
      description: 'Our premier address for the opening day. Explore the historic role of the Ganga river basin in shaping oral narratives, classical literature, Sanskrit treatises, and the emergence of ancient universities such as Nalanda and Vikramshila.',
    },
    {
      time: '01:00 PM - 02:00 PM',
      category: 'other',
      title: 'Networking Buffet Lunch & Palm-Leaf Manuscript Tour',
      speaker: '',
      description: 'Enjoy a rich buffet showcasing local and international culinary traditions. During this hour, explore the premium heritage manuscript gallery in the basement lounge.',
    },
    {
      time: '02:00 PM - 03:30 PM',
      category: 'panel',
      title: 'Panel Discussion: The Art and Ethics of Translating Vernaculars',
      speaker: 'Dr. Ananya Sen, Vikram Sethi & Dr. Priya Nair',
      description: 'A deep discussion on the challenges and strategies of translating classic regional Hindi, Maithili, Bhojpuri, and Magahi scripts into English and global languages, making them accessible to global bookshelves.',
    },
    {
      time: '04:00 PM - 05:00 PM',
      category: 'performance',
      title: 'Evening Poetry Recitation & Day 1 Synthesis',
      speaker: 'Moderated by Meera Joshi',
      description: 'A premium recital where legendary and youth poets recite verses depicting nature, rivers, migration, and societal changes, synthesizing the reflections of Day 1.',
    },
  ],
  day2: [
    {
      time: '09:30 AM - 10:30 AM',
      category: 'panel',
      title: 'Morning Colloquium: Digital Media & Preservation of Ancient Archives',
      speaker: 'Dr. Priya Nair & Technical Curators',
      description: 'A futuristic tech panel exploring how high-definition scanning, OCR algorithms, and open-source databases are saving fragile manuscripts, palm leaves, and rare editions for posterity.',
    },
    {
      time: '10:30 AM - 12:00 PM',
      category: 'keynote',
      title: 'Keynote Dialogue: Ecology, Nature, and the Anthropocene in Literature',
      speaker: 'Prof. Ramachandra Guha',
      description: 'Discussing the deep ecological narratives in classical and modern writing. How books and literature play a role in river preservation, ecological consciousness, and environmental activism in the modern age.',
    },
    {
      time: '12:00 PM - 01:00 PM',
      category: 'workshop',
      title: 'Interactive Book Pitching & Literary Agent Meetups',
      speaker: 'Publishing Representatives',
      description: 'A pitch session where selected young writers get 3 minutes each to pitch their manuscripts directly to editors of major national and international publishing firms.',
    },
    {
      time: '01:00 PM - 02:00 PM',
      category: 'other',
      title: 'Networking Buffet Lunch',
      speaker: '',
      description: 'Relax, network, and engage in informal interactions with literary agents, media experts, and speakers in the open courtyard.',
    },
    {
      time: '02:00 PM - 03:30 PM',
      category: 'performance',
      title: 'Poetry Readings on the River Banks',
      speaker: 'Meera Joshi & Local Youth Cohort',
      description: 'Held in the open Gyan Bhawan amphitheater directly overlooking the Ganga. Features classical compositions, modern free-verse, and creative storytelling in an immersive acoustic environment.',
    },
    {
      time: '04:00 PM - 05:30 PM',
      category: 'ceremony',
      title: 'Valedictory Ceremony & Sarod Performance',
      speaker: 'Classical Artists & Organizing Committee',
      description: 'Concludes the 2-day Ganga Literature Festival 2026. Features the distribution of participant certificates, festival honors, and a soothing instrumental Sarod concert symbolizing the serene flow of the Ganga.',
    },
  ],
};

const CATEGORIES = [
  { id: 'all', label: 'All Sessions' },
  { id: 'keynote', label: 'Keynotes' },
  { id: 'panel', label: 'Panels' },
  { id: 'workshop', label: 'Workshops' },
  { id: 'performance', label: 'Performances' },
  { id: 'ceremony', label: 'Ceremonies' },
];

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState('day1');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const activeSessions = SCHEDULE_DATA[activeDay];

  // Perform dynamic filtering based on category chips and search queries
  const filteredSessions = activeSessions.filter((session) => {
    const matchesCategory = categoryFilter === 'all' || session.category === categoryFilter;
    
    const matchesSearch =
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (session.speaker && session.speaker.toLowerCase().includes(searchQuery.toLowerCase())) ||
      session.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="schedule" className="py-20 bg-white overflow-hidden bg-mesh-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
          <span className="text-sm font-bold tracking-widest text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
            Festival Agenda
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 mt-4 tracking-tight">
            Explore the Event Schedule
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-5 font-sans leading-relaxed text-sm sm:text-base md:text-lg">
            Plan your attendance. Seamlessly toggle between Day 1 and Day 2, filter by session categories, or search by host speakers.
          </p>
        </div>

        {/* Day & Search Filters Dashboard */}
        <div className="rounded-3xl border border-gray-100 bg-white/60 backdrop-blur-md p-5 sm:p-6 shadow-xl mb-10 reveal-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            
            {/* Day Switcher */}
            <div className="inline-flex p-1 rounded-2xl bg-neutral-bg border border-gray-100 shadow-inner relative z-10 w-fit">
              <button
                onClick={() => setActiveDay('day1')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 focus:outline-none ${
                  activeDay === 'day1'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-500 hover:text-primary'
                }`}
              >
                <Calendar className="w-4 h-4" />
                Day 01
              </button>
              <button
                onClick={() => setActiveDay('day2')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 focus:outline-none ${
                  activeDay === 'day2'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-500 hover:text-primary'
                }`}
              >
                <Calendar className="w-4 h-4" />
                Day 02
              </button>
            </div>

            {/* Keyword Search Input */}
            <div className="relative flex-grow max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-xl border border-gray-200 bg-white/70 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all"
                placeholder="Search sessions or speakers..."
              />
            </div>

          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-gray-100/70">
            {CATEGORIES.map((cat) => {
              const isSelected = categoryFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-200 border focus:outline-none ${
                    isSelected
                      ? 'bg-secondary border-transparent text-primary shadow'
                      : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Wrap */}
        <div className="relative">
          {filteredSessions.length > 0 ? (
            <div className="animate-fade-in">
              {filteredSessions.map((session, index) => (
                <ScheduleCard
                  key={`${activeDay}-${session.category}-${index}`}
                  time={session.time}
                  title={session.title}
                  speaker={session.speaker}
                  description={session.description}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/40 border border-gray-100 rounded-3xl backdrop-blur-md">
              <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">No matching sessions found</p>
              <button
                onClick={() => {
                  setCategoryFilter('all');
                  setSearchQuery('');
                }}
                className="mt-4 text-xs font-bold text-primary hover:underline focus:outline-none"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
