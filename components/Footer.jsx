import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Send } from 'lucide-react';

const Footer = () => {
  // Syncing with Navbar links
  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Projects', href: '/our-projects' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const solutionLinks = [
    { name: 'Residential Solar', href: '/residential-solar' },
    { name: 'Commercial Solar', href: '/commercial-solar' },
    { name: 'Net Metering', href: '/net-metering' },
    { name: 'Solar Maintenance', href: '/solar-maintenance' },
  ];

  return (
    <footer className="bg-[#000066] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION: LOGO & NEWSLETTER */}
        <div className="grid lg:grid-cols-2 gap-12 pb-16 border-b border-white/10 items-center">
          <div>
            <Image 
              src="/footer-logo-final.png" 
              alt="SBS Logo" 
              width={180} 
              height={60} 
              className="mb-6 object-contain" 
            />
            <p className="text-white/60 text-lg max-w-md leading-relaxed">
              Leading the transition to clean energy in Pakistan. Premium Tier-1 Solar solutions for a sustainable and bill-free future.
            </p>
          </div>
          
          <div className="relative">
            <h4 className="text-xl font-black uppercase tracking-tighter mb-6">Get a Free Bill Audit</h4>
            <div className="relative max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 py-5 px-6 rounded-full outline-none focus:border-[#83A625] transition-all text-sm"
              />
              <button className="absolute right-2 top-2 bg-[#83A625] p-3 rounded-full hover:bg-white hover:text-[#83A625] transition-all group">
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          
          {/* Company - Synced with Navbar */}
          <div className="space-y-6">
            <h5 className="text-[#83A625] font-black uppercase tracking-widest text-xs">Our Company</h5>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#83A625] scale-0 group-hover:scale-100 transition-transform"></span> 
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions - Synced with Navbar Dropdown */}
          <div className="space-y-6">
            <h5 className="text-[#83A625] font-black uppercase tracking-widest text-xs">Solar Solutions</h5>
            <ul className="space-y-4">
              {solutionLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#83A625] scale-0 group-hover:scale-100 transition-transform"></span> 
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-2">
            <h5 className="text-[#83A625] font-black uppercase tracking-widest text-xs">Get In Touch</h5>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#83A625]">
                  <FaMapMarkerAlt size={20} />
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Phase 6, DHA, <br /> Lahore, Pakistan
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#83A625]">
                  <FaPhoneAlt size={18} />
                </div>
                <p className="text-white/60 text-sm">
                  +92 300 1234567 <br /> +92 42 35712345
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#83A625]">
                  <FaEnvelope size={18} />
                </div>
                <p className="text-white/60 text-sm">
                  info@sbs-solar.pk <br /> sales@sbs-solar.pk
                </p>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp].map((Icon, i) => (
                  <Link key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#83A625] transition-all">
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} SBS Smart Business Solutions. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-white/40 uppercase tracking-widest">
            <Link href="/privacy-policy" className="hover:text-[#83A625]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#83A625]">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-[#83A625]">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Floating Decorative Sun Glow */}
      <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-[#83A625]/10 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
};

export default Footer;