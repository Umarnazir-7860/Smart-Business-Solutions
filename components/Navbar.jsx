"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { ClipboardList, Sun, Zap, ShieldCheck, Info } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false); // Desktop dropdown state
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile drawer state
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect to change navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu khulne par screen scroll lock karna
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  const solutions = [
    { title: "Residential Solar", href: "/residential-solar", icon: <Sun size={16} /> },
    { title: "Commercial Solar", href: "/commercial-solar", icon: <Zap size={16} /> },
    { title: "Net Metering", href: "/net-metering", icon: <ShieldCheck size={16} /> },
    { title: "Solar Maintenance", href: "/solar-maintenance", icon: <Info size={16} /> },
  ];

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Our Projects", href: "/our-projects" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
          scrolled ? "bg-white shadow-xl py-2" : "bg-white/90 backdrop-blur-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/SBS-logo.png" // Make sure this exact file name exists in your 'public' folder
              alt="Smart Business Solutions Logo"
              width={160}
              height={60}
              priority
              className="h-10 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* --- CENTER MENU (DESKTOP) --- */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-[#000066] font-extrabold text-[13px] uppercase tracking-tighter hover:text-[#83A625] transition"
            >
              Home
            </Link>

            {/* SOLUTIONS DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Link
                href="/solutions"
                className="flex items-center gap-1 text-[#000066] font-extrabold text-[13px] uppercase tracking-tighter group-hover:text-[#83A625] transition cursor-pointer"
              >
                Solutions{" "}
                <FaCaretDown
                  className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
              </Link>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute left-0 mt-2 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 p-4"
                  >
                    {solutions.map((s, i) => (
                      <Link
                        key={i}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#83A625]/10 text-[#000066] hover:text-[#83A625] transition font-bold text-sm mb-1 last:mb-0"
                      >
                        <span className="text-[#83A625]">{s.icon}</span> {s.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {menuItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#000066] font-extrabold text-[13px] uppercase tracking-tighter hover:text-[#83A625] transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* --- RIGHT AREA (CONTACT & BUTTON) --- */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+923001234567"
              className="hidden xl:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#83A625] flex items-center justify-center text-white shadow-lg shadow-[#83A625]/30">
                <FaPhoneAlt size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase leading-none">Call Experts</span>
                <span className="text-[#000066] font-black text-sm tracking-tight">+92 300 1234567</span>
              </div>
            </a>

            <Link href="/free-survey" className="hidden sm:block">
              <button className="flex items-center gap-2 bg-[#83A625] text-white px-6 py-3 rounded-full font-black text-[11px] uppercase tracking-[0.1em] hover:bg-[#000066] transition-all duration-500 shadow-xl shadow-[#83A625]/20">
                <ClipboardList size={18} />
                Free Survey
              </button>
            </Link>

            {/* MOBILE HAMBURGER ICON */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-[#000066] p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FaBars size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE FULL SCREEN MENU --- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-[#000066]/60 backdrop-blur-sm z-[140] lg:hidden"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-[150] p-8 shadow-2xl flex flex-col lg:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <Image src="/SBS-logo.png" alt="Logo" width={110} height={40} className="object-contain" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-[#000066] p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <FaTimes size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-6 overflow-y-auto">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-black text-[#000066] uppercase tracking-tighter hover:text-[#83A625] transition"
                  >
                    {item.name}
                  </Link>
                ))}

                <hr className="border-gray-100 my-2" />

                <div className="space-y-4">
                  <p className="text-[#83A625] font-bold text-xs uppercase tracking-[0.2em]">Our Solutions</p>
                  <div className="grid grid-cols-1 gap-4">
                    {solutions.map((s, i) => (
                      <Link
                        key={i}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-4 text-lg font-bold text-[#000066]/80 hover:text-[#83A625] transition"
                      >
                        <span className="text-[#83A625] bg-[#83A625]/10 p-2 rounded-lg">{s.icon}</span>
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <Link
                    href="/free-survey"
                    onClick={() => setMobileOpen(false)}
                    className="flex justify-center items-center gap-3 bg-[#83A625] text-white py-4 rounded-2xl font-black uppercase text-lg shadow-lg shadow-[#83A625]/30"
                  >
                    <ClipboardList size={22} />
                    Get Free Survey
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}