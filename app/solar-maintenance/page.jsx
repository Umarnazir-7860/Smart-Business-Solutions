import React from 'react';
import Image from 'next/image';
import FadeIn from "../../components/MotionWrapper";
import { Wrench, ShieldCheck, ArrowRight, Thermometer, Droplets, ClipboardList } from "lucide-react";

export default function MaintenancePage() {
  const services = [
    { title: "Thermal Imaging", desc: "Laser tools se panels ke 'Hotspots' check karna taake fire risk zero ho.", icon: <Thermometer size={30} /> },
    { title: "Pressure Washing", desc: "Automated aur manual cleaning taake dust ki wajah se production kam na ho.", icon: <Droplets size={30} /> },
    { title: "Torque Testing", desc: "Har bolt aur structure ki tightning check karna taake tufaan mein system safe rahe.", icon: <Wrench size={30} /> },
    { title: "Health Audit", desc: "Monthly performance report aur inverter health check-up.", icon: <ClipboardList size={30} /> },
  ];

  return (
    <main className="bg-white">
   {/* --- FULL BG MAINTENANCE HERO --- */}
      <section className="relative h-screen flex items-center bg-[#000066] overflow-hidden">
        
        {/* The Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/maintainance.jpg" 
            alt="Solar Maintenance Diagnostic"
            fill
            className="object-cover object-center scale-105" // Slight scale for depth
            priority
          />
          {/* Overlay: Left side dark for text, Right side clear for the laser tool */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000066] via-[#000066]/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000066] via-transparent to-transparent opacity-50 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl mt-20"> {/* Text restricted to 50% width for balance */}
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-[#83A625]"></span>
                <span className="text-[#83A625] font-black uppercase tracking-[0.3em] text-xs">Technical Operations</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter">
                Pure <br /> <span className="text-[#83A625]">Performance.</span>
              </h1>
              
              <p className="text-white/80 mt-8 text-xl font-medium leading-relaxed max-w-lg">
                Your solar plant is a financial asset. We protect it with <span className="text-white">Scientific Audits</span> and precision maintenance for 25+ years.
              </p>
              
              <div className="mt-12 flex flex-wrap items-center gap-8">
                <button className="bg-[#83A625] hover:bg-white text-white hover:text-[#000066] px-12 py-5 rounded-full font-black uppercase text-sm tracking-widest transition-all duration-300 shadow-2xl">
                  Book an Audit
                </button>
              
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-[#83A625] hover:shadow-xl transition-all group">
              <div className="text-[#83A625] mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h4 className="text-[#000066] font-black uppercase text-lg mb-3">{s.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TECHNICAL AUDIT SECTION --- */}
      <section className="py-24 bg-[#000066] rounded-[4rem] mx-4 mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left">
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden border-4 border-[#83A625] opacity-50">
              <Image 
                src="/regular-audit.jpg" // Wiring aur technical check wali image
                alt="Technical Solar Audit" 
                fill 
                className="object-cover" 
              />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <h2 className="text-4xl font-black text-white uppercase leading-tight mb-6">
              Why Regular <br /> <span className="text-[#83A625]">Audits Matter?</span>
            </h2>
            <ul className="space-y-4">
              {[
                "Prevent 30% power loss due to dust & grime",
                "Early detection of micro-cracks in cells",
                "Inverter warranty compliance maintenance",
                "Safety checks for DC wiring & earthing"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/80 font-medium">
                  <ShieldCheck className="text-[#83A625]" /> {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}