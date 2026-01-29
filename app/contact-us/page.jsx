"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, CheckCircle, Zap } from "lucide-react";
import FadeIn from "../../components/MotionWrapper";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Anytime",
      details: "+92 300 1234567",
      desc: "Instant support for urgent queries.",
      iconColor: "text-[#83A625]",
      bgColor: "bg-[#83A625]/10",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@sbs-solar.pk",
      desc: "Detailed quotes within 24 hours.",
      iconColor: "text-[#000066]",
      bgColor: "bg-[#000066]/10",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: "Gulberg III, Lahore",
      desc: "Come visit our experience center.",
      iconColor: "text-[#83A625]",
      bgColor: "bg-[#83A625]/10",
    },
  ];

  return (
    <section className="bg-white/50 antialiased">
      
      {/* --- ⚡ NEW DYNAMIC HERO SECTION --- */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with a softer overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact.jpg" // Engineers image for human connection
            alt="SBS Solar Support Team"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 " /> {/* Light blur for readability */}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <FadeIn direction="up">
            <span className="bg-[#83A625] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 inline-block">
              24/7 Support Available
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-white uppercase leading-[0.8] tracking-tighter">
              Let's <br /> <span className="text-[#83A625]">Connect.</span>
            </h1>
            <p className="mt-8 text-white text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Ready to slash your bills? Our solar experts are just a message away from designing your custom energy solution.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* --- CONTENT AREA (WHITE BG) --- */}
      <div className="max-w-7xl  mx-auto px-6 mt-20 relative z-20 pb-32">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* 1. SIDEBAR: Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <FadeIn key={index} direction="left" delay={index * 0.1}>
                <div className="bg-white p-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-[#83A625] transition-all group">
                  <div className={`${item.bgColor} ${item.iconColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{item.title}</p>
                  <h4 className="text-xl font-bold text-[#000066]">{item.details}</h4>
                  <p className="text-sm text-slate-500 mt-2 font-medium">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 2. MAIN: Modern Form (White Style) */}
          <div className="lg:col-span-2">
            <FadeIn direction="up">
              <div className="bg-slate-50 p-8 md:p-16 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="mb-12">
                   <h2 className="text-3xl font-black text-[#000066] uppercase">Send a Message</h2>
                   <div className="h-1 w-20 bg-[#83A625] mt-2 rounded-full"></div>
                </div>

                {status === "success" ? (
                  <div className="py-16 text-center animate-in zoom-in duration-500">
                    <CheckCircle className="w-20 h-20 text-[#83A625] mx-auto mb-6" />
                    <h3 className="text-3xl font-black text-[#000066] uppercase">Inquiry Sent!</h3>
                    <p className="text-slate-500 mt-4">We've received your request. Expect a call soon.</p>
                  </div>
                ) : (
                  <form className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="relative">
                        <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-[#83A625] transition-colors font-bold text-[#000066]" />
                      </div>
                      <div className="relative">
                        <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-[#83A625] transition-colors font-bold text-[#000066]" />
                      </div>
                    </div>
                    <div className="relative">
                       <select className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-[#83A625] transition-colors font-bold text-[#000066] appearance-none cursor-pointer">
                          <option>Select Service</option>
                          <option>Solar Installation</option>
                          <option>Annual Maintenance</option>
                          <option>Net Metering</option>
                       </select>
                    </div>
                    <div className="relative">
                      <textarea rows={4} placeholder="Your Message" className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-[#83A625] transition-colors font-bold text-[#000066] resize-none" />
                    </div>
                    <button className="bg-[#000066] hover:bg-[#83A625] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs transition-all flex items-center gap-4 shadow-xl shadow-[#000066]/20 group">
                      Submit Inquiry
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* --- MAP SECTION --- */}
      <section className="px-6 pb-20">
        <FadeIn direction="up">
          <div className="max-w-7xl mx-auto rounded-[4rem] overflow-hidden border-[12px] border-slate-50 shadow-2xl h-[500px]">
             <iframe
                src="https://www.google.com/maps/embed?..." 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-1000"
             />
          </div>
        </FadeIn>
      </section>
    </section>
  );
};

export default ContactPage;