"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: "Undangan Pernikahan",
    description: "Buat undangan digital elegan dengan berbagai tema romantis yang memukau para tamu undangan Anda.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    link: "/services/wedding"
  },
  {
    id: 2,
    title: "Ucapan Ulang Tahun",
    description: "Rayakan hari jadi dengan website ucapan interaktif penuh kejutan untuk orang tersayang.",
    image: "https://images.unsplash.com/photo-1530103862676-de8892ebe643?auto=format&fit=crop&q=80&w=800",
    link: "/services/birthday"
  },
  {
    id: 3,
    title: "Company Profile",
    description: "Tingkatkan kredibilitas bisnis Anda melalui website company profile yang profesional dan modern.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    link: "/services/company-profile"
  }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link href={service.link} className="block w-full h-full" style={{ perspective: "1000px" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-[420px] rounded-[2rem] overflow-hidden shadow-lg cursor-pointer bg-border border border-border"
      >
        <div 
          style={{ transform: "translateZ(30px)" }} 
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
        </div>
        
        {/* Content */}
        <div style={{ transform: "translateZ(80px)" }} className="absolute inset-x-0 bottom-0 p-8 text-white z-10">
          <div className="flex flex-col transform translate-y-[100px] group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <h4 className="text-2xl font-bold mb-4 drop-shadow-md">
              {service.title}
            </h4>
            
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <p className="text-white/90 leading-relaxed mb-6 drop-shadow-sm">
                {service.description}
              </p>
              
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                <span>Lihat Detail</span>
                <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function ServiceSection() {
  return (
    <section className="w-full py-24 px-6 lg:px-20 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Layanan Kami</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-text mb-4">Solusi Website Untuk <br className="hidden md:block"/> Setiap Kebutuhan Anda</h3>
            <p className="text-text-secondary text-lg">
              Kami menghadirkan website dengan desain estetis, responsif, dan mudah digunakan untuk berbagai keperluan Anda.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  )
}
