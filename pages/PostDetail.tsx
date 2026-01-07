import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Share2, Facebook, X as XIcon, ArrowLeft } from 'lucide-react';
import { ALL_POSTS } from '../data/posts';
import { BlogPost, IMAGES } from '../types';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = ALL_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
        <h1 className="font-display font-black text-4xl uppercase mb-4">Post não encontrado</h1>
        <p className="font-mono text-gray-500 mb-8">A análise que você procura não existe ou foi removida.</p>
        <button
          onClick={() => navigate('/post')}
          className="bg-ink dark:bg-white text-white dark:text-ink px-6 py-3 font-bold uppercase tracking-widest border-2 border-transparent hover:border-ink dark:hover:border-white hover:bg-transparent hover:text-ink dark:hover:text-white transition-all shadow-manga dark:shadow-manga-dark"
        >
          Voltar para Análises
        </button>
      </div>
    );
  }

  // Get related posts (excluding current one)
  const relatedPosts = ALL_POSTS.filter(p => p.id !== id).slice(0, 2);

  return (
    <div className="pb-24">
      {/* Hero Image Section */}
      <div className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden border-b-2 border-ink dark:border-white group">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover grayscale brightness-110 contrast-125 group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paper dark:from-paper-dark via-transparent to-transparent opacity-90"></div>
        <div className="absolute top-6 left-4 md:left-auto md:max-w-3xl md:mx-auto md:w-full md:px-5">
          <span className="inline-block px-4 py-1.5 bg-ink dark:bg-white text-white dark:text-ink text-xs font-display font-bold uppercase tracking-widest border border-paper dark:border-paper-dark shadow-manga-sm dark:shadow-manga-sm-dark">
            {post.category}
          </span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-5 relative z-10 -mt-16">
        {/* Header Block */}
        <div className="bg-paper dark:bg-paper-dark p-6 md:p-8 border-2 border-ink dark:border-white shadow-manga dark:shadow-manga-dark mb-10 transition-colors duration-300">
          <h1 className="font-display font-bold text-3xl md:text-5xl leading-[0.9] mb-6 uppercase tracking-tight text-ink dark:text-white">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-dashed border-gray-300 dark:border-gray-700 pt-5 mt-6">
            <div className="flex items-center gap-3">
              <img
                src={post.author?.avatar || IMAGES.avatar1}
                alt="Avatar do Autor"
                className="w-12 h-12 rounded-none border-2 border-ink dark:border-white p-0.5 bg-white"
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-wider font-display text-ink dark:text-white">{post.author?.name || 'Redação'}</p>
                <p className="text-[11px] uppercase tracking-wide opacity-70 text-ink dark:text-white">{post.author?.role || 'Colaborador'}</p>
              </div>
            </div>
            <div className="text-right text-ink dark:text-white">
              <p className="text-xs font-mono uppercase tracking-tight flex items-center gap-1 justify-end opacity-70">
                <Calendar size={14} /> {post.date}
              </p>
              <p className="text-xs font-bold mt-1">{post.readTime} LEITURA</p>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        <div
          className="prose prose-lg prose-slate dark:prose-invert font-body max-w-none text-ink dark:text-white/90"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />

        {/* Tags */}
        <div className="mt-12 mb-10 flex flex-wrap gap-3">
          {['#Anime', '#Review', `#${post.category}`].map((tag, i) => (
            <span key={i} className="px-4 py-1.5 border-2 border-ink dark:border-white bg-paper dark:bg-paper-dark text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all cursor-pointer">
              {tag}
            </span>
          ))}
        </div>

        {/* Share */}
        <div className="flex items-center justify-between border-y-2 border-ink dark:border-white py-8 my-12 bg-gray-manga dark:bg-gray-manga-dark px-4 -mx-4 md:rounded-lg md:mx-0">
          <span className="font-display font-bold text-xl uppercase tracking-widest text-ink dark:text-white">Compartilhar</span>
          <div className="flex gap-4">
            <button className="w-10 h-10 border-2 border-ink dark:border-white bg-paper dark:bg-paper-dark text-ink dark:text-white flex items-center justify-center hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-manga-sm dark:shadow-manga-sm-dark hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]">
              <Facebook size={18} />
            </button>
            <button className="w-10 h-10 border-2 border-ink dark:border-white bg-paper dark:bg-paper-dark text-ink dark:text-white flex items-center justify-center hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-manga-sm dark:shadow-manga-sm-dark hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]">
              <XIcon size={18} />
            </button>
            <button className="w-10 h-10 border-2 border-ink dark:border-white bg-paper dark:bg-paper-dark text-ink dark:text-white flex items-center justify-center hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-manga-sm dark:shadow-manga-sm-dark hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {/* Continue Reading */}
        <section className="mt-16">
          <h2 className="font-display font-bold text-3xl mb-8 flex items-center gap-3 text-ink dark:text-white">
            <span className="w-3 h-8 bg-ink dark:bg-white"></span>
            CONTINUE LENDO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map(related => (
              <Link to={`/post/${related.id}`} key={related.id} className="group block relative border-2 border-ink dark:border-white shadow-manga dark:shadow-manga-dark hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all bg-paper dark:bg-paper-dark">
                <div className="aspect-video overflow-hidden border-b-2 border-ink dark:border-white relative">
                  <img src={related.image} alt={related.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <span className="absolute top-2 left-2 bg-paper dark:bg-paper-dark text-ink dark:text-white border border-ink dark:border-white text-[10px] font-bold px-2 py-0.5 uppercase">{related.category}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-xl leading-tight group-hover:underline decoration-2 underline-offset-2 text-ink dark:text-white line-clamp-2">{related.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default PostDetail;