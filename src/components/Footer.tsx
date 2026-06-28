"use client";

import React from 'react';
import Link from 'next/link';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-footer text-white/90 pt-20 pb-8 px-6 lg:px-20 border-t border-primary/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Top Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          
          {/* Brand & Description */}
          <div className="flex-1 max-w-sm ">
            <h2 className="text-3xl font-bold text-white mb-6">GaweWeb<span className="text-accent">.</span></h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Platform pembuatan website modern yang berfokus pada desain estetis dan pengalaman pengguna terbaik untuk segala kebutuhan digital Anda.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-footer transition-colors">
                <FiInstagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-footer transition-colors">
                <FiFacebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-footer transition-colors">
                <FaTiktok size={17} />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-1 flex flex-col sm:flex-row gap-10 sm:gap-16 justify-between lg:justify-around  ">
            
            {/* Layanan */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Layanan</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="/services/wedding" className="text-white/70 hover:text-accent transition-colors">Undangan Pernikahan</Link>
                </li>
                <li>
                  <Link href="/services/birthday" className="text-white/70 hover:text-accent transition-colors">Ucapan Ulang Tahun</Link>
                </li>
                <li>
                  <Link href="/services/company-profile" className="text-white/70 hover:text-accent transition-colors">Company Profile</Link>
                </li>
              </ul>
            </div>

            {/* Operasional */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Operasional</h3>
              <ul className="flex flex-col gap-4 text-white/70">
                <li className="flex flex-col">
                  <span className="text-accent text-sm font-medium mb-1">Jam Pelayanan</span>
                  <span className="mb-1">Setiap Hari</span>
                  <span>08.00 - 00.00 WIB</span>
                </li>
              </ul>
            </div>

            {/* Hubungi Kami */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Kontak</h3>
              <ul className="flex flex-col gap-4 text-white/70">
                <li className="flex flex-col">
                  <span className="text-accent text-sm font-medium mb-1">Email</span>
                  <a href="mailto:hello@gaweweb.com" className="hover:text-white transition-colors">hello@gaweweb.com</a>
                </li>
                <li className="flex flex-col mt-2">
                  <span className="text-accent text-sm font-medium mb-1">WhatsApp</span>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+62 812-3456-7890</a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Footer Content (Copyright) */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {currentYear} GaweWeb. All rights reserved.</p>
          {/* <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div> */}
        </div>

      </div>
    </footer>
  )
}
