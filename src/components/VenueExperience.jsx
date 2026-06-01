import React, { useState } from 'react';
import { MapPin, Mail, Phone, Car, Globe, Heart, Award, Bus } from 'lucide-react';

const HOTELS = [
  { name: 'Hotel Maurya Patna (5-Star)', dist: '1.2 km (4 mins drive)', spec: 'VIP accommodation, business lounge' },
  { name: 'Lemon Tree Premier (4-Star)', dist: '0.8 km (2 mins drive)', spec: 'Executive rooms, pool & gym access' },
  { name: 'Hotel Chanakya (3-Star)', dist: '1.5 km (5 mins drive)', spec: 'Standard rooms, local culinary suites' },
];

export default function VenueExperience() {
  const [activeTab, setActiveTab] = useState('hotels');

  return (
    <section id="contact" className="py-28 sm:py-32 bg-[#0B1020] bg-mesh-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 30% more whitespace */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-hidden">
          <span className="text-xs font-bold tracking-[0.25em] text-secondary uppercase bg-white/5 px-4 py-2 rounded-full border border-white/5">
            Venue & Logistics
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white mt-5 tracking-tight leading-tight">
            The Venue Experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-5 rounded-full" />
          <p className="text-gray-300 mt-6 font-sans leading-relaxed text-sm sm:text-base md:text-lg">
            Experience the cultural pulse of Bihar at the state-of-the-art Gyan Bhawan, situated on the scenic banks of the Ganga in central Patna.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-16">
          
          {/* Left Side: Directory Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 reveal-hidden">
            <div className="space-y-6">
              
              {/* Core coordinates */}
              <div className="p-6 rounded-3xl bg-[#172033]/85 border border-white/5 shadow-2xl">
                <h3 className="text-lg font-bold font-display text-white mb-4">Official Location</h3>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary">
                    <MapPin className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider">Gyan Bhawan Complex</h4>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1.5 leading-relaxed font-sans">
                      Gandhi Maidan Road, Muradpur, <br />
                      Patna, Bihar 800001, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Tabbed Hospitality logs */}
              <div className="p-6 rounded-3xl bg-[#172033]/85 border border-white/5 shadow-2xl">
                
                {/* Tab Switch Buttons */}
                <div className="flex gap-2 border-b border-white/5 pb-3 mb-4 text-xs font-bold uppercase tracking-wider">
                  <button
                    onClick={() => setActiveTab('hotels')}
                    className={`pb-1 cursor-pointer focus:outline-none ${
                      activeTab === 'hotels' ? 'text-secondary border-b-2 border-secondary' : 'text-gray-400'
                    }`}
                  >
                    Hotels
                  </button>
                  <button
                    onClick={() => setActiveTab('transit')}
                    className={`pb-1 ml-4 cursor-pointer focus:outline-none ${
                      activeTab === 'transit' ? 'text-secondary border-b-2 border-secondary' : 'text-gray-400'
                    }`}
                  >
                    Transport
                  </button>
                  <button
                    onClick={() => setActiveTab('access')}
                    className={`pb-1 ml-4 cursor-pointer focus:outline-none ${
                      activeTab === 'access' ? 'text-secondary border-b-2 border-secondary' : 'text-gray-400'
                    }`}
                  >
                    Accessibility
                  </button>
                </div>

                {/* Tab content 1: Hotels */}
                {activeTab === 'hotels' && (
                  <ul className="space-y-4 font-sans text-xs sm:text-sm">
                    {HOTELS.map((hotel, idx) => (
                      <li key={idx} className="flex gap-3 items-start border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                        <Heart className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-white block">{hotel.name}</span>
                          <span className="text-gray-400 block text-[10px] mt-0.5">Distance: {hotel.dist}</span>
                          <span className="text-gray-300 block text-xs mt-0.5">{hotel.spec}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tab content 2: Transit */}
                {activeTab === 'transit' && (
                  <ul className="space-y-4 font-sans text-xs sm:text-sm">
                    <li className="flex gap-3 items-start">
                      <Bus className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Airport Connections</span>
                        <span className="text-gray-300 text-xs mt-0.5">Jay Prakash Narayan Airport (8.5 km, 20 mins drive). Dedicated festival pick-ups and prepaid taxi counters are available.</span>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start mt-3">
                      <Car className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Patna Rail Junction</span>
                        <span className="text-gray-300 text-xs mt-0.5">3.5 km away (10 mins drive). Connects with major express lines from New Delhi, Mumbai, and Kolkata.</span>
                      </div>
                    </li>
                  </ul>
                )}

                {/* Tab content 3: Access */}
                {activeTab === 'access' && (
                  <ul className="space-y-4 font-sans text-xs sm:text-sm">
                    <li className="flex gap-3 items-start">
                      <Award className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">VIP Parking Slots</span>
                        <span className="text-gray-300 text-xs mt-0.5">Secure parking layout for 1,000+ four-wheelers and exclusive VIP corridors near Hall A.</span>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start mt-3">
                      <Heart className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Physical Assistance & Ramps</span>
                        <span className="text-gray-300 text-xs mt-0.5">Equipped with accessible ramp approaches, modern elevators, braille signals, and assistance desks in the main courtyard.</span>
                      </div>
                    </li>
                  </ul>
                )}

              </div>

            </div>

            {/* Direct helpline feeds */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4.5 h-4.5 text-secondary" />
                <a href="mailto:contact@gangalitfest.org" className="hover:text-white transition-colors">contact@gangalitfest.org</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4.5 h-4.5 text-secondary" />
                <span className="text-gray-300 font-semibold">+91 612 220 1234</span>
              </div>
            </div>

          </div>

          {/* Right Side: Embedded Live Map */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto rounded-3xl overflow-hidden border border-white/5 shadow-2xl reveal-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.525547461828!2d85.14247847595568!3d25.620677114389086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed583a21643c7d%3A0x6b10787e9154f30d!2sGyan%20Bhawan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gyan Bhawan, Patna Venue Map"
              className="w-full h-full min-h-[350px] lg:min-h-[450px]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
