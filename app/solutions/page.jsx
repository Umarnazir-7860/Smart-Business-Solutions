import React from 'react';
import FadeIn from "../../components/MotionWrapper";
import { Sun, Building2, Factory, ShieldCheck, Zap, BarChart3, Settings, ClipboardCheck, Truck, Wrench, Leaf, TrendingDown, Landmark } from "lucide-react";
import Image from 'next/image';

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Residential Solar",
      description: "Gharon ke liye behtareen solutions. 5kW se 20kW tak ke systems jo aapka bijli ka bill zero kar denge aur load-shedding se azadi denge.",
      icon: <Sun className="text-[#8BBD23]" size={40} />,
      features: ["Net Metering Support", "Hybrid/On-Grid Options", "24/7 Monitoring"]
    },
    {
      title: "Commercial Solar",
      description: "Schools, Hospitals aur Offices ke liye optimized systems. Business expenses ko control karein aur profit margins barhayein.",
      icon: <Building2 className="text-[#8BBD23]" size={40} />,
      features: ["Fast ROI (2-3 Years)", "Tax Depreciation Benefits", "High Durability"]
    },
    {
      title: "Industrial Solar",
      description: "Heavy industries ke liye megawatt-scale plants. Mushkil weather aur heavy machinery load par bhi behtareen performance.",
      icon: <Factory className="text-[#8BBD23]" size={40} />,
      features: ["High-Voltage Support", "LSA Approved Structure", "Custom Engineering"]
    }
  ];

  const steps = [
    { n: "01", t: "Free Consultation", d: "Hum aapka bill analyze karte hain aur zaroorat ke mutabiq system design karte hain.", i: <ClipboardCheck /> },
    { n: "02", t: "Technical Survey", d: "Humari team site visit kar ke structure aur orientation ka jaiza leti hai.", i: <Settings /> },
    { n: "03", t: "Rapid Installation", d: "Tier-1 panels aur branded inverters ki safe aur professional installation.", i: <Truck /> },
    { n: "04", t: "Net Metering", d: "Green Meter lagwane ka sara paperwork aur process hum khud handle karte hain.", i: <Wrench /> }
  ];

  const benefits = [
    { t: "Zero Electricity Bills", d: "Solar lagwane ke baad aapki grid par dependance khatam ho jati hai.", i: <TrendingDown /> },
    { t: "Eco-Friendly", d: "Carbon footprint kam karein aur environment ko bachanay mein apna kirdar ada karein.", i: <Leaf /> },
    { t: "Government Incentives", d: "Net metering ke zariye izafi bijli Wapda ko bechen aur paise kamayein.", i: <Landmark /> }
  ];

  return (
    <main className="bg-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/solutions-hero.jpg" 
            alt="Solar Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#03045E]/75 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
              Modern <br /><span className="text-[#8BBD23]">Energy</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              We provide end-to-end solar engineering solutions for a sustainable Pakistan.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SOLUTIONS GRID --- */}
        <div className="py-32">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {solutions.map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.2}>
                <div className="group bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 hover:border-[#8BBD23] hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl h-full flex flex-col">
                  <div className="mb-8 bg-white w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-black text-[#03045E] uppercase mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 mb-8 font-medium leading-relaxed">{item.description}</p>
                  <div className="mt-auto space-y-3">
                    {item.features.map((feat, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm font-bold text-[#03045E]">
                        <Zap size={14} className="text-[#8BBD23] fill-[#8BBD23]" /> {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* --- NEW SECTION: WHY SOLAR? (Length Booster) --- */}
        <div className="bg-[#03045E] rounded-[4rem] p-12 md:p-24 text-white mb-40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8BBD23]/20 blur-[100px] rounded-full" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 italic">The Smart <br /> Investment</h2>
                    <p className="text-white/70 text-lg mb-10 font-medium">Solar panels aren't just for saving bills; they are an asset that increases your property value and provides energy security for decades.</p>
                    <div className="space-y-8">
                        {benefits.map((b, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="text-[#8BBD23] bg-white/10 p-4 rounded-2xl h-fit">{b.i}</div>
                                <div>
                                    <h4 className="text-xl font-bold uppercase mb-2">{b.t}</h4>
                                    <p className="text-white/50 text-sm">{b.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                    <Image src="/smart-invest.jpg" alt="Solar Investment" width={600} height={800} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

        {/* --- PROCESS SECTION --- */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-[#03045E] text-4xl md:text-6xl font-black uppercase italic">Our Process</h2>
            <div className="w-24 h-2 bg-[#8BBD23] mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="relative p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full overflow-hidden">
                  <span className="text-8xl font-black text-slate-50 absolute -bottom-4 -right-4">{step.n}</span>
                  <div className="w-14 h-14 bg-[#8BBD23]/10 rounded-2xl flex items-center justify-center text-[#8BBD23] mb-8 relative z-10">
                    {step.i}
                  </div>
                  <h4 className="text-xl font-black text-[#03045E] uppercase mb-4 relative z-10 tracking-tight">{step.t}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed relative z-10">{step.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}