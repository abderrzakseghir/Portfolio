
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin, ExternalLink, Award, Sparkles, Briefcase, GraduationCap, Target, Car, Camera, Waves, Footprints, Clock, Eye, X, ZoomIn, ZoomOut } from 'lucide-react';
import { PortfolioData } from '../types';

const MotionDiv = motion.div as any;

interface ResumeProps {
  data: PortfolioData;
}

export const Resume: React.FC<ResumeProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(0.5);

  const handleDownload = () => {
    // On desktop, use print
    if (window.innerWidth >= 768) {
      window.print();
    } else {
      // On mobile, open the modal for preview
      setIsModalOpen(true);
    }
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Mon <span className="text-primary-600">CV</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Un aperçu de mon parcours.
          </p>
          <button 
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-2xl hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 font-medium animate-float"
          >
            <Download size={20} className="mr-3 hidden md:block" />
            <Eye size={20} className="mr-3 md:hidden" />
            <span className="hidden md:inline">Télécharger mon CV (PDF)</span>
            <span className="md:hidden">Voir mon CV</span>
          </button>
          
          <style>{`
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
                box-shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.4);
              }
              50% {
                transform: translateY(-8px);
                box-shadow: 0 18px 40px -10px rgba(99, 102, 241, 0.55);
              }
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
              will-change: transform, box-shadow;
            }
          `}</style>
        </MotionDiv>

        {/* The Resume Layout - A4 Format Preview - Hidden on mobile */}
        <MotionDiv
          id="cv-print-area"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="resume-container max-w-[210mm] mx-auto bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] ring-1 ring-slate-200 rounded-2xl overflow-hidden hidden md:flex flex-col md:flex-row print:flex print:shadow-none print:ring-0 print:rounded-none print:max-w-none print:w-[210mm] print:h-[297mm] print:overflow-hidden"
        >
          
          {/* SIDEBAR (32%) */}
          <aside className="resume-sidebar w-[32%] bg-slate-900 text-white p-4 md:p-5 print:w-[32%] print:p-4">
            {/* QR Code Section */}
            <div className="flex justify-center mb-3">
              <div className="bg-white p-1.5 rounded-lg">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=https://seghir-portfolio.vercel.app&bgcolor=ffffff&color=0f172a`}
                  alt="QR Code Portfolio"
                  className="w-[50px] h-[50px]"
                />
              </div>
            </div>

            {/* Photo and Name */}
            <div className="text-center mb-4">
              <div className="relative w-16 h-16 mx-auto mb-2">
                <img 
                  src={data.personal.avatar} 
                  alt={data.personal.name} 
                  className="relative w-full h-full object-cover rounded-full border-2 border-slate-700 shadow-lg"
                />
              </div>
              <h1 className="text-base font-bold tracking-tight leading-tight">Abderrazak Seghir</h1>
              <p className="text-primary-400 font-semibold text-[10px] uppercase tracking-wider mt-0.5">Développeur Full Stack</p>
            </div>

            <div className="space-y-4">
              {/* Contact */}
              <section>
                <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.15em] mb-1.5 border-b border-slate-800 pb-1">Contact</h3>
                <ul className="space-y-1">
                  <li className="flex items-center text-[9px] text-slate-300 gap-1.5">
                    <Mail size={10} className="text-primary-500 shrink-0" />
                    <span className="truncate">{data.contact.email}</span>
                  </li>
                  <li className="flex items-center text-[9px] text-slate-300 gap-1.5">
                    <Phone size={10} className="text-primary-500 shrink-0" />
                    {data.contact.phone}
                  </li>
                  <li className="flex items-center text-[9px] text-slate-300 gap-1.5">
                    <MapPin size={10} className="text-primary-500 shrink-0" />
                    Mobilité : Toute la France
                  </li>
                  <li className="flex items-center text-[9px] text-slate-300 gap-1.5">
                    <Car size={10} className="text-primary-500 shrink-0" />
                    Permis B
                  </li>
                  <li className="flex items-center text-[9px] text-slate-300 gap-1.5">
                    <Linkedin size={10} className="text-primary-500 shrink-0" />
                    <a href="https://www.linkedin.com/in/seghir-abderrazak-248520229/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 hover:underline">
                      SEGHIR ABDERRAZAK
                    </a>
                  </li>
                </ul>
              </section>

              {/* Categorized Skills - No icons */}
              <section>
                <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.15em] mb-2 border-b border-slate-800 pb-1">Expertise</h3>
                <div className="space-y-2">
                  {data.skillCategories.slice(0, 4).map((cat, idx) => (
                    <div key={idx}>
                      <p className="text-[8px] font-bold text-primary-400 mb-1 uppercase">
                        {cat.category}
                      </p>
                      <div className="flex flex-wrap gap-0.5">
                        {cat.skills.slice(0, 5).map(s => (
                          <span key={s} className="px-1 py-0.5 bg-slate-800/50 border border-slate-700 text-[7px] rounded text-slate-300">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications */}
              <section>
                <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.15em] mb-1.5 border-b border-slate-800 pb-1">Certifications</h3>
                <div className="p-1.5 bg-primary-500/10 border border-primary-500/20 rounded">
                  <p className="text-[9px] font-bold text-primary-400 flex items-center mb-0.5">
                    <Award size={10} className="mr-1" /> AWS Certified
                  </p>
                  <p className="text-[8px] text-slate-300">Cloud Practitioner (CLF-C02)</p>
                  <p className="text-[7px] text-slate-400 flex items-center mt-1">
                    <Clock size={8} className="mr-1 text-primary-500" /> En préparation
                  </p>
                </div>
              </section>

              {/* Centre d'intérêt */}
              <section>
                <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.15em] mb-1.5 border-b border-slate-800 pb-1">Centre d'intérêt</h3>
                <div className="flex flex-wrap gap-1.5">
                  <span className="flex items-center gap-1 px-1.5 py-0.5 bg-slate-800/50 border border-slate-700 text-[8px] rounded text-slate-300">
                    <Footprints size={9} className="text-primary-500" /> Course à pied
                  </span>
                  <span className="flex items-center gap-1 px-1.5 py-0.5 bg-slate-800/50 border border-slate-700 text-[8px] rounded text-slate-300">
                    <Camera size={9} className="text-primary-500" /> Photographie
                  </span>
                  <span className="flex items-center gap-1 px-1.5 py-0.5 bg-slate-800/50 border border-slate-700 text-[8px] rounded text-slate-300">
                    <Waves size={9} className="text-primary-500" /> Piscine
                  </span>
                </div>
              </section>
            </div>
          </aside>

          {/* MAIN CONTENT (68%) */}
          <main className="resume-main w-[68%] p-4 md:p-5 overflow-hidden print:w-[68%] print:p-4">
            
            {/* Recherche CDI Banner */}
            <div className="mb-3 p-2 bg-primary-50 border border-primary-200 rounded-lg">
              <p className="flex items-center text-[11px] font-bold text-primary-700 uppercase tracking-wide">
                <Target size={14} className="mr-2 text-primary-600" />
                Recherche de CDI - Septembre 2026
              </p>
            </div>

            {/* Header / Summary */}
            <header className="mb-3">
              <h3 className="flex items-center text-xs font-bold text-primary-600 mb-1.5 uppercase tracking-tight">
                <Sparkles size={12} className="text-primary-600 mr-1.5" />
                Profil & Objectif
              </h3>
              <p className="text-slate-600 leading-snug text-[9px] italic border-l-2 border-primary-500 pl-2 py-0.5">
                "{data.personal.description}"
              </p>
            </header>

            {/* Featured Projects - List format like image */}
            <section className="mb-3">
              <h3 className="flex items-center text-xs font-bold text-primary-600 mb-2 uppercase tracking-tight">
                <ExternalLink size={12} className="text-primary-600 mr-1.5" />
                Projets & Réalisations
              </h3>
              <div className="space-y-2">
                {data.projects.slice(0, 4).map((project, idx) => (
                  <div key={idx} className="pb-2 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-slate-800 text-[9px]">
                        {project.title}
                      </h4>
                      <div className="flex flex-wrap gap-1 justify-end">
                        {project.technologies.slice(0, 4).map(t => (
                          <span key={t} className="text-[7px] font-medium text-primary-600">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-0.5">
                      {project.achievements.slice(0, 3).map((ach, i) => (
                        <li key={i} className="text-[8px] text-slate-600 flex items-start">
                          <span className="text-primary-500 mr-1.5 font-bold">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="mb-2">
              <h3 className="flex items-center text-xs font-bold text-primary-600 mb-2 uppercase tracking-tight">
                <Briefcase size={12} className="text-primary-600 mr-1.5" />
                Expériences Professionnelles
              </h3>
              <div className="space-y-2">
                {data.experience.slice(0, 2).map((exp, idx) => (
                  <div key={idx} className="relative pl-3 border-l-2 border-primary-200">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 bg-primary-500 rounded-full"></div>
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h4 className="font-bold text-slate-800 text-[9px]">{exp.position}</h4>
                      <span className="text-[7px] font-black text-primary-600 uppercase bg-primary-50 px-1 py-0.5 rounded">{exp.period}</span>
                    </div>
                    <p className="text-[8px] font-semibold text-slate-500 mb-0.5">{exp.company}</p>
                    <p className="text-[8px] text-slate-600 leading-tight">{exp.description}</p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="mt-1 space-y-0.5">
                        {exp.achievements.slice(0, 2).map((ach, i) => (
                          <li key={i} className="text-[7px] text-slate-500 flex items-start">
                            <span className="text-primary-500 mr-1">▸</span>
                            {ach}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Formation Section - Compact */}
            <section className="mt-3">
              <h3 className="flex items-center text-xs font-bold text-primary-600 mb-2 uppercase tracking-tight">
                <GraduationCap size={12} className="text-primary-600 mr-1.5" />
                Formation
              </h3>
              <div className="space-y-2">
                {/* IDMC */}
                <div className="relative pl-3 border-l-2 border-primary-200">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 bg-primary-500 rounded-full"></div>
                  <h4 className="text-[8px] font-bold text-slate-800 uppercase">Institut des Sciences du Digital, Management Cognition (IDMC) - Nancy</h4>
                  <div className="flex justify-between items-baseline mt-0.5">
                    <p className="text-[7px] text-slate-600">Master MIAGE - Systèmes d'Information Décisionnels</p>
                    <span className="text-[6px] text-slate-400">2024-2026</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <p className="text-[7px] text-slate-600">Licence MIAGE</p>
                    <span className="text-[6px] text-slate-400">2023-2024</span>
                  </div>
                </div>
                {/* ESI */}
                <div className="relative pl-3 border-l-2 border-primary-200">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 bg-primary-500 rounded-full"></div>
                  <h4 className="text-[8px] font-bold text-slate-800 uppercase">École Nationale Supérieure d'Informatique (ESI) - Algérie</h4>
                  <div className="flex justify-between items-baseline mt-0.5">
                    <p className="text-[7px] text-slate-600">Cycle Préparatoire Intégré</p>
                    <span className="text-[6px] text-slate-400">2020-2022</span>
                  </div>
                </div>
              </div>
            </section>
          </main>

        </MotionDiv>

        {/* Mobile Preview Card - Clickable */}
        <div className="md:hidden mt-8">
          <div 
            onClick={() => setIsModalOpen(true)}
            className="bg-white rounded-2xl shadow-lg p-6 text-center cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 border-2 border-transparent hover:border-primary-200 group animate-pulse-border"
          >
            <div className="w-20 h-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors relative">
              <Eye size={32} className="text-primary-600 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-full border-2 border-primary-400 animate-ping opacity-30"></div>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">
              👆 Cliquez pour voir mon CV
            </h3>
            <p className="text-slate-500 text-sm mb-4">
              Ouvrir l'aperçu en plein écran avec zoom
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors">Full Stack</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors">.NET / Blazor</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors">Flutter</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors">React</span>
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes pulse-border {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
            }
            50% {
              box-shadow: 0 0 0 8px rgba(99, 102, 241, 0);
            }
          }
          .animate-pulse-border {
            animation: pulse-border 2s ease-in-out infinite;
          }
        `}</style>
      </div>

      {/* Mobile Modal for CV Preview */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 bg-slate-900 text-white">
            <h3 className="font-bold">Mon CV</h3>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setZoom(z => Math.max(0.3, z - 0.1))}
                className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600"
              >
                <ZoomOut size={20} />
              </button>
              <span className="text-sm min-w-[50px] text-center">{Math.round(zoom * 100)}%</span>
              <button 
                onClick={() => setZoom(z => Math.min(1, z + 0.1))}
                className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600"
              >
                <ZoomIn size={20} />
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-red-600 rounded-lg hover:bg-red-500 ml-2"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          {/* Scrollable CV Container */}
          <div className="flex-1 overflow-auto p-4">
            <div 
              className="mx-auto origin-top-left"
              style={{ 
                transform: `scale(${zoom})`,
                width: '210mm',
                height: '297mm'
              }}
            >
              {/* CV Content for Modal */}
              <div className="bg-white flex flex-row w-[210mm] h-[297mm] shadow-2xl" style={{ minWidth: '210mm', minHeight: '297mm' }}>
                {/* SIDEBAR */}
                <aside className="w-[32%] bg-slate-900 text-white p-5">
                  {/* QR Code */}
                  <div className="flex justify-center mb-3">
                    <div className="bg-white p-1.5 rounded-lg">
                      <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=https://seghir-portfolio.vercel.app&bgcolor=ffffff&color=0f172a`}
                        alt="QR Code Portfolio"
                        className="w-[50px] h-[50px]"
                      />
                    </div>
                  </div>

                  {/* Photo and Name */}
                  <div className="text-center mb-4">
                    <div className="relative w-16 h-16 mx-auto mb-2">
                      <img 
                        src={data.personal.avatar} 
                        alt={data.personal.name} 
                        className="relative w-full h-full object-cover rounded-full border-2 border-slate-700 shadow-lg"
                      />
                    </div>
                    <h1 className="text-base font-bold tracking-tight leading-tight">Abderrazak Seghir</h1>
                    <p className="text-primary-400 font-semibold text-[10px] uppercase tracking-wider mt-0.5">Développeur Full Stack</p>
                  </div>

                  <div className="space-y-4">
                    {/* Contact */}
                    <section>
                      <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.15em] mb-1.5 border-b border-slate-800 pb-1">Contact</h3>
                      <ul className="space-y-1">
                        <li className="flex items-center text-[9px] text-slate-300 gap-1.5">
                          <Mail size={10} className="text-primary-500 shrink-0" />
                          <span className="truncate">{data.contact.email}</span>
                        </li>
                        <li className="flex items-center text-[9px] text-slate-300 gap-1.5">
                          <Phone size={10} className="text-primary-500 shrink-0" />
                          {data.contact.phone}
                        </li>
                        <li className="flex items-center text-[9px] text-slate-300 gap-1.5">
                          <MapPin size={10} className="text-primary-500 shrink-0" />
                          Mobilité : Toute la France
                        </li>
                        <li className="flex items-center text-[9px] text-slate-300 gap-1.5">
                          <Car size={10} className="text-primary-500 shrink-0" />
                          Permis B
                        </li>
                        <li className="flex items-center text-[9px] text-slate-300 gap-1.5">
                          <Linkedin size={10} className="text-primary-500 shrink-0" />
                          <span className="text-primary-400">SEGHIR ABDERRAZAK</span>
                        </li>
                      </ul>
                    </section>

                    {/* Skills */}
                    <section>
                      <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.15em] mb-2 border-b border-slate-800 pb-1">Expertise</h3>
                      <div className="space-y-2">
                        {data.skillCategories.slice(0, 4).map((cat, idx) => (
                          <div key={idx}>
                            <p className="text-[8px] font-bold text-primary-400 mb-1 uppercase">{cat.category}</p>
                            <div className="flex flex-wrap gap-0.5">
                              {cat.skills.slice(0, 5).map(s => (
                                <span key={s} className="px-1 py-0.5 bg-slate-800/50 border border-slate-700 text-[7px] rounded text-slate-300">{s}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Certifications */}
                    <section>
                      <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.15em] mb-1.5 border-b border-slate-800 pb-1">Certifications</h3>
                      <div className="p-1.5 bg-primary-500/10 border border-primary-500/20 rounded">
                        <p className="text-[9px] font-bold text-primary-400 flex items-center mb-0.5">
                          <Award size={10} className="mr-1" /> AWS Certified
                        </p>
                        <p className="text-[8px] text-slate-300">Cloud Practitioner (CLF-C02)</p>
                        <p className="text-[7px] text-slate-400 flex items-center mt-1">
                          <Clock size={8} className="mr-1 text-primary-500" /> En préparation
                        </p>
                      </div>
                    </section>

                    {/* Hobbies */}
                    <section>
                      <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.15em] mb-1.5 border-b border-slate-800 pb-1">Centre d'intérêt</h3>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="flex items-center gap-1 px-1.5 py-0.5 bg-slate-800/50 border border-slate-700 text-[8px] rounded text-slate-300">
                          <Footprints size={9} className="text-primary-500" /> Course à pied
                        </span>
                        <span className="flex items-center gap-1 px-1.5 py-0.5 bg-slate-800/50 border border-slate-700 text-[8px] rounded text-slate-300">
                          <Camera size={9} className="text-primary-500" /> Photographie
                        </span>
                        <span className="flex items-center gap-1 px-1.5 py-0.5 bg-slate-800/50 border border-slate-700 text-[8px] rounded text-slate-300">
                          <Waves size={9} className="text-primary-500" /> Piscine
                        </span>
                      </div>
                    </section>
                  </div>
                </aside>

                {/* MAIN CONTENT */}
                <main className="w-[68%] p-5 overflow-hidden">
                  {/* CDI Banner */}
                  <div className="mb-3 p-2 bg-primary-50 border border-primary-200 rounded-lg">
                    <p className="flex items-center text-[11px] font-bold text-primary-700 uppercase tracking-wide">
                      <Target size={14} className="mr-2 text-primary-600" />
                      Recherche de CDI - Septembre 2026
                    </p>
                  </div>

                  {/* Profile */}
                  <header className="mb-3">
                    <h3 className="flex items-center text-xs font-bold text-primary-600 mb-1.5 uppercase tracking-tight">
                      <Sparkles size={12} className="text-primary-600 mr-1.5" />
                      Profil & Objectif
                    </h3>
                    <p className="text-slate-600 leading-snug text-[9px] italic border-l-2 border-primary-500 pl-2 py-0.5">
                      "{data.personal.description}"
                    </p>
                  </header>

                  {/* Projects */}
                  <section className="mb-3">
                    <h3 className="flex items-center text-xs font-bold text-primary-600 mb-2 uppercase tracking-tight">
                      <ExternalLink size={12} className="text-primary-600 mr-1.5" />
                      Projets & Réalisations
                    </h3>
                    <div className="space-y-2">
                      {data.projects.slice(0, 4).map((project, idx) => (
                        <div key={idx} className="pb-2 border-b border-slate-100 last:border-0 last:pb-0">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-slate-800 text-[9px]">{project.title}</h4>
                            <div className="flex flex-wrap gap-1 justify-end">
                              {project.technologies.slice(0, 4).map(t => (
                                <span key={t} className="text-[7px] font-medium text-primary-600">{t}</span>
                              ))}
                            </div>
                          </div>
                          <ul className="space-y-0.5">
                            {project.achievements.slice(0, 3).map((ach, i) => (
                              <li key={i} className="text-[8px] text-slate-600 flex items-start">
                                <span className="text-primary-500 mr-1.5 font-bold">•</span>
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Experience */}
                  <section className="mb-2">
                    <h3 className="flex items-center text-xs font-bold text-primary-600 mb-2 uppercase tracking-tight">
                      <Briefcase size={12} className="text-primary-600 mr-1.5" />
                      Expériences Professionnelles
                    </h3>
                    <div className="space-y-2">
                      {data.experience.slice(0, 2).map((exp, idx) => (
                        <div key={idx} className="relative pl-3 border-l-2 border-primary-200">
                          <div className="absolute -left-[5px] top-1 w-2 h-2 bg-primary-500 rounded-full"></div>
                          <div className="flex justify-between items-baseline mb-0.5">
                            <h4 className="font-bold text-slate-800 text-[9px]">{exp.position}</h4>
                            <span className="text-[7px] font-black text-primary-600 uppercase bg-primary-50 px-1 py-0.5 rounded">{exp.period}</span>
                          </div>
                          <p className="text-[8px] font-semibold text-slate-500 mb-0.5">{exp.company}</p>
                          <p className="text-[8px] text-slate-600 leading-tight">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Formation */}
                  <section className="mt-3">
                    <h3 className="flex items-center text-xs font-bold text-primary-600 mb-2 uppercase tracking-tight">
                      <GraduationCap size={12} className="text-primary-600 mr-1.5" />
                      Formation
                    </h3>
                    <div className="space-y-2">
                      <div className="relative pl-3 border-l-2 border-primary-200">
                        <div className="absolute -left-[5px] top-1 w-2 h-2 bg-primary-500 rounded-full"></div>
                        <h4 className="text-[8px] font-bold text-slate-800 uppercase">Institut des Sciences du Digital, Management Cognition (IDMC) - Nancy</h4>
                        <div className="flex justify-between items-baseline mt-0.5">
                          <p className="text-[7px] text-slate-600">Master MIAGE - Systèmes d'Information Décisionnels</p>
                          <span className="text-[6px] text-slate-400">2024-2026</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <p className="text-[7px] text-slate-600">Licence MIAGE</p>
                          <span className="text-[6px] text-slate-400">2023-2024</span>
                        </div>
                      </div>
                      <div className="relative pl-3 border-l-2 border-primary-200">
                        <div className="absolute -left-[5px] top-1 w-2 h-2 bg-primary-500 rounded-full"></div>
                        <h4 className="text-[8px] font-bold text-slate-800 uppercase">École Nationale Supérieure d'Informatique (ESI) - Algérie</h4>
                        <div className="flex justify-between items-baseline mt-0.5">
                          <p className="text-[7px] text-slate-600">Cycle Préparatoire Intégré</p>
                          <span className="text-[6px] text-slate-400">2020-2022</span>
                        </div>
                      </div>
                    </div>
                  </section>
                </main>
              </div>
            </div>
          </div>
          
          {/* Modal Footer with Download hint */}
          <div className="p-4 bg-slate-900 text-center">
            <p className="text-slate-400 text-sm">
              💡 Pour télécharger, faites une capture d'écran ou visitez depuis un ordinateur
            </p>
          </div>
        </div>
      )}

      <style>{`
        .resume-container {
          aspect-ratio: 210 / 297;
        }
        @media screen {
          .resume-container {
            max-height: 800px;
          }
        }
        @media print {
          @page {
            size: 210mm 297mm;
            margin: 0 !important;
          }
          
          html, body {
            width: 210mm !important;
            height: 297mm !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            background: white !important;
          }
          
          /* Hide everything */
          body * {
            visibility: hidden !important;
          }
          
          /* Show only the CV */
          #cv-print-area,
          #cv-print-area * {
            visibility: visible !important;
          }
          
          /* Position and size the CV exactly to A4 */
          #cv-print-area {
            position: fixed !important;
            left: 0 !important;
            top: 0 !important;
            width: 210mm !important;
            height: 297mm !important;
            max-height: 297mm !important;
            min-height: 297mm !important;
            max-width: 210mm !important;
            min-width: 210mm !important;
            display: flex !important;
            flex-direction: row !important;
            overflow: hidden !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            page-break-after: avoid !important;
            page-break-before: avoid !important;
            page-break-inside: avoid !important;
            break-after: avoid !important;
            break-before: avoid !important;
            break-inside: avoid !important;
          }
          
          .resume-sidebar {
            width: 67mm !important;
            min-width: 67mm !important;
            max-width: 67mm !important;
            background-color: #0f172a !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
            padding: 5mm 4mm !important;
            height: 297mm !important;
            max-height: 297mm !important;
            min-height: 297mm !important;
            overflow: hidden !important;
            flex-shrink: 0 !important;
          }
          
          .resume-main {
            width: 143mm !important;
            min-width: 143mm !important;
            max-width: 143mm !important;
            padding: 5mm 6mm !important;
            height: 297mm !important;
            max-height: 297mm !important;
            min-height: 297mm !important;
            overflow: hidden !important;
            background: white !important;
            flex-shrink: 0 !important;
          }
          
          /* Prevent any page breaks inside */
          .resume-sidebar *,
          .resume-main * {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Ensure colors print correctly */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          .bg-slate-900 { background-color: #0f172a !important; }
          .bg-slate-800 { background-color: #1e293b !important; }
          .bg-slate-800\/50 { background-color: rgba(30, 41, 59, 0.5) !important; }
          .bg-slate-50 { background-color: #f8fafc !important; }
          .bg-primary-500 { background-color: #6366f1 !important; }
          .bg-primary-500\/10 { background-color: rgba(99, 102, 241, 0.1) !important; }
          .bg-primary-50 { background-color: #eef2ff !important; }
          
          .text-primary-400 { color: #818cf8 !important; }
          .text-primary-500 { color: #6366f1 !important; }
          .text-primary-600 { color: #4f46e5 !important; }
          .text-slate-300 { color: #cbd5e1 !important; }
          .text-slate-400 { color: #94a3b8 !important; }
          .text-slate-500 { color: #64748b !important; }
          .text-slate-600 { color: #475569 !important; }
          .text-slate-700 { color: #334155 !important; }
          .text-slate-800 { color: #1e293b !important; }
          .text-slate-900 { color: #0f172a !important; }
          
          .border-slate-700 { border-color: #334155 !important; }
          .border-slate-800 { border-color: #1e293b !important; }
          .border-slate-100 { border-color: #f1f5f9 !important; }
          .border-primary-500 { border-color: #6366f1 !important; }
          .border-primary-500\/20 { border-color: rgba(99, 102, 241, 0.2) !important; }
        }
      `}</style>
    </section>
  );
};
