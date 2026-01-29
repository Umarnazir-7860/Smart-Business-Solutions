import React from 'react';
import Image from 'next/image';
import FadeIn from "../../components/MotionWrapper";
import { Factory, TrendingDown, Building2, ShieldCheck, Zap, BarChart, ArrowRight, CheckCircle2, WalletCards } from "lucide-react";

export default function CommercialSolarPage() {
  const businessBenefits = [
    { 
        title: "Operational Savings", 
        desc: "Slash your monthly electricity overheads by up to 70% and redirect that capital into business growth.", 
        icon: <TrendingDown className="text-[#83A625]" size={32} /> 
    },
    { 
        title: "Tax Incentives", 
        desc: "Take advantage of government-backed tax credits and 100% first-year depreciation on solar assets.", 
        icon: <WalletCards className="text-[#83A625]" size={32} /> 
    },
    { 
        title: "Energy Independence", 
        desc: "Protect your enterprise from grid instability and unpredictable tariff hikes for the next 25 years.", 
        icon: <ShieldCheck className="text-[#83A625]" size={32} /> 
    },
  ];

  return (
    <main className="bg-white">
      
      {/* --- B2B HERO SECTION --- */}
      <section className="relative h-screen flex items-center overflow-hidden bg-[#000066]">
        <div className="absolute inset-0 z-0">
          {/* Using the industrial landscape image */}
          <Image 
            src="/Commercial Solar.jpg" 
            alt="Commercial Solar Installation" 
            fill 
            className="object-cover opacity-40" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000066] via-[#000066]/20 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 mt-20 rounded-lg bg-[#83A625] text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">
              <Building2 size={16} /> Enterprise Solutions
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.85] tracking-tighter">
              Power Your <br /> <span className="text-[#83A625]">Business.</span>
            </h1>
            <p className="text-white/80 max-w-2xl mt-8 text-xl font-medium leading-relaxed">
              Transform your commercial facility into a self-sustaining powerhouse. High-yield Tier-1 solar technology engineered for Pakistan's business climate.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <button className="bg-[#83A625] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-white hover:text-[#000066] transition-all">
                Request Business Audit
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white hover:text-[#000066] transition-all backdrop-blur-sm">
                View Case Studies
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- FINANCIAL ADVANTAGE SECTION --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#000066] text-4xl md:text-6xl font-black uppercase tracking-tighter">The SBS Edge</h2>
            <div className="w-24 h-2 bg-[#83A625] mx-auto mt-4" />
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {businessBenefits.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="p-12 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col items-center text-center group">
                  <div className="mb-8 p-6 bg-slate-50 rounded-[2rem] group-hover:bg-[#83A625]/10 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-[#000066] font-black uppercase text-2xl mb-4">{item.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRIAL PRECISION (Using Engineer Image) --- */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left">
             <div className="relative h-[650px] rounded-[4rem] overflow-hidden border-[15px] border-white shadow-2xl">
                <Image 
                  src="/grid-solar.jpg" 
                  alt="Industrial Solar Engineering" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-[#000066]/20" />
             </div>
          </FadeIn>
          
          <div className="space-y-10">
            <h2 className="text-5xl font-black text-[#000066] uppercase leading-[0.9] tracking-tighter">
              Optimized for <br /> <span className="text-[#83A625]">Peak Loads.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium italic">
              Commercial projects require more than just panels; they require strategic power management.
            </p>
            <div className="grid gap-6">
              {[
                "High-Voltage String Inverters for seamless integration",
                "Advanced Net Metering support with government liaison",
                "Remote monitoring for 24/7 energy audit tracking",
                "Scalable designs for future industrial expansion"
              ].map((point, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl">
                  <CheckCircle2 className="text-[#83A625] mt-1 shrink-0" size={20} />
                  <p className="text-[#000066] font-bold uppercase text-xs tracking-widest">{point}</p>
                </div>
              ))}
            </div>
            <button className="inline-flex items-center gap-3 bg-[#000066] text-white px-12 py-6 rounded-full font-black uppercase text-sm tracking-[0.2em] hover:bg-[#83A625] transition-all">
              Consult Our Engineers <ArrowRight size={20}/>
            </button>
          </div>
        </div>
      </section>

     {/* --- PREMIUM CTA / RESIDENTIAL BRIDGE --- */}
      <section className="relative py-24 mb-10 px-6 overflow-hidden">
        {/* Background Decorative Shape */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[#000066] rounded-[3rem] md:rounded-[5rem] overflow-hidden">
          {/* Subtle Glow Effect */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#83A625]/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#83A625]/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn direction="up">
            <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
              Looking for <br /> 
              <span className="text-[#83A625]">Home Solutions?</span>
            </h3>
            
            <p className="text-white/60 mt-6 mb-10 text-lg font-medium max-w-lg mx-auto">
              Switch to our residential division for Tier-1 solar packages tailored for Pakistani households.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group relative bg-[#83A625] hover:bg-white text-[#000066] px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-[0_0_40px_rgba(131,166,37,0.3)]">
                Switch to Residential
                <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </button>
              
              <button className="text-white/80 hover:text-[#83A625] font-black uppercase tracking-widest text-sm transition-colors border-b-2 border-transparent hover:border-[#83A625] pb-1">
                Download Catalog
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}