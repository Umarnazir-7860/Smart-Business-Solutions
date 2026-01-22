"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { ClipboardList, Sun, Zap, ShieldCheck, Info } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutions = [
    { title: "Residential Solar", href: "/residential", icon: <Sun size={16} /> },
    { title: "Commercial Solar", href: "/commercial", icon: <Zap size={16} /> },
    { title: "Net Metering", href: "/net-metering", icon: <ShieldCheck size={16} /> },
    { title: "Solar Maintenance", href: "/maintenance", icon: <Info size={16} /> },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
      scrolled ? "bg-white shadow-xl py-2" : "bg-white/90 backdrop-blur-md py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO - Exact Match to SBS Branding */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/sbs-logo.png" 
            alt="Smart Business Solutions Logo"
            width={160}
            height={60}
            priority
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* CENTER MENU - Now Fully Filled */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-[#000066] font-extrabold text-[13px] uppercase tracking-tighter hover:text-[#83A625] transition">Home</Link>
          
          <div className="relative group" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button className="flex items-center gap-1 text-[#000066] font-extrabold text-[13px] uppercase tracking-tighter group-hover:text-[#83A625]">
              Solutions <FaCaretDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {open && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 p-4"
                >
                  {solutions.map((s, i) => (
                    <Link key={i} href={s.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#83A625]/10 text-[#000066] hover:text-[#83A625] transition font-bold text-sm mb-1 last:mb-0">
                      <span className="text-[#83A625]">{s.icon}</span> {s.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/projects" className="text-[#000066] font-extrabold text-[13px] uppercase tracking-tighter hover:text-[#83A625] transition">Our Projects</Link>
          <Link href="/about-us" className="text-[#000066] font-extrabold text-[13px] uppercase tracking-tighter hover:text-[#83A625] transition">About Us</Link>
          <Link href="/contact-us" className="text-[#000066] font-extrabold text-[13px] uppercase tracking-tighter hover:text-[#83A625] transition">Contact Us</Link>
        </div>

        {/* RIGHT AREA - Contact & CTA */}
        <div className="flex items-center gap-6">
          <a href="tel:+923000000000" className="hidden xl:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#83A625] flex items-center justify-center text-white shadow-lg shadow-[#83A625]/30">
              <FaPhoneAlt size={14} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase leading-none">Call Experts</span>
              <span className="text-[#000066] font-black text-sm tracking-tight">+92 300 1234567</span>
            </div>
          </a>

          <Link href="/free-survey">
            <button className="hidden sm:flex items-center gap-2 bg-[#83A625] text-white px-7 py-3.5 rounded-full font-black text-[11px] uppercase tracking-[0.1em] hover:bg-[#000066] transition-all duration-500 shadow-xl shadow-[#83A625]/20">
              <ClipboardList size={18} />
              Free Survey
            </button>
          </Link>

          {/* Mobile Menu Icon */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-[#000066] p-2">
            {mobileOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER (Solar Green Theme) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed inset-0 bg-white z-[150] p-8 flex flex-col">
            <div className="flex justify-between items-center mb-16">
              <Image src="/sbs-logo.png" alt="Logo" width={120} height={40} />
              <button onClick={() => setMobileOpen(false)} className="text-[#000066]"><FaTimes size={35} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {["Home", "Projects", "About Us", "Contact Us"].map((item) => (
                <Link key={item} href="/" onClick={() => setMobileOpen(false)} className="text-4xl font-black text-[#000066] uppercase tracking-tighter">
                  {item}
                </Link>
              ))}
              <Link href="/free-survey" className="bg-[#83A625] text-white text-center py-5 rounded-2xl font-black uppercase text-xl mt-4">
                Get Free Survey
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}