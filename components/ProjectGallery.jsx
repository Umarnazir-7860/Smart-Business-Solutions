"use client";
import { useState } from 'react';

const projects = [
  { t: "Industrial Mill", l: "Faisalabad", c: "500kW", cat: "Industrial", i: "/p1.jpg" },
  { t: "Modern Shopping Mall", l: "Islamabad", c: "150kW", cat: "Commercial", i: "/p2.jpg" },
  { t: "Eco-Luxury Farm House", l: "Raiwind", c: "15kW", cat: "Residential", i: "/p3.jpg" },
  { t: "Textile Storage", l: "Sialkot", c: "300kW", cat: "Industrial", i: "/p4.jpg" },
  { t: "Corporate HQ", l: "Gulberg", c: "80kW", cat: "Commercial", i: "/p5.jpg" },
  { t: "Renewable Park", l: "Sindh", c: "2MW", cat: "Utility Scale", i: "/p6.jpg" }
];

export default function ProjectGallery() {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Industrial', 'Commercial', 'Residential'];

  const filtered = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.cat === activeTab);

  return (
    <div className="w-full">
    {/* --- CATEGORY FILTER (Sticky & Functional) --- */}
<div className="py-10 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-30">
  <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-center">
    {categories.map((cat, i) => (
      <button 
        key={i} 
        onClick={() => setActiveTab(cat)} // Yeh click logic hai
        className={`px-8 py-2 rounded-full border font-bold text-sm transition-all duration-300 ${
          activeTab === cat 
          ? 'bg-[#8BBD23] border-[#8BBD23] text-[#03045E] shadow-md' // Active State
          : 'border-slate-200 text-[#03045E] hover:bg-[#8BBD23] hover:border-[#8BBD23]' // Normal State
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
</div>

      {/* Grid with Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500">
        {filtered.map((p, idx) => (
          <div key={idx} className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all">
            <div className="relative h-64 overflow-hidden">
              <img src={p.i} alt={p.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <span className="text-yellow-600 text-sm font-bold uppercase">{p.cat}</span>
              <h3 className="text-xl font-bold mt-1">{p.t}</h3>
              <p className="text-gray-500 text-sm">{p.l} • {p.c}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}