import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { IMAGES, BlogPost } from '../types';

const featuredPost: BlogPost = {
  id: 'frieren-1',
  title: 'O simbolismo oculto em Frieren e a Jornada Para o Além',
  excerpt: 'Uma exploração profunda sobre como a passagem do tempo redefine o gênero de fantasia e a percepção da mortalidade élfica.',
  image: IMAGES.frieren,
  category: 'Análise',
  date: '12 OUT 2023',
  readTime: '10 min'
};

const posts: BlogPost[] = [
  {
    id: 'cyberpunk-1',
    title: 'Cyberpunk: Edgerunners e a estética da tragédia inevitável',
    image: IMAGES.cyberpunk,
    category: 'Anime',
    date: 'Ontem',
    readTime: '5 min leitura'
  },
  {
    id: 'vagabond-1',
    title: 'Vagabond: A arte do pincel e a filosofia do guerreiro',
    image: IMAGES.vagabond,
    category: 'Mangá',
    date: '2 OUT',
    readTime: '8 min leitura'
  },
  {
    id: 'jjk-1',
    title: 'Jujutsu Kaisen: Por que o Arco de Shibuya mudou tudo',
    image: IMAGES.jjkShibuya,
    category: 'Anime',
    date: '28 SET',
    readTime: '4 min leitura'
  },
  {
    id: 'isekai-1',
    title: 'O declínio dos Isekais genéricos e o que vem a seguir',
    image: IMAGES.library,
    category: 'Editorial',
    date: '25 SET',
    readTime: '6 min leitura'
  }
];

const Home: React.FC = () => {
  return (
    <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 space-y-12">

      {/* Featured Section */}
      <section>
        <div className="flex items-center mb-4 pl-1">
          <div className="h-4 w-4 bg-ink dark:bg-white mr-2"></div>
          <h2 className="text-sm font-black uppercase tracking-widest text-ink dark:text-white">Destaque da Semana</h2>
        </div>
        <Link to={`/post/${featuredPost.id}`} className="block">
          <article className="relative group cursor-pointer border-4 border-ink dark:border-white shadow-manga dark:shadow-manga-dark bg-paper dark:bg-paper-dark transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-none dark:hover:shadow-none">
            <div className="relative overflow-hidden aspect-[4/3] md:aspect-[21/9] border-b-4 border-ink dark:border-white">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 contrast-125"
              />
              <div className="absolute top-4 right-4 bg-accent-anime text-white text-xs font-black px-3 py-1 uppercase tracking-wider border-2 border-ink shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {featuredPost.category}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3 border-b border-dashed border-zinc-400 dark:border-zinc-600 pb-2">
                <span className="text-gray-600 dark:text-gray-400 text-xs font-mono font-bold flex items-center gap-1 uppercase">
                  <Calendar size={14} /> {featuredPost.date}
                </span>
              </div>
              <h1 className="text-ink dark:text-white text-2xl md:text-3xl font-black leading-tight mb-3 font-display uppercase italic">
                {featuredPost.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base line-clamp-3 font-body font-medium leading-relaxed">
                {featuredPost.excerpt}
              </p>
            </div>
          </article>
        </Link>
      </section>

      {/* Latest Posts */}
      <section>
        <div className="flex items-center justify-between mb-6 pl-1 border-b-4 border-ink dark:border-white pb-1">
          <h2 className="text-lg font-black uppercase tracking-tighter text-ink dark:text-white italic">Últimas Publicações</h2>
          <Link to="/post" className="text-ink dark:text-white text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
            Ver tudo <ArrowRight size={14} />
          </Link>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link to={`/post/${post.id}`} key={post.id} className="block">
              <article className="bg-paper dark:bg-paper-dark border-2 border-ink dark:border-white p-0 flex flex-col md:flex-row shadow-manga-sm dark:shadow-manga-sm-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none dark:hover:shadow-none transition-all group cursor-pointer">
                <div className="flex flex-row h-32 md:h-40 w-full">
                  <div className="w-32 md:w-48 flex-shrink-0 border-r-2 border-ink dark:border-white overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300 contrast-125"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
                  </div>
                  <div className="flex flex-col justify-between p-3 flex-grow bg-paper dark:bg-paper-dark relative overflow-hidden">
                    <div>
                      <span className={`inline-block text-white text-[10px] font-black px-1.5 py-0.5 uppercase tracking-wide border border-ink mb-2
                        ${post.category === 'Anime' ? 'bg-accent-anime' :
                          post.category === 'Mangá' ? 'bg-accent-manga' : 'bg-accent-editorial'}`}
                      >
                        {post.category}
                      </span>
                      <h3 className="font-bold text-ink dark:text-white leading-tight text-sm md:text-lg line-clamp-2 uppercase font-display">
                        {post.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-dotted border-gray-400 dark:border-gray-600">
                      <span className="text-[10px] font-mono font-bold text-gray-500 dark:text-gray-400 uppercase">{post.readTime}</span>
                      <span className="text-[10px] font-mono font-bold text-gray-500 dark:text-gray-400 uppercase">{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-12 bg-paper dark:bg-paper-dark border-4 border-ink dark:border-white p-6 text-center relative shadow-manga dark:shadow-manga-dark">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-ink dark:bg-white text-white dark:text-ink px-4 py-1 font-black text-xs uppercase tracking-widest border-2 border-white dark:border-ink">
          Newsletter
        </div>
        <h3 className="text-xl font-black text-ink dark:text-white mb-2 uppercase italic tracking-tighter">Não perca um capítulo</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 px-2 font-medium">
          Receba nossas críticas profundas e recomendações semanais diretamente no seu email.
        </p>
        <form className="flex flex-col md:flex-row gap-3">
          <input
            className="w-full bg-paper dark:bg-paper-dark border-2 border-ink dark:border-white text-ink dark:text-white placeholder-gray-500 focus:ring-0 focus:border-accent-anime dark:focus:border-accent-anime p-3 text-sm font-bold font-mono outline-none"
            placeholder="SEU MELHOR EMAIL"
            type="email"
          />
          <button
            className="w-full md:w-auto bg-ink dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-ink font-black uppercase tracking-widest py-4 px-6 border-2 border-transparent transition active:scale-95"
            type="button"
          >
            Inscrever-se
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;