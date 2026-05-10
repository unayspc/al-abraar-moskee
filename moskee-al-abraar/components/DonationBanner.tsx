'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, ArrowRight, ShieldCheck, Info } from 'lucide-react'

export default function DonationBanner() {
  return (
    <section id="doneer" className="relative py-32 lg:py-48 overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Al-Abraar-019-scaled-e1663595410766.jpg.jpeg"
          alt="Moskee Al-Abraar Donatie"
          fill
          className="object-cover opacity-5 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Visual Impact */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] group"
            >
              <Image
                src="/images/Al-Abraar-019-scaled-e1663595410766.jpg.jpeg"
                alt="Support Al-Abraar"
                fill
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-emerald-950/20 mix-blend-overlay" />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 p-10 bg-white/90 backdrop-blur-3xl rounded-[3rem] border border-black/5 shadow-2xl">
                <div className="flex items-center gap-5 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                    <Heart size={28} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] mb-1">Impact</p>
                    <h4 className="font-heading text-2xl font-bold text-black">Uw steun bouwt</h4>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '75%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                    />
                  </div>
                  <p className="text-[11px] font-medium text-black/40 flex justify-between">
                    <span>Project: Onderhoud & Educatie</span>
                    <span className="text-emerald-600 font-bold">75% Voltooid</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: CTA Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[0.65rem] font-bold tracking-[0.3em] uppercase mb-10">
                Liefdadigheid
              </div>

              <h2 className="font-heading text-5xl lg:text-7xl font-bold text-slate-950 mb-10 leading-[1.1]">
                Investeer in de <br />
                <span className="text-emerald-600 italic">Aakhirah</span>
              </h2>

              <p className="text-slate-500 text-lg lg:text-2xl font-light leading-relaxed mb-12 max-w-2xl">
                Uw donaties stellen ons in staat om een veilig tehuis, kwalitatief onderwijs en spirituele leiding te blijven bieden aan onze gemeenschap. 
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                <div className="flex items-start gap-6 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all duration-500">
                  <ShieldCheck className="text-emerald-600 flex-shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold text-slate-950 mb-2">ANBI Gecertificeerd</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Uw giften zijn fiscaal aftrekbaar bij de Belastingdienst.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all duration-500">
                  <Info className="text-emerald-600 flex-shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold text-slate-950 mb-2">100% Transparantie</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Wij publiceren jaarlijks ons beleidsplan en financiële verantwoording.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a 
                  href="https://bunq.me/alabraareindhoven" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary !px-16 !py-6 !text-lg w-full sm:w-auto justify-center group shadow-[0_20px_40px_rgba(27,94,59,0.2)]"
                >
                  Nu Doneren
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-500" />
                </a>
                <p className="text-slate-400 text-sm font-medium">
                  Scan de QR-code of klik om te doneren.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}