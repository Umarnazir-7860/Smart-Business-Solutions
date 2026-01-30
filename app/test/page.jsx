"use client";
import React from 'react';
import { Check } from 'lucide-react';

const DittoJourney = () => {
  const stages = [
    { id: 1, label: "Lead", status: "completed", color: "bg-green-500", img: "https://cdn-icons-png.flaticon.com/512/1022/1022213.png" },
    { id: 2, label: "Onboarding", status: "active", color: "bg-yellow-400", img: "https://cdn-icons-png.flaticon.com/512/2666/2666505.png" },
    { id: 3, label: "Kick-Off", status: "pending", color: "bg-orange-800", img: "https://cdn-icons-png.flaticon.com/512/1039/1039328.png" },
    { id: 4, label: "Audit", status: "pending", color: "bg-blue-600", img: "https://cdn-icons-png.flaticon.com/512/5253/5253961.png" },
    { id: 5, label: "Certification", status: "pending", color: "bg-yellow-500", img: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png" },
    { id: 6, label: "Referral", status: "pending", color: "bg-red-500", img: "https://cdn-icons-png.flaticon.com/512/1998/1998087.png" },
  ];

  return (
    <div className="w-full min-h-screen py-20 bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
        
        {/* TOP PANEL: JOURNEY TRACKER */}
        <div className="p-8 border-b border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-slate-700">Client Journey Tracker</h2>
            <p className="text-sm font-bold text-slate-800 mt-2">ABC Ltd.</p>
            <p className="text-[11px] font-bold text-blue-800 uppercase tracking-tight">Current Stage: Onboarding</p>
          </div>

          {/* STEPPER AREA */}
          <div className="relative flex items-center justify-between max-w-4xl mx-auto px-10 py-10">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-[6px] bg-slate-200 -translate-y-1/2 rounded-full"></div>
            
            {stages.map((stage, idx) => (
              <div key={stage.id} className="relative z-10 flex flex-col items-center">
                
                {/* TOOLTIP FOR ACTIVE STAGE */}
                {stage.status === "active" && (
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 z-50 animate-bounce">
                    <div className="bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-gray-100 p-3 text-center relative">
                       <p className="text-[10px] text-slate-500 font-bold">Docs Uploaded: <span className="text-slate-800">2 / 5</span></p>
                       <p className="text-[10px] text-blue-800 font-bold mt-1">Next: Schedule Kick-Off Meeting</p>
                       {/* Triangle pointer */}
                       <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45"></div>
                    </div>
                  </div>
                )}

                {/* ICON CONTAINER (IMAGE MATCH) */}
                <div className={`
                  relative w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500
                  ${stage.status === 'active' ? 'scale-125 z-20 shadow-[0_15px_30px_rgba(255,165,0,0.3)] ring-4 ring-yellow-100' : ''}
                  ${stage.status === 'completed' ? 'grayscale-0' : 'grayscale-[0.5] opacity-80'}
                `}>
                  {/* Glossy Effect Overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-black/10 to-transparent pointer-events-none"></div>
                  
                  {/* The Icon Image */}
                  <img src={stage.img} alt={stage.label} className="w-10 h-10 object-contain drop-shadow-md" />
                  
                  {/* Checkmark for completed */}
                  {stage.status === 'completed' && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1 border-2 border-white shadow-sm">
                      <Check size={12} strokeWidth={4} />
                    </div>
                  )}
                </div>

                {/* Label */}
                <span className={`mt-6 text-[10px] font-black uppercase tracking-tighter ${stage.status === 'active' ? 'text-slate-800' : 'text-slate-400'}`}>
                  {stage.label}
                </span>

                {/* Small grey arrows between dots */}
                {idx < stages.length - 1 && (
                  <div className="absolute left-[130%] top-[30px] text-slate-300 text-xs">▶</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM PANEL: DETAILS SECTION */}
        <div className="bg-[#F4F7F9] p-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-8 relative overflow-hidden">
            {/* Close button X */}
            <button className="absolute top-4 right-4 text-gray-300 hover:text-gray-500">✕</button>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Side: Pending Actions */}
              <div>
                <h3 className="text-lg font-bold text-slate-700 mb-6">Onboarding Stage Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-xs border-b pb-2">
                    <span className="text-slate-400 font-bold uppercase">Client:</span>
                    <span className="text-slate-700 font-bold">ABC Ltd.</span>
                  </div>
                  <div className="flex justify-between text-xs border-b pb-2">
                    <span className="text-slate-400 font-bold uppercase">Assigned To:</span>
                    <span className="text-slate-700 font-bold">Sarah | Client Success Manager</span>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-[10px] font-black text-slate-700 uppercase mb-4">Pending Actions</p>
                    <ul className="space-y-3">
                      {['Documents Needed:', 'Business License', 'Insurance Certificate', 'Safety Policy'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                          <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center text-[10px]">▶</div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Side: Tips for Success */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-black text-slate-700 mb-6 uppercase tracking-tight">Tips for Success</h3>
                  <ul className="space-y-4">
                    {['Welcome Call Scheduled', 'Prepare Client Portal Access', 'Share Onboarding Guide'].map((tip, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                        <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Big Green Action Button */}
                <button className="mt-12 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md text-xs font-bold transition-all shadow-md">
                  Next Step: Arrange Kick-Off Meeting
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DittoJourney;