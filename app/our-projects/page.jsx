import React from 'react';
import Image from 'next/image';
import FadeIn from "../../components/MotionWrapper";
import { MapPin, Zap, CheckCircle, Quote, ArrowRight } from "lucide-react";
import ProjectGallery from '@/components/ProjectGallery';

export default function ProjectsPage() {
  const categories = ["All Projects", "Residential", "Commercial", "Industrial"];
  
  const projects = [
    { t: "DHA Residence", l: "Lahore", c: "20kW Hybrid", cat: "Residential", i: "/p1.jpg" },
    { t: "Industrial Weaving Mill", l: "Faisalabad", c: "500kW On-Grid", cat: "Industrial", i: "/p2.jpg" },
    { t: "Modern Shopping Mall", l: "Islamabad", c: "150kW", cat: "Commercial", i: "/p3.jpg" },
    { t: "Farm House System", l: "Raiwind", c: "15kW", cat: "Residential", i: "/p4.jpg" },
    { t: "Textile Storage", l: "Sialkot", c: "300kW", cat: "Industrial", i: "/p5.jpg" },
    { t: "Corporate HQ", l: "Gulberg, Lahore", c: "80kW", cat: "Commercial", i: "/p6.jpg" },
  ];

  return (
    <main className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center bg-[#03045E]">
        <div className="absolute inset-0 opacity-40">
           <Image src="/our-projects-hero.jpg" alt="Solar Projects" fill className="object-cover" />
        </div>
        <div className="relative z-10 text-center px-6">
          <FadeIn direction="up">
            <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">
              Our <span className="text-[#8BBD23]">Legacy</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto mt-6 font-medium text-lg italic">
              Over 15 Megawatts of solar power installed across Pakistan's most challenging terrains and prestigious locations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- PROJECT GRID --- */}
     <section className="py-10 max-w-7xl mx-auto px-6">
        <ProjectGallery />
      </section>

      {/* --- FEATURED CASE STUDY (Length Booster) --- */}
      <section className="py-24 bg-[#03045E] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-8">
                The <span className="text-[#8BBD23]">Megawatt</span> <br /> Milestone
              </h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Hamara sabse bara industrial project jo 1.2MW par mushtamil hai. Is system ne factory ke carbon emissions ko 40% kam kiya aur monthly 5 Million PKR ki bachat generate ki.
              </p>
              <div className="space-y-6">
                {["LSA Approved High-Rise Structure", "Bifacial N-Type Technology", "Real-time Cloud Monitoring"].map((list, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle className="text-[#8BBD23]" />
                    <span className="font-bold uppercase tracking-wide">{list}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right">
               <div className="relative h-[500px] rounded-[4rem] overflow-hidden border-8 border-[#8BBD23]">
                  <Image src="/mega-project.jpg" alt="Mega Project" fill className="object-cover" />
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (Social Proof) --- */}
      <section className="py-22 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#03045E] text-4xl md:text-6xl font-black uppercase ">Client Trust</h2>
            <div className="w-24 h-2 bg-[#8BBD23] mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { n: "Ahmed Sheikh", p: "CEO, Tex-Industries", t: "Smart Business Solutions delivered exactly what they promised. Our electricity bill is now practically zero." },
              { n: "M. Ali", p: "Home Owner", t: "Best investment for my home. The installation was professional and the net-metering process was very smooth." }
            ].map((test, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.2}>
                <div className="bg-white p-12 rounded-[3rem] shadow-sm transition-transform hover:scale-105 relative border border-slate-100">
                  <Quote className="absolute top-10 right-10 text-slate-100" size={80} />
                  <p className="text-slate-600 text-xl font-medium italic relative z-10 mb-8">"{test.t}"</p>
                  <div>
                    <h4 className="text-[#03045E] font-black uppercase">{test.n}</h4>
                    <p className="text-[#8BBD23] text-sm font-bold uppercase tracking-widest">{test.p}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}