import React from 'react';
import Image from 'next/image';
import FadeIn from "../../components/MotionWrapper";
import { CheckCircle, Quote, Zap, Shield, Wallet, Smartphone, ArrowRight } from "lucide-react";

export default function ResidentialSolarPage() {
  const packages = [
    { size: "5kW Standard", ideal: "Compact Homes (1-2 ACs)", saving: "18,000 - 22,000", color: "bg-slate-100" },
    { size: "10kW Premium", ideal: "Modern Residences (3-4 ACs)", saving: "40,000 - 45,000", color: "bg-[#03045E] text-white" },
    { size: "15kW Elite", ideal: "Luxury Villas (5+ ACs)", saving: "65,000+", color: "bg-slate-100" },
  ];

  return (
    <main className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center overflow-hidden bg-[#03045E]">
        <div className="absolute inset-0 opacity-50">
           <Image src="/residential-hero.jpg" alt="Luxury Home Solar" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E] via-[#03045E]/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 mt-20 w-full">
          <FadeIn direction="up">
            <span className="bg-[#8BBD23] text-[#03045E] px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest">
              Energy Independence
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase mt-6 leading-[0.9]">
              Zero Bill<br /> <span className="text-[#8BBD23]">Freedom</span>
            </h1>
            <p className="text-white/80 max-w-xl mt-8 text-xl leading-relaxed">
              Eliminate electricity costs and embrace a sustainable lifestyle. Our advanced Hybrid Solar systems provide uninterrupted power for your home with maximum efficiency.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <button className="bg-[#8BBD23] hover:bg-white cursor-pointer text-[#03045E] px-10 py-5 rounded-2xl font-black uppercase transition-all flex items-center gap-3 shadow-xl shadow-[#8BBD23]/20">
                Get My Free Quote <ArrowRight />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- BENEFITS GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { i: <Wallet />, t: "90% Bill Reduction", d: "Experience immediate savings from day one of installation." },
            { i: <Shield />, t: "25 Years Warranty", d: "Long-term reliability backed by industry-leading warranties." },
            { i: <Smartphone />, t: "Smart Monitoring", d: "Track your energy production and savings in real-time via mobile." },
            { i: <Zap />, t: "Seamless Backup", d: "Zero-millisecond switching for uninterrupted power during outages." }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div className="p-10 rounded-[3rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all border  group">
                <div className="text-[#8BBD23] mb-6 group-hover:scale-110 transition-transform">{item.i}</div>
                <h4 className="text-[#03045E] font-black uppercase text-xl mb-3">{item.t}</h4>
                <p className="text-slate-500 font-medium">{item.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* --- PACKAGES SECTION --- */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#03045E] text-5xl font-black uppercase">Choose Your <span className="text-[#8BBD23]">Power</span></h2>
            <p className="text-slate-500 mt-4 font-medium">Tailored solar solutions designed for every household need.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.2}>
                <div className={`${pkg.color} p-12 rounded-[4rem] text-center flex flex-col items-center shadow-sm`}>
                  <h3 className="text-3xl font-black uppercase mb-2">{pkg.size}</h3>
                  <p className="opacity-70 font-bold mb-8 uppercase tracking-widest text-sm">{pkg.ideal}</p>
                  <div className="w-full h-[1px] bg-current opacity-20 mb-8" />
                  <p className="text-sm uppercase font-bold opacity-60">Avg. Monthly Savings</p>
                  <p className="text-4xl font-black mt-2 mb-10">PKR {pkg.saving}</p>
                  <button className={`w-full py-4 rounded-2xl font-black uppercase transition-all ${i === 1 ? 'bg-[#8BBD23] text-[#03045E]' : 'bg-[#03045E] text-white hover:bg-[#8BBD23]'}`}>
                    Book Now
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNICAL EXCELLENCE (Bifacial) --- */}
      <section className="py-24 bg-[#03045E] text-white rounded-[5rem] mx-4 md:mx-10 my-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left">
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-10">
              Only The <br /> <span className="text-[#8BBD23]">Best Tech</span>
            </h2>
            <div className="space-y-8">
              {[
                { t: "N-Type Bifacial Panels", d: "Maximum power generation even in low-light conditions and extreme heat." },
                { t: "Tier-1 Hybrid Inverters", d: "Smart load management with seamless grid-to-battery synchronization." },
                { i: <Zap />, t: "Custom LSA Structure", d: "Weather-resistant, high-rise mounting structures engineered for durability." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="bg-[#8BBD23] h-10 w-10 shrink-0 rounded-full flex items-center justify-center text-[#03045E]">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black uppercase tracking-tight">{item.t}</h4>
                    <p className="text-white/60 mt-2 text-lg font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="right">
             <div className="relative h-[600px] rounded-[4rem] overflow-hidden border-4 border-white/10 group">
                <Image src="/best-tech.jpg" alt="Technical Solar Detail" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03045E] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10">
                  <p className="text-[#8BBD23] text-5xl font-black italic">25 Years</p>
                  <p className="font-bold uppercase tracking-widest text-sm">Performance Warranty</p>
                </div>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-16 rounded-[4rem] shadow-sm relative">
              <Quote className="absolute top-10 right-10 text-slate-100" size={100} />
              <p className="text-[#03045E] text-2xl font-medium italic relative z-10 mb-10 leading-relaxed">
                "Smart Business Solutions transitioned our home to solar seamlessly. We now enjoy 24/7 air conditioning with total peace of mind. Their team is exceptionally professional."
              </p>
              <div>
                <h4 className="text-[#03045E] text-xl font-black uppercase">Mrs. Fatimah</h4>
                <p className="text-[#8BBD23] font-bold uppercase tracking-widest text-sm">DHA Phase 6, Lahore</p>
              </div>
            </div>
            <div className="px-10">
              <h2 className="text-[#03045E] text-5xl font-black uppercase leading-none mb-6">
                Trusted by <br /> <span className="text-[#8BBD23]">500+ Families</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium mb-10">
                Homeowners across Pakistan trust our expertise for long-term energy savings and premium service.
              </p>
              <button className="text-[#03045E] font-black uppercase flex items-center gap-3 border-b-4 border-[#8BBD23] pb-2 hover:gap-6 transition-all">
                View All Residential Projects <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}