'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, MapPin, Users, ArrowRight, Share2 } from 'lucide-react'

const events = [
  {
    title: 'Islamitische Weekendschool',
    category: 'Onderwijs',
    date: 'Elke Zaterdag & Zondag',
    time: '10:00 - 14:00',
    image: '/images/Al-Abraar-083R.jpg.jpeg',
    featured: true
  },
  {
    title: 'Jongerenavond: Geloof in de Stad',
    category: 'Jongeren',
    date: 'Vrijdag 24 Mei',
    time: '19:30 - 22:00',
    image: '/images/Al-Abraar-023-scaled.jpg.jpeg',
  },
  {
    title: 'Koran Recitatie Competitie',
    category: 'Spiritueel',
    date: 'Zondag 2 Juni',
    time: '14:30 - 18:00',
    image: '/images/Al-Abraar-048-scaled.jpg.jpeg',
  }
]

export default function Events() {
  return (
    <section id="events" className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 text-[0.65rem] font-bold tracking-[0.3em] uppercase mb-6"
            >
              Agenda
            </motion.div>
            <h2 className="font-heading text-4xl lg:text-7xl font-bold text-white leading-tight">
              Aankomende <br />
              <span className="text-gold-gradient italic">Evenementen</span>
            </h2>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline-gold px-10 py-5 rounded-3xl"
          >
            Bekijk Volledige Agenda
          </motion.button>
        </div>

        {/* Dynamic Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-[3rem] overflow-hidden bg-slate-900/40 border border-white/5 transition-all duration-700 hover:border-gold/30 shadow-2xl
                ${event.featured ? 'lg:col-span-8' : 'lg:col-span-4'}
              `}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden ${event.featured ? 'h-[400px] lg:h-[500px]' : 'h-[300px]'}`}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-8 left-8">
                   <div className="px-5 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                     {event.category}
                   </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-10 lg:p-12 relative z-10 -mt-20">
                <div className="flex flex-wrap items-center gap-6 mb-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-gold/50" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-gold/50" />
                    Community
                  </div>
                </div>

                <h3 className={`font-heading font-bold text-white mb-8 leading-tight transition-colors duration-500 group-hover:text-gold-light
                  ${event.featured ? 'text-4xl lg:text-5xl' : 'text-2xl lg:text-3xl'}
                `}>
                  {event.title}
                </h3>

                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-gold hover:border-gold transition-all duration-500">
                      <Share2 size={18} />
                    </button>
                  </div>
                  <button className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-white group-hover:gap-5 transition-all duration-500">
                    Aanmelden <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Shimmer on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}