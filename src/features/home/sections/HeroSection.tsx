"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiArrowRight, FiPlayCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'motion/react';

const mockups = [
  {
    desktop: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    mobile: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600"
  },
  {
    desktop: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    mobile: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600"
  },
  {
    desktop: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200",
    mobile: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=600"
  },
  {
    desktop: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200",
    mobile: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=600"
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockups.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-20 py-30 xl:py-20 bg-bg">
      {/* Decorative background blur shapes */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Content (Text) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-start text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-text-secondary">Layanan Pembuatan Website Premium</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-[1.15] tracking-tight mb-6">
            Wujudkan Website Impian untuk Setiap <span className="text-primary">Momen & Bisnismu</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl leading-relaxed">
            Mulai dari undangan pernikahan yang elegan, ucapan ulang tahun interaktif, hingga company profile profesional. Desain eksklusif, responsif, dan siap memukau audiensmu.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-surface px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Buat Website Sekarang
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-surface hover:bg-border text-text px-8 py-4 rounded-full font-semibold transition-all border border-border hover:-translate-y-1">
              <FiPlayCircle className="text-primary" size={22} />
              Lihat Layanan
            </button>
          </div>
          
          {/* <div className="mt-12 flex items-center gap-6 text-text-secondary text-sm font-medium">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-surface bg-border overflow-hidden">
                  <Image 
                    src={`https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=100&h=100`} 
                    alt="User" 
                    width={40} height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <p>Dipercaya oleh <span className="text-primary font-bold">10,000+</span> Klien</p>
          </div> */}
        </motion.div>

        {/* Right Content (Images placeholder) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 w-full relative"
        >
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
            
            {/* Desktop / Website Mockup (Landscape) */}
            <div className="absolute top-[20%] -right-2 xl:-right-20 w-[85%] aspect-video bg-surface rounded-xl shadow-2xl border border-border overflow-hidden flex flex-col transition-transform duration-500 hover:-translate-y-2 hover:shadow-3xl z-10">
              {/* Browser Top Bar */}
              <div className="h-6 sm:h-8 bg-border/30 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27C93F]"></div>
              </div>
              {/* Browser Content */}
              <div className="relative flex-1 w-full bg-border overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`desktop-${currentIndex}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={mockups[currentIndex].desktop}
                      alt={`Mockup Website Desktop ${currentIndex + 1}`}
                      fill
                      className="object-cover object-top"
                      priority={currentIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile / Smartphone Mockup (Portrait) */}
            <div className="absolute bottom-[5%] left-[5%] w-[35%] sm:w-[30%] aspect-[9/19] bg-surface rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border-4 sm:border-8 border-surface overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-3xl z-20">
              {/* Phone Notch/Dynamic Island */}
              <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-[35%] h-4 sm:h-5 bg-border/80 rounded-full z-10 backdrop-blur-sm"></div>
              {/* Phone Content */}
              <div className="relative w-full h-full bg-border overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`mobile-${currentIndex}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={mockups[currentIndex].mobile}
                      alt={`Mockup Website Mobile ${currentIndex + 1}`}
                      fill
                      className="object-cover object-top"
                      priority={currentIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Decorative Element
            <div className="absolute top-[40%] left-0 z-30 bg-surface rounded-xl p-3 shadow-lg flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-primary">
                ✨
              </div>
              <div>
                <p className="text-xs text-text-secondary font-medium">Responsif</p>
                <p className="text-sm text-text font-bold">Semua Layar</p>
              </div>
            </div> */}

          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
