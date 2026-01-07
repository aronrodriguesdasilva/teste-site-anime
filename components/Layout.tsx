import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, Search, X, Instagram, Youtube, Twitter } from 'lucide-react';
import SEO from './SEO';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Shinjitsu - Análises Profundas de Anime e Mangá',
  description = 'Explorando a profundidade do universo otaku com análises críticas, reviews e editoriais sobre anime, mangá e cultura pop.',
  keywords = 'anime, mangá, análise, review, crítica, otaku, cultura pop, shinjitsu',
  image 
}) => {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check system preference on mount
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const NavLink = ({ to, label, isActive }: { to: string, label: string, isActive: boolean }) => (
    <Link
      to={to}
      className={`text-ink dark:text-white pb-1 font-bold uppercase text-sm tracking-wider transition-colors hover:text-black dark:hover:text-white
        ${isActive ? 'border-b-2 border-accent-anime' : 'text-gray-500 dark:text-gray-400 hover:text-ink'}`}
    >
      {label}
    </Link>
  );

  return (
    <div className="min-h-screen bg-paper dark:bg-paper-dark transition-colors duration-300 flex flex-col relative font-display text-ink dark:text-white">
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        url={window.location.href}
        type="website"
      />
      
      {/* Background Halftone Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0 bg-halftone-light bg-halftone-size dark:hidden"></div>
        <div className="absolute inset-0 bg-halftone-dark bg-halftone-size hidden dark:block"></div>
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-paper dark:bg-paper-dark border-b-2 border-ink dark:border-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-ink dark:bg-white flex items-center justify-center text-white dark:text-black font-black text-xl border-2 border-transparent group-hover:bg-transparent group-hover:text-ink dark:group-hover:text-white group-hover:border-ink dark:group-hover:border-white transition-all duration-200">
              S
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase italic">
              Shin<span className="underline decoration-4 decoration-accent-anime">jitsu</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" label="Início" isActive={location.pathname === '/'} />
            <NavLink to="/post" label="Análises" isActive={location.pathname === '/post'} />
            <NavLink to="/about" label="Sobre" isActive={location.pathname === '/about'} />
            <NavLink to="/contact" label="Contato" isActive={location.pathname === '/contact'} />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 border-2 border-ink dark:border-white flex items-center justify-center hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 shadow-manga-sm dark:shadow-manga-sm-dark active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="md:hidden w-10 h-10 border-2 border-ink dark:border-white flex items-center justify-center hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-b-2 border-ink dark:border-white bg-paper dark:bg-paper-dark p-4 flex flex-col gap-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold uppercase">Início</Link>
            <Link to="/post" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold uppercase">Análises</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold uppercase">Sobre</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold uppercase">Contato</Link>
          </nav>
        )}
      </header>

      <main className="relative z-10 flex-grow pt-20 pb-20">
        {children}
      </main>

      <footer className="relative z-10 border-t-2 border-ink dark:border-white bg-paper dark:bg-paper-dark py-10 mt-auto">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <div className="flex justify-center gap-6 mb-6">
            <FooterSocial icon={<Twitter size={18} strokeWidth={3} />} label="X" />
            <FooterSocial icon={<Instagram size={18} strokeWidth={3} />} label="IG" />
            <FooterSocial icon={<Youtube size={18} strokeWidth={3} />} label="YT" />
          </div>
          <p className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
            © 2024 Shinjitsu. Feito para fãs, por fãs.
          </p>
        </div>
      </footer>

      <button className="fixed bottom-6 right-6 bg-paper dark:bg-paper-dark text-ink dark:text-white border-2 border-ink dark:border-white p-3 shadow-manga dark:shadow-manga-dark active:shadow-none active:translate-x-1 active:translate-y-1 transition-all z-40 flex items-center justify-center">
        <Search size={24} />
      </button>
    </div>
  );
};

const FooterSocial = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <a href="#" className="w-10 h-10 border-2 border-ink dark:border-white flex items-center justify-center text-ink dark:text-white hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-manga dark:shadow-manga-dark active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
    {icon}
  </a>
)

export default Layout;