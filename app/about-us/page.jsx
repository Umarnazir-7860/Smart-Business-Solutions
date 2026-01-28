import React from 'react';
import Image from 'next/image';
import FadeIn from "../../components/MotionWrapper"; 
import { CheckCircle2, Rocket, Award, ShieldCheck, Target, Zap, Globe, Heart } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Families", value: "450+" },
    { label: "MW Solar Power", value: "15.5" },
    { label: "Expert Engineers", value: "25+" }
  ];

  return (
    <main className="bg-white overflow-hidden">
      
    {/* --- 1. HERO SECTION: Full Image Background --- */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about-hero.jpg" // Ye image public folder mein honi chahiye
            alt="Solar Energy Engineering"
            fill
            priority
            className="object-cover"
          />
          {/* Layered Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/70 " />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="text-[#8BBD23] pt-20  inline-block font-black uppercase tracking-[0.3em] text-sm mb-6 block">
              Smart Energy for a Better Tomorrow
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Reliable <span className="text-[#8BBD23] italic mr-10 font-light">Solar</span> <br /> Experts
            </h1>
            <p className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Smart Business Solutions is a premier renewable energy firm dedicated to delivering high-performance solar systems across Pakistan.
            </p>
            
            {/* Added a scroll indicator for extra feel */}
            <div className="mt-12 animate-bounce">
               <div className="w-1 h-12 bg-gradient-to-b from-[#8BBD23] to-transparent mx-auto rounded-full" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- 2. THE VISION SECTION: Using Sir's Image (eng.jpg) --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative ">
                {/* Visual Decoration */}
                <div className="absolute -top-10 -left-10 w-40 h-56 bg-[#8BBD23]/10 rounded-full blur-3xl" />
                <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px] md:h-[550px] lg:h-[400px] border-[12px] border-slate-50 relative z-10">
                  <Image 
                    src="/eng1.jpg" 
                    alt="The Smart Business Solutions Team Planning" 
                     fill
                    className="object-cover"
                    priority 
                  />
                </div>
                <div className="absolute -bottom-6 right-6 bg-[#8BBD23] p-8 rounded-3xl z-20 hidden md:block">
                    <Zap className="text-[#03045E]" size={40} />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <h2 className="text-[#03045E] text-4xl md:text-5xl font-black uppercase  mb-6 leading-tight">
                  Driving Innovation Through Expertise
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Founded on the principles of technical excellence, we don't just sell products; we engineer energy independence. Our team of PEC certified professionals analyzes every rooftop and industry requirement to ensure maximum ROI for our clients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Tier-1 PV Modules", "Smart Monitoring", "Custom Mounting Rails", "Net Metering Experts"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#8BBD23]" size={20} />
                      <span className="text-[#03045E] font-bold uppercase text-xs tracking-wider">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 3. MISSION STRIP (New SEO Content) --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <Target className="mx-auto text-[#8BBD23] mb-6" size={48} />
            <h2 className="text-[#03045E] text-3xl md:text-4xl font-black uppercase mb-6 italic">Our Mission</h2>
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed italic">
              "To empower Pakistan’s residential and industrial sectors with sustainable energy solutions that reduce carbon footprints and eliminate electricity costs."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US (Unique SEO Layout) --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-16 items-center">
             <div className="w-full lg:w-1/2 sticky top-32">
                <h2 className="text-[#03045E] text-center text-4xl md:text-7xl font-black uppercase leading-[0.9] mb-6">
                  Why Work <br/><span className="text-[#8BBD23]">With Us?</span>
                </h2>
                <p className="text-slate-500 mx-14 text-center font-medium">We combine international engineering standards with local market expertise.</p>
             </div>
             <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  {t: "Certified Engineering", d: "Every system is designed by qualified solar engineers to handle local wind speeds and weather conditions.", i: <ShieldCheck className="text-[#8BBD23]"/>},
                  {t: "Premium Hardware", d: "We exclusively use Tier-1 brands like Longi, Jinko, and Huawei to ensure 25+ years of performance.", i: <Zap className="text-[#8BBD23]"/>},
                  {t: "Transparency", d: "No hidden charges. We provide detailed BOQs (Bill of Quantities) so you know exactly what you're paying for.", i: <Globe className="text-[#8BBD23]"/>},
                  {t: "Dedicated Support", d: "Our relationship doesn't end at installation. We provide free maintenance checks for the first year.", i: <Heart className="text-[#8BBD23]"/>}
                ].map((item, i) => (
                  <FadeIn key={i} direction="up" delay={i * 0.1}>
                    <div className="group bg-white p-8 rounded-[2rem] border border-[#03045E] hover:shadow-xl transition-all">
                      <div className="mb-4">{item.i}</div>
                      <h4 className="text-[#03045E] font-black uppercase mb-3 tracking-tight">{item.t}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </FadeIn>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- 5. STATS SECTION: The "Impact" Strip --- */}
      <section className="bg-[#03045E] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <h3 className="text-4xl md:text-6xl font-black text-[#8BBD23] mb-2">{stat.value}</h3>
                <p className="text-white/60 uppercase font-bold text-xs tracking-[0.2em]">{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. CORE VALUES SECTION --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#03045E] text-4xl md:text-6xl font-black uppercase mb-4 ">Our Core Values</h2>
            <div className="w-20 h-2 bg-[#8BBD23] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Integrity", d: "Honest advice and transparent pricing in every project.", i: <ShieldCheck size={40}/> },
              { t: "Excellence", d: "Deploying the latest AI-driven inverter technologies.", i: <Rocket size={40}/> },
              { t: "Accountability", d: "Taking full ownership of the system's output and uptime.", i: <Award size={40}/> }
            ].map((card, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.2}>
                <div className="p-12 rounded-[3.5rem] bg-slate-50 text-center group hover:bg-[#03045E] transition-all duration-500">
                  <div className="text-[#8BBD23] mb-6 flex justify-center group-hover:scale-110 transition-transform">{card.i}</div>
                  <h4 className="text-2xl font-black text-[#03045E] group-hover:text-white uppercase mb-4">{card.t}</h4>
                  <p className="text-slate-500 group-hover:text-white/70 font-medium">{card.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. FINAL CTA: Brand Integration --- */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto bg-[#8BBD23] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[#03045E] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-[#03045E] group-hover:text-white uppercase tracking-tighter mb-8 leading-[0.85]">
              Let’s Engineer Your <br /> Energy Independence
            </h2>
            <button className="bg-[#03045E] group-hover:bg-[#8BBD23] cursor-pointer text-white group-hover:text-[#03045E] px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-all hover:scale-110">
              Consult With Our Experts
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}