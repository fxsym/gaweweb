"use client";

import React from 'react';
import { motion } from 'motion/react';
import { FiMail, FiMapPin, FiMessageCircle, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function ContactSection() {
  // Ganti dengan nomor WhatsApp dan pesan default yang diinginkan
  const whatsappNumber = "6281234567890"; 
  const whatsappMessage = encodeURIComponent("Halo, saya tertarik dengan layanan pembuatan website Anda. Bisa minta info lebih lanjut?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="w-full py-24 px-6 lg:px-20 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface rounded-3xl p-8 lg:p-16 shadow-xl border border-border flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3" />

          {/* Left Text */}
          <div className="flex-1 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Hubungi Kami</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-text mb-6 leading-tight">
                Mari Diskusikan <br/> <span className="text-primary">Website Impian</span> Anda
              </h3>
              <p className="text-text-secondary text-lg mb-8 max-w-lg">
                Punya pertanyaan atau ingin berkonsultasi mengenai kebutuhan website Anda? Tim kami siap membantu memberikan solusi terbaik.
              </p>
            </motion.div>
          </div>

          {/* Right Contact Details */}
          <div className="flex-1 w-full lg:max-w-md relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* Contact Card 1: Email */}
              <Link href="mailto:hello@gaweweb.com" className="flex items-start gap-5 p-6 rounded-2xl bg-bg border border-border hover:border-primary/50 hover:shadow-md transition-all group cursor-pointer block">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="text-text font-bold text-lg mb-1 group-hover:text-primary transition-colors">Email</h4>
                  <p className="text-text-secondary">hello@gaweweb.com</p>
                </div>
              </Link>

              {/* Contact Card 2: WhatsApp */}
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 p-6 rounded-2xl bg-bg border border-border hover:border-[#25D366]/50 hover:shadow-md transition-all group cursor-pointer block">
                <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-110 transition-transform">
                  <FiMessageCircle size={24} />
                </div>
                <div>
                  <h4 className="text-text font-bold text-lg mb-1 group-hover:text-[#25D366] transition-colors">WhatsApp</h4>
                  <p className="text-text-secondary">+{whatsappNumber}</p>
                </div>
              </Link>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}
