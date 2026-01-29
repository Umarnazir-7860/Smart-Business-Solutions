import React from 'react';
import Image from 'next/image';
import FadeIn from "../components/MotionWrapper"; 
import { Zap, ShieldCheck, BadgeDollarSign, Sun, BarChart3, Headphones, CheckCircle2, ArrowRight } from "lucide-react";

export default function SolarHomepage() {
  return (
    <main className="relative min-h-screen bg-white">
      
      
      {/* --- HERO SECTION: FIXED STRUCTURE --- */}
      <section className="relative min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/sbs-home-hero.jpg" // image_8b1a95.jpg wali file ka path
            alt="Absolute Freedom Solar" 
            fill 
            className="object-cover object-center"
            priority
          />
          {/* Blue Overlay: Is se text saaf nazar ayega */}
          <div className="absolute inset-0 bg-[#000066]/60 via-[#000066]/40 to-[#000066]/80 z-10" />
        </div>

        {/* Content Layer */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center mt-24">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-6">
              Absolute <br /> <span className="text-[#83A625]">Freedom.</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed mb-10">
              Empowering Pakistani homes and businesses with Tier-1 Solar technology. 
              Save up to 100% on your monthly electricity costs.
            </p>
          </FadeIn>

          {/* NEPRA Badge - Exact as your reference image */}
          <FadeIn direction="up" delay={0.3}>
             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-12">
                <div className="w-2 h-2 rounded-full bg-[#83A625] animate-pulse" />
                <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">NEPRA Licensed Provider</span>
             </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-[#83A625] text-[#000066] px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
                Get Free Survey
              </button>
              <button className="w-full sm:w-auto border-2 border-white text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-[#000066] transition-all">
                View Projects
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-20 bg-[#000066]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: "Installed Capacity", val: "15MW+" },
            { label: "Happy Clients", val: "1200+" },
            { label: "CO2 Saved", val: "50k Tons" },
            { label: "Offices in Pakistan", val: "04" },
          ].map((stat, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-black text-[#83A625] mb-2">{stat.val}</p>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* --- SERVICES / SOLUTIONS --- */}
      <section className="py-22 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl font-black text-[#000066] uppercase mb-6 tracking-tighter">Energy Solutions</h2>
              <p className="text-gray-500 font-medium italic text-lg">From small homes to massive industries, we power everything.</p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Residential", desc: "Save up to 100% on home bills with Net Metering.", icon: <Sun className="text-[#83A625]" size={40}/> },
              { title: "Commercial", desc: "Cut business overheads and increase your profit.", icon: <BarChart3 className="text-[#83A625]" size={40}/> },
              { title: "Industrial", desc: "Heavy-duty power for large scale manufacturing.", icon: <Zap className="text-[#83A625]" size={40}/> }
            ].map((box, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.2}>
                <div className="p-12 rounded-[3rem] bg-white border border-[#83A625]-100 hover:shadow-3xl transition-all duration-500 group">
                  <div className="mb-8">{box.icon}</div>
                  <h3 className="text-2xl font-black text-[#000066] uppercase mb-4">{box.title}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed">{box.desc}</p>
                  <button className="flex items-center gap-2 text-[#83A625] font-black uppercase text-xs tracking-widest group-hover:gap-4 transition-all">Learn More <ArrowRight size={16}/></button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (Trust Points) --- */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left">
             <div className="relative">
                <Image src="/solar-team.jpg" alt="SBS Team" width={600} height={800} className="rounded-[4rem] shadow-2xl" />
                <div className="absolute -top-10 right-6 w-40 h-40 bg-[#83A625] rounded-full flex items-center justify-center text-white text-center p-4 shadow-xl">
                  <p className="font-black leading-none uppercase text-sm italic">25 Years Panel Warranty</p>
                </div>
             </div>
          </FadeIn>
          
          <div className="space-y-12">
            <FadeIn direction="up">
              <h2 className="text-5xl font-black text-[#000066] uppercase tracking-tighter">Why Choose SBS?</h2>
            </FadeIn>

            <div className="space-y-8">
              {[
                { t: "Tier-1 Certified Equipment", d: "We only use Bloomberg Tier-1 panels like Jinko, Longi, and Canadian Solar." },
                { t: "Full Net Metering Support", d: "From application to green-meter installation, we handle all the paperwork." },
                { t: "24/7 Remote Monitoring", d: "Track your energy production live from your smartphone anywhere." }
              ].map((item, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.1}>
                  <div className="flex gap-6">
                    <div className="mt-1"><CheckCircle2 className="text-[#83A625]" /></div>
                    <div>
                      <h4 className="text-xl font-bold text-[#000066] mb-2">{item.t}</h4>
                      <p className="text-gray-500">{item.d}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            
            <FadeIn direction="up">
              <button className="bg-[#000066] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#83A625] transition-all duration-500">Contact Expert</button>
            </FadeIn>
          </div>
        </div>
      </section>

    </main>
  );
}