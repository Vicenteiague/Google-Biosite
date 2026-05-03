/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  MapPin, 
  Globe, 
  Search, 
  Star, 
  Sun, 
  Moon, 
  Layout, 
  TrendingUp, 
  Phone,
  Mail,
  ExternalLink,
  Code2,
  Store,
  Zap,
  CreditCard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on preference or system
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        id="theme-toggle"
        className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95 ${
          isDarkMode ? 'bg-zinc-800 text-yellow-400 border border-zinc-700' : 'bg-white text-zinc-600 border border-zinc-200'
        }`}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <main className="max-w-2xl mx-auto px-4 py-12 md:py-20">
        
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <div className={`w-36 h-36 rounded-3xl flex items-center justify-center p-1 border-2 overflow-hidden relative shadow-2xl transition-transform hover:scale-105 active:scale-95 ${isDarkMode ? 'border-zinc-700 bg-zinc-900' : 'border-gray-200 bg-white'}`}>
               <img 
                 src="https://i.ibb.co/BH236jNr/IMG-20260315-111831-078.webp" 
                 alt="Start Mkt Local Logo" 
                 className="w-full h-full object-contain relative z-10 p-2"
                 onError={(e) => {
                   (e.target as HTMLImageElement).style.display = 'none';
                   (e.target as HTMLImageElement).parentElement?.querySelector('.logo-fallback')?.classList.remove('hidden');
                 }}
               />
               {/* Logo Fallback - Profissional caso a imagem falhe */}
               <div className="logo-fallback absolute inset-0 hidden flex flex-col items-center justify-center bg-gradient-to-tr from-green-500 to-blue-600 text-white p-4">
                  <TrendingUp size={48} className="mb-1" />
                  <span className="text-[10px] font-black uppercase tracking-tighter leading-none text-center">Start Mkt<br/>Local</span>
               </div>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-black mb-4 tracking-tight"
          >
            Start Mkt Local <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              Agência de Marketing
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className={`text-lg mb-8 leading-relaxed font-medium ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}
          >
            Entregamos resultados tangíveis que transformam a realidade do seu negócio. Nosso compromisso é aumentar suas vendas, consolidar sua marca e fazer você crescer no mercado. Estratégias sob medida que geram resultados reais para sua empresa.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <a 
              href="https://wa.me/5567993174612" 
              target="_blank" 
              rel="noopener noreferrer"
              id="whatsapp-cta"
              className="group relative flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-8 rounded-2xl shadow-xl shadow-green-900/20 transition-all hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <MessageCircle size={28} className="animate-pulse" />
              <span className="text-xl">FALAR NO WHATSAPP</span>
            </a>
          </motion.div>
        </motion.section>

        {/* Video Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className={`relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-200'}`}>
            <iframe 
               width="100%" 
               height="100%" 
               src="https://www.youtube.com/embed/IJHT-lXmDaU" 
               title="Start Mkt Local Video" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               allowFullScreen
               className="absolute inset-0"
            />
          </div>
        </motion.section>

        {/* Social Media Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black uppercase tracking-wider">Redes Sociais</h2>
            <div className={`flex-1 h-px ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-200'}`}></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SocialCard 
              icon={<Instagram className="text-pink-600" />}
              title="Instagram"
              link="https://instagram.com/startmktlocal"
              isDarkMode={isDarkMode}
            />
            <SocialCard 
              icon={<MapPin className="text-red-500" />}
              title="Nossa Localização"
              link="https://maps.app.goo.gl/H2ryHrEQQBdfYkTw5"
              isDarkMode={isDarkMode}
            />
            <SocialCard 
              icon={<Globe className="text-blue-500" />}
              title="Nosso Site"
              link="https://www.startmktlocal.com.br/"
              isDarkMode={isDarkMode}
            />
            <SocialCard 
              icon={<Search className="text-yellow-500" />}
              title="Perfil no Google"
              link="https://g.co/kgs/e9wwCVY"
              isDarkMode={isDarkMode}
            />
            <SocialCard 
              icon={<Star className="text-orange-400" />}
              title="Nos avalie no Google"
              link="https://g.page/r/CRV6qIFyKdSEEBM/review"
              isDarkMode={isDarkMode}
              className="sm:col-span-2"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-black uppercase tracking-wider">Serviços</h2>
            <div className={`flex-1 h-px ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-200'}`}></div>
          </div>

          <div className={`p-6 rounded-3xl mb-8 ${isDarkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-gray-100 shadow-sm'}`}>
            <p className={`text-base leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
              <span className="font-bold text-green-500 underline decoration-green-500/30">Otimização para Motores de Busca</span> - SEO & Tráfego Pago em Ponta Porã MS. Somos uma Agência de Marketing Digital Especializada em SEO (Search Engine Optimization), Google meu negócio e Tráfego Pago. Atuamos em Ponta Porã MS.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ServiceItem 
              icon={<Code2 size={20} />} 
              title="Criação de Sites" 
              isDarkMode={isDarkMode} 
            />
            <ServiceItem 
              icon={<Store size={20} />} 
              title="Criação de Perfil Google" 
              isDarkMode={isDarkMode} 
            />
            <ServiceItem 
              icon={<Zap size={20} />} 
              title="Tráfego Pago" 
              isDarkMode={isDarkMode} 
            />
            <ServiceItem 
              icon={<CreditCard size={20} />} 
              title="AvaliaCard NFC" 
              isDarkMode={isDarkMode} 
            />
          </div>
        </section>

        {/* Maps Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className={`p-2 rounded-3xl overflow-hidden shadow-lg mb-4 ${isDarkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-gray-200'}`}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.426280186347!2d-55.7132969254635!3d-22.52569892436112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94626fc36a5e31cf%3A0x84d4297281a87a15!2sStart%20Mkt%20Local%20-%20Ag%C3%AAncia%20de%20marketing!5e0!3m2!1spt-BR!2sbr!4v1762298523594!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="350" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </div>
          <a 
            href="https://maps.app.goo.gl/H2ryHrEQQBdfYkTw5" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-95 ${
              isDarkMode ? 'bg-zinc-800 text-white border border-zinc-700' : 'bg-white text-zinc-800 border border-gray-200 shadow-sm'
            }`}
          >
            <MapPin className="text-red-500" />
            <span>COMO CHEGAR (ABRIR NO MAPS)</span>
            <ExternalLink size={18} className="opacity-40" />
          </a>
        </motion.section>

        {/* Footer */}
        <footer className={`mt-20 py-12 px-6 rounded-t-[3rem] text-center border-t ${
          isDarkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-gray-200 shadow-[0_-1px_10px_rgba(0,0,0,0.02)]'
        }`}>
          <h3 className="text-xl font-black mb-6">Start Mkt Local Ponta Porã MS</h3>
          
          <div className="flex flex-col gap-4 items-center">
            <a href="tel:67993174612" className={`flex items-center gap-3 transition-colors ${isDarkMode ? 'hover:text-green-400 text-zinc-400' : 'hover:text-green-600 text-gray-600'}`}>
              <Phone size={20} />
              <span>(67) 99317-4612</span>
            </a>
            <a href="mailto:startmktlocal@gmail.com" className={`flex items-center gap-3 transition-colors ${isDarkMode ? 'hover:text-blue-400 text-zinc-400' : 'hover:text-blue-600 text-gray-600'}`}>
              <Mail size={20} />
              <span>startmktlocal@gmail.com</span>
            </a>
          </div>

          <div className="mt-10 opacity-30 text-xs uppercase tracking-widest">
            © 2024 Start Mkt Local. Todos os direitos reservados.
          </div>
        </footer>

      </main>
    </div>
  );
}

function SocialCard({ icon, title, link, isDarkMode, className = "" }: any) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group flex items-center p-5 rounded-2xl border transition-all ${className} ${
        isDarkMode 
          ? 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700' 
          : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'
      }`}
    >
      <div className={`p-3 rounded-xl mr-4 ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-50'}`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-sm tracking-tight mb-1">{title}</h3>
        <span className="text-[10px] uppercase font-black opacity-30 tracking-widest group-hover:opacity-100 group-hover:text-green-500 transition-all">Visitar Link</span>
      </div>
      <ExternalLink size={16} className="opacity-0 group-hover:opacity-30 transition-opacity" />
    </motion.a>
  );
}

function ServiceItem({ icon, title, isDarkMode }: any) {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-xl border ${
      isDarkMode 
        ? 'bg-zinc-900/30 border-zinc-800 text-zinc-300' 
        : 'bg-gray-50 border-gray-100 text-gray-700'
    }`}>
      <div className="text-green-500">{icon}</div>
      <span className="font-bold text-sm">{title}</span>
    </div>
  );
}
