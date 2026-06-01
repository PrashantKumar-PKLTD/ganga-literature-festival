import React, { useState } from 'react';
import SpeakerCard from './SpeakerCard';
import SpeakerModal from './SpeakerModal';
import { Search, SlidersHorizontal } from 'lucide-react';

const SPEAKERS = [
  {
    name: 'Prof. Kedarnath Singh',
    designation: 'Keynote Speaker & Eminent Scholar',
    organization: 'Indian Academy of Literature',
    image: '/images/speaker_1.png',
    tags: ['Academic', 'Poet', 'Linguistic History'],
    bio: 'Prof. Kedarnath Singh is a celebrated national literary critique and academician. A recipient of the highest national literary fellowships, his lifework examines oral structures and historical preservation in the Ganga basin.',
    sessionTitle: 'Keynote Dialogue: Rivers as Lifelines of Intellectual Culture',
    sessionTime: '11:00 AM - 12:30 PM',
    sessionDay: 'Day 1 (Aug 15)',
    sessionDesc: 'A profound lecture detailing how the Ganga river ecosystem has acted as a trade conduit, a spiritual nexus, and a central literary catalyst shaping oral storytelling conventions across generations.',
    books: [
      'Ganga: The Flow of Civilization (2022)',
      'Oral Archives & Ancient Bihar (2024)',
      'Recipient of Sahitya Akademi fellowship',
    ],
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      globe: 'https://google.com',
    },
  },
  {
    name: 'Dr. Ananya Sen',
    designation: 'Professor of Cultural Anthropology & Author',
    organization: 'Delhi University',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    tags: ['Academic', 'Folk Oral Traditions', 'Heritage Preservation'],
    bio: 'Dr. Ananya Sen is an authority on Indian folk-cultures. She leads numerous international preservation cohorts detailing the oral epics sung by native communities on the river banks.',
    sessionTitle: 'Panel: The Art and Ethics of Translating Vernaculars',
    sessionTime: '02:00 PM - 03:30 PM',
    sessionDay: 'Day 1 (Aug 15)',
    sessionDesc: 'Exploring strategies of translating classic regional Hindi, Maithili, Bhojpuri, and Magahi scripts into English and global languages, making them accessible to global bookshelves.',
    books: [
      'Voices of the Soil: Folk Epics (2021)',
      'Linguistic Rivers of East India (2023)',
    ],
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      globe: 'https://google.com',
    },
  },
  {
    name: 'Vikram Sethi',
    designation: 'Celebrated Novelist & Sahitya Akademi Awardee',
    organization: 'International Writers Circle',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    tags: ['Author', 'Entrepreneur', 'Fiction Crafting'],
    bio: 'Vikram Sethi is a best-selling novelist, Sahitya Akademi awardee, and digital publisher. He leads digital publishing startups that connect South Asian authors with global readers.',
    sessionTitle: 'Panel: The Art and Ethics of Translating Vernaculars',
    sessionTime: '02:00 PM - 03:30 PM',
    sessionDay: 'Day 1 (Aug 15)',
    sessionDesc: 'Exploring strategies of translating classic regional Hindi, Maithili, Bhojpuri, and Magahi scripts into English and global languages, making them accessible to global bookshelves.',
    books: [
      'Ripples on Gandhi Maidan (2020)',
      'Shadows of the Ghats (2024)',
    ],
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      globe: 'https://google.com',
    },
  },
  {
    name: 'Dr. Priya Nair',
    designation: 'Executive Director & Policy Scholar',
    organization: 'Heritage Preservation Association',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    tags: ['Academic', 'Policy Maker', 'Preservation Tech'],
    bio: 'Dr. Priya Nair coordinates preservation policies across ancient heritage sites. Her work drafts national digitization archives bridging government corridors with technology panels.',
    sessionTitle: 'Colloquium: Digital Media & Preservation of Ancient Archives',
    sessionTime: '09:30 AM - 10:30 AM',
    sessionDay: 'Day 2 (Aug 16)',
    sessionDesc: 'A futuristic tech panel exploring how high-definition scanning, OCR algorithms, and open-source databases are saving fragile manuscripts, palm leaves, and rare editions for posterity.',
    books: [
      'Preserving Palm Leaves (2019)',
      'Nalanda: The Digital Blueprint (2023)',
    ],
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      globe: 'https://google.com',
    },
  },
  {
    name: 'Prof. Ramachandra Guha',
    designation: 'Eminent Environmentalist & Columnist',
    organization: 'Institute of Historical Research',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
    tags: ['Author', 'Academic', 'Ecological Lit'],
    bio: 'Prof. Ramachandra Guha is a renowned environmental historian. His research links modern developmental literature with the preservation of river basins and natural heritage.',
    sessionTitle: 'Dialogue: Ecology, Nature, and the Anthropocene in Literature',
    sessionTime: '10:30 AM - 12:00 PM',
    sessionDay: 'Day 2 (Aug 16)',
    sessionDesc: 'Discussing the deep ecological narratives in classical and modern writing. How books and literature play a role in river preservation, ecological consciousness, and environmental activism in the modern age.',
    books: [
      'Lifelines of India (2018)',
      'Green Pages: Eco-History (2022)',
    ],
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      globe: 'https://google.com',
    },
  },
  {
    name: 'Meera Joshi',
    designation: 'Poet, Social Analyst & Critic',
    organization: 'Jawaharlal Nehru University',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    tags: ['Poet', 'Modern Poetry', 'Social Realism'],
    bio: 'Meera Joshi is a contemporary poet and critic. Her poetry highlights themes of migration, riverbanks, urban shifts, and female narratives in Indian writing.',
    sessionTitle: 'Day 1 Synthesis & Poetry readings on the River Banks',
    sessionTime: '02:00 PM - 03:30 PM',
    sessionDay: 'Day 2 (Aug 16)',
    sessionDesc: 'Held in the open Gyan Bhawan amphitheater directly overlooking the Ganga. Features classical compositions, modern free-verse, and creative storytelling in an immersive acoustic environment.',
    books: [
      'Ganga at Dusk: Verses (2021)',
      'Socio-Literary Waves (2024)',
    ],
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      globe: 'https://google.com',
    },
  },
];

