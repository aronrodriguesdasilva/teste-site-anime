import React from 'react';
import { ArrowRight, Mail, Globe, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 px-4 py-8 max-w-lg mx-auto w-full">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex size-10 items-center justify-center border-2 border-transparent hover:border-ink dark:hover:border-white rounded-full text-ink dark:text-white active:scale-95 transition-all"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="mb-10 space-y-4 text-center">
        <div className="inline-block border-2 border-ink dark:border-white px-4 py-1 bg-ink dark:bg-white text-white dark:text-ink text-xs font-bold uppercase tracking-widest shadow-manga-sm dark:shadow-manga-sm-dark">
          Contato
        </div>
        <h1 className="text-4xl font-black leading-tight tracking-tighter uppercase text-ink dark:text-white">
          Fale Conosco
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base font-medium leading-relaxed max-w-sm mx-auto">
          Sugestões, parcerias ou erros? Mande sua mensagem. Responderemos num piscar de olhos.
        </p>
      </div>

      <div className="bg-paper dark:bg-paper-dark border-2 border-ink dark:border-white p-6 shadow-manga dark:shadow-manga-dark relative mb-12">
        {/* Corner Decors */}
        <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-ink dark:border-white"></div>
        <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-ink dark:border-white"></div>
        <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-ink dark:border-white"></div>
        <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-ink dark:border-white"></div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-wider text-ink dark:text-white" htmlFor="name">Nome / Nickname</label>
            <input
              className="w-full bg-transparent border-2 border-ink dark:border-white px-3 py-3 text-ink dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:border-ink focus:ring-1 focus:ring-ink dark:focus:border-white dark:focus:ring-white transition-all font-medium rounded-none shadow-sm outline-none"
              id="name"
              placeholder="Como te chamam?"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-wider text-ink dark:text-white" htmlFor="email">Email de Contato</label>
            <input
              className="w-full bg-transparent border-2 border-ink dark:border-white px-3 py-3 text-ink dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:border-ink focus:ring-1 focus:ring-ink dark:focus:border-white dark:focus:ring-white transition-all font-medium rounded-none shadow-sm outline-none"
              id="email"
              placeholder="seu@email.com"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-wider text-ink dark:text-white" htmlFor="message">Mensagem</label>
            <textarea
              className="w-full bg-transparent border-2 border-ink dark:border-white px-3 py-3 text-ink dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:border-ink focus:ring-1 focus:ring-ink dark:focus:border-white dark:focus:ring-white transition-all font-medium rounded-none shadow-sm resize-none outline-none"
              id="message"
              placeholder="Escreva aqui..."
              rows={4}
            ></textarea>
          </div>
          <button
            className="group relative w-full overflow-hidden border-2 border-ink dark:border-white bg-ink dark:bg-white py-4 text-white dark:text-ink font-black uppercase tracking-widest hover:bg-paper hover:text-ink dark:hover:bg-paper-dark dark:hover:text-white transition-all active:translate-x-[2px] active:translate-y-[2px] shadow-manga-sm dark:shadow-manga-sm-dark"
            type="submit"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Enviar
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </span>
          </button>
        </form>
      </div>

      <div className="relative my-8 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-ink/20 dark:border-white/20"></div>
        </div>
        <div className="relative bg-paper dark:bg-paper-dark px-4 border-2 border-transparent">
          <span className="text-xs font-bold uppercase text-gray-500 tracking-widest">Alternativas</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <a href="mailto:contato@shinjitsu.com" className="group relative block bg-paper dark:bg-paper-dark border-2 border-ink dark:border-white p-4 transition-all hover:-translate-y-1 hover:shadow-manga dark:hover:shadow-manga-dark">
          <div className="mb-3 flex size-8 items-center justify-center border-2 border-ink dark:border-white bg-gray-50 dark:bg-gray-800 text-ink dark:text-white group-hover:bg-ink group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-ink transition-colors rounded-none">
            <Mail size={20} />
          </div>
          <h3 className="font-bold text-ink dark:text-white uppercase text-sm">Email</h3>
          <p className="text-xs text-gray-500 mt-1">Resposta em 24h</p>
        </a>
        <a href="#" className="group relative block bg-paper dark:bg-paper-dark border-2 border-ink dark:border-white p-4 transition-all hover:-translate-y-1 hover:shadow-manga dark:hover:shadow-manga-dark">
          <div className="mb-3 flex size-8 items-center justify-center border-2 border-ink dark:border-white bg-gray-50 dark:bg-gray-800 text-ink dark:text-white group-hover:bg-ink group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-ink transition-colors rounded-none">
            <Globe size={20} />
          </div>
          <h3 className="font-bold text-ink dark:text-white uppercase text-sm">Social</h3>
          <p className="text-xs text-gray-500 mt-1">Twitter & Insta</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;