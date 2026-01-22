import React from 'react';
import Image from 'next/image';
import FadeIn from "../components/MotionWrapper"; 
import { Zap, ShieldCheck, BadgeDollarSign, Sun, BarChart3, Headphones, CheckCircle2, ArrowRight } from "lucide-react";

export default function SolarHomepage() {
  return (
    <main className="relative min-h-screen bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-22 pb-20 lg:pt-38 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#83A625]/5 rounded-l-[10rem] -z-10 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83A625]/10 border border-[#83A625]/20">
                <Zap size={16} className="text-[#83A625] fill-[#83A625]" />
                <span className="text-[#83A625] text-xs font-black uppercase tracking-[0.2em]">Pakistan's Premium Solar Choice</span>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-6xl md:text-8xl font-black text-[#000066] leading-[0.9] tracking-tighter uppercase">
                Zero <span className="text-[#83A625]">Bills</span> <br /> Absolute <br /> Freedom.
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-gray-600 text-lg md:text-xl max-w-lg font-medium leading-relaxed">
                Empowering Pakistani homes and businesses with Tier-1 Solar technology. Save up to 100% on your monthly electricity costs.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-[#83A625] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#000066] transition-all duration-500 shadow-xl shadow-[#83A625]/30">Get Free Survey</button>
                <button className="border-2 border-[#000066] text-[#000066] px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#000066] hover:text-white transition-all duration-500">View Projects</button>
              </div>
            </FadeIn>
          </div>

          <div className="relative">
            <FadeIn direction="right" delay={0.4}>
              <div className="relative z-10 rounded-[3rem] md:rounded-[5rem] overflow-hidden border-[12px] border-white shadow-2xl">
                <Image src="/sbs-home-hero.jpg" alt="SBS Solar" width={800} height={1000} className="w-full h-[500px] md:h-[650px] object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.8} className="absolute -bottom-8 -left-8 z-20">
              <div className="bg-white p-6 rounded-[2rem] shadow-2xl border border-gray-100 flex items-center gap-4">
                <div className="w-14 h-14 bg-[#83A625] rounded-2xl flex items-center justify-center text-white"><ShieldCheck size={30} /></div>
                <div><p className="text-[#000066] font-black text-xl uppercase leading-none">NEPRA</p><p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Licensed Provider</p></div>
              </div>
            </FadeIn>
          </div>
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
      <section className="py-32 bg-slate-50">
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