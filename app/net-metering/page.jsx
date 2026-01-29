import React from "react";
import Image from "next/image";
import FadeIn from "../../components/MotionWrapper";
import {
  Zap,
  RefreshCw,
  BadgeCheck,
  FileText,
  ArrowRight,
  Gauge,
  HelpCircle,
} from "lucide-react";

export default function NetMeteringPage() {
  const processSteps = [
    {
      title: "Application",
      desc: "Hum aapki taraf se NEPRA aur DISCOs (LESCO, K-Electric etc.) ko application submit karte hain.",
      icon: <FileText size={30} />,
    },
    {
      title: "Technical Audit",
      desc: "Inverters aur panels ki quality verification aur grounding check ki jati hai.",
      icon: <BadgeCheck size={30} />,
    },
    {
      title: "Green Meter",
      desc: "Aapka purana meter hata kar 'Bi-Directional' Green Meter install kiya jata hai.",
      icon: <RefreshCw size={30} />,
    },
    {
      title: "Billing Sync",
      desc: "Ab aapki export ki hui bijli aapke bill mein units minus karna shuru kar deti hai.",
      icon: <Zap size={30} />,
    },
  ];

  return (
    <main className="bg-white">
      {/* --- HERO: THE ZERO BILL PROMISE --- */}
      <section className="relative h-screen flex items-center bg-[#000066] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/net-metering.jpg" // Sunset/Installation wali image
            alt="Solar Net Metering Pakistan"
            fill
            className="object-cover opacity-40" // Opacity kam rakhi hai taake text parha jaye
            priority
          />
          {/* Gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000066] via-[#000066]/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 mt-20 gap-12 items-center w-full">
          <FadeIn direction="left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#83A625]/20 border border-[#83A625]/30 text-[#83A625] font-bold text-xs uppercase tracking-widest mb-6">
              <Zap size={14} /> Energy Export Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tighter">
              Sell Power <br />{" "}
              <span className="text-[#83A625]">To The Grid.</span>
            </h1>
            <p className="text-white/80 mt-8 text-xl max-w-lg leading-relaxed font-medium">
              Don't just save electricity—export it. Our end-to-end Net Metering
              service handles everything from NEPRA licensing to Green Meter
              installation.
            </p>
            <div className="mt-10">
              <button className="bg-[#83A625] text-white px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white hover:text-[#000066] transition-all shadow-2xl">
                Calculate Your Savings
              </button>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-10 rounded-[3.5rem] shadow-2xl">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 bg-[#83A625] rounded-2xl flex items-center justify-center text-white font-bold text-2xl rotate-3 shadow-lg">
                  1
                </div>
                <div>
                  <p className="text-white font-black uppercase tracking-widest text-sm">
                    Priority Licensing
                  </p>
                  <p className="text-white/50 text-[10px] uppercase tracking-wider">
                    Fast-track NEPRA Approval
                  </p>
                </div>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-[#83A625] w-[85%] rounded-full relative">
                  <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
                  Application Status
                </p>
                <p className="text-[#83A625] text-[10px] font-black uppercase tracking-[0.2em]">
                  85% Ready
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- HOW IT WORKS (THE PROCESS) --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[#000066] text-4xl md:text-6xl font-black uppercase tracking-tighter">
            The 4-Step Journey
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest mt-2 italic">
            Aap relax karein, paperwork hum sambhalenge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div className="relative p-10 bg-slate-50 rounded-[2.5rem] border hover:bg-white hover:shadow-2xl transition-all h-full group">
                <div className="text-[#83A625] mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h4 className="text-[#000066] font-black uppercase text-xl mb-4">
                  {step.title}
                </h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                  {step.desc}
                </p>
                <span className="absolute top-6 right-8 text-slate-200 font-black text-4xl">
                  0{i + 1}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* --- VISUAL ANALYTICS SECTION --- */}
      <section className="py-24 bg-slate-50 rounded-[4rem] mx-4 mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left">
            <h2 className="text-5xl font-black text-[#000066] uppercase leading-tight mb-8 tracking-tighter">
              Real-Time <br />{" "}
              <span className="text-[#83A625]">Monitoring.</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white rounded-3xl shadow-sm border-l-8 border-[#83A625]">
                <Gauge className="text-[#000066] shrink-0" size={32} />
                <div>
                  <p className="text-[#000066] font-black uppercase text-sm">
                    Export/Import Tracking
                  </p>
                  <p className="text-slate-500 text-sm">
                    Track how many units you are giving to the grid via mobile
                    app.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white rounded-3xl shadow-sm border-l-8 border-[#000066]">
                <HelpCircle className="text-[#83A625] shrink-0" size={32} />
                <div>
                  <p className="text-[#000066] font-black uppercase text-sm">
                    Billing Reconciliation
                  </p>
                  <p className="text-slate-500 text-sm">
                    Monthly adjustment of exported units in your electricity
                    bill.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/monitoring.jpg"
                alt="Solar Net Metering System"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000066]/60 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