const FILTERS = [
  { id: 'all', label: 'All Faculty' },
  { id: 'author', label: 'Authors' },
  { id: 'poet', label: 'Poets' },
  { id: 'academic', label: 'Academics' },
  { id: 'entrepreneur', label: 'Entrepreneurs' },
  { id: 'policy maker', label: 'Policy Makers' },
];

export default function SpeakersSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSpeakerClick = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  // Perform dynamic filtering based on category buttons and search fields
  const filteredSpeakers = SPEAKERS.filter((speaker) => {
    const matchesFilter =
      activeFilter === 'all' ||
      speaker.tags.some((tag) => tag.toLowerCase() === activeFilter.toLowerCase());

    const matchesSearch =
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.organization.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="speakers" className="py-28 sm:py-32 bg-[#0B1020] bg-mesh-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 30% more whitespace */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-hidden">
          <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase bg-white/5 px-4 py-2 rounded-full border border-white/5">
            Eminent Faculty
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white mt-5 tracking-tight leading-tight">
            Distinguished Speakers
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-5 rounded-full" />
          <p className="text-gray-300 mt-6 font-sans leading-relaxed text-sm sm:text-base md:text-lg">
            Hear from an extraordinary line-up of global thinkers, award-winning authors, environmental historians, and creators as they deliberate on literature and culture.
          </p>
        </div>

        {/* Dynamic Filters & Search Dashboard */}
        <div className="rounded-3xl border border-white/5 bg-[#172033]/60 backdrop-blur-md p-6 shadow-2xl mb-12 reveal-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Filter tags panel */}
            <div className="flex flex-wrap gap-2 items-center">
              <div className="flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-wider mr-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filter:
              </div>
              {FILTERS.map((cat) => {
                const isSelected = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer focus:outline-none ${
                      isSelected
                        ? 'bg-secondary border-transparent text-primary shadow-lg font-extrabold'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Live Search bar */}
            <div className="relative w-full md:max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-xl border border-white/5 bg-[#172033] text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary/20 focus:border-secondary focus:outline-none transition-all"
                placeholder="Search faculty..."
              />
            </div>

          </div>
        </div>

        {/* Speakers Card Grid */}
        {filteredSpeakers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredSpeakers.map((speaker, index) => (
              <div
                key={speaker.name}
                onClick={() => handleSpeakerClick(speaker)}
                className="cursor-pointer"
              >
                <SpeakerCard
                  name={speaker.name}
                  designation={speaker.designation}
                  organization={speaker.organization}
                  image={speaker.image}
                  social={speaker.social}
                  tags={speaker.tags}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#172033]/30 border border-white/5 rounded-3xl backdrop-blur-md">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">No faculty matches found</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-bold text-secondary hover:underline focus:outline-none"
            >
              Clear Search & Filters
            </button>
          </div>
        )}

      </div>

      {/* SpeakerModal details portal */}
      <SpeakerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        speaker={selectedSpeaker}
      />
    </section>
  );
}
