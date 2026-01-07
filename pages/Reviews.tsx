import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, X, ChevronDown, Calendar, ArrowRight } from 'lucide-react';
import { ALL_POSTS } from '../data/posts';
import { BlogPost } from '../types';

const Reviews: React.FC = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const categories = ['Anime', 'Mangá', 'Análise', 'Editorial', 'Horror'];

    const filteredPosts = activeCategory
        ? ALL_POSTS.filter(post => post.category === activeCategory)
        : ALL_POSTS;

    return (
        <div className="min-h-screen bg-paper dark:bg-paper-dark transition-colors duration-300">
            {/* Title Section */}
            <div className="pt-12 pb-8 px-4 text-center border-b-2 border-ink dark:border-white bg-paper dark:bg-paper-dark relative z-20">
                <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter text-ink dark:text-white mb-2">
                    Análises
                </h1>
                <p className="font-mono text-sm md:text-base uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Explorando a profundidade do universo otaku
                </p>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-16 z-30 bg-paper dark:bg-paper-dark border-b-2 border-ink dark:border-white transition-all duration-300">
                <div className="max-w-6xl mx-auto">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="w-full flex items-center justify-between p-4 bg-paper dark:bg-paper-dark hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors group"
                    >
                        <span className="flex items-center gap-2 font-bold uppercase tracking-widest text-ink dark:text-white">
                            <Filter size={20} className="group-hover:rotate-12 transition-transform" />
                            Filtros
                            {activeCategory && <span className="ml-2 px-2 py-0.5 bg-accent-anime text-white text-xs">{activeCategory}</span>}
                        </span>
                        <ChevronDown size={20} className={`transform transition-transform duration-300 text-ink dark:text-white ${isFilterOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Collapsible Filter Content */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out border-t-2 border-ink dark:border-white ${isFilterOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                        <div className="p-6 bg-gray-50 dark:bg-gray-900 flex flex-wrap gap-4 justify-center">
                            <button
                                onClick={() => setActiveCategory(null)}
                                className={`px-6 py-2 border-2 text-sm font-bold uppercase tracking-wider transition-all 
                  ${!activeCategory
                                        ? 'bg-ink text-white border-ink dark:bg-white dark:text-black dark:border-white shadow-manga-sm dark:shadow-manga-sm-dark'
                                        : 'bg-transparent text-ink border-ink dark:text-white dark:border-white hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-black'}`}
                            >
                                Todas
                            </button>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 border-2 text-sm font-bold uppercase tracking-wider transition-all 
                    ${activeCategory === cat
                                            ? 'bg-ink text-white border-ink dark:bg-white dark:text-black dark:border-white shadow-manga-sm dark:shadow-manga-sm-dark'
                                            : 'bg-transparent text-ink border-ink dark:text-white dark:border-white hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-black'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid of Posts */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/post/${post.id}`}
                            className="group block bg-paper dark:bg-paper-dark border-2 border-ink dark:border-white shadow-manga dark:shadow-manga-dark hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200"
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/3] overflow-hidden border-b-2 border-ink dark:border-white relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                                />
                                <div className="absolute top-3 left-3 bg-paper dark:bg-paper-dark border border-ink dark:border-white px-2 py-1">
                                    <span className="text-xs font-bold uppercase tracking-widest text-ink dark:text-white">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 font-mono mb-3">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {post.date}
                                    </span>
                                    <span>•</span>
                                    <span>{post.readTime} LEITURA</span>
                                </div>

                                <h2 className="font-display font-bold text-xl leading-tight mb-4 text-ink dark:text-white group-hover:text-accent-anime transition-colors line-clamp-2">
                                    {post.title}
                                </h2>

                                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-6 font-body leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-2">
                                        <img src={post.author?.avatar} alt={post.author?.name} className="w-6 h-6 rounded-full border border-ink dark:border-white" />
                                        <span className="text-xs font-bold uppercase text-ink dark:text-white truncate max-w-[100px]">{post.author?.name}</span>
                                    </div>
                                    <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-ink dark:text-white group-hover:translate-x-1 transition-transform">
                                        Ler <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
