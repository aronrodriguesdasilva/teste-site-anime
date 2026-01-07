import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => ({ pathname: window.location.hash }), []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Layout 
            title="Shinjitsu - Análises Profundas de Anime e Mangá"
            description="Explorando a profundidade do universo otaku com análises críticas, reviews e editoriais sobre anime, mangá e cultura pop."
            keywords="anime, mangá, análise, review, crítica, otaku, cultura pop, shinjitsu"
          >
            <Home />
          </Layout>
        } />
        <Route path="/post" element={
          <Layout 
            title="Análises - Shinjitsu"
            description="Todas as análises e reviews de anime, mangá e cultura pop publicadas no Shinjitsu."
            keywords="análises, reviews, anime, mangá, crítica, cultura pop, shinjitsu"
          >
            <Reviews />
          </Layout>
        } />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/about" element={
          <Layout 
            title="Sobre Shinjitsu - Análises Profundas de Anime e Mangá"
            description="Conheça a equipe por trás do Shinjitsu e nossa missão de trazer análises profundas e honestas sobre anime e mangá."
            keywords="sobre, equipe, missão, shinjitsu, anime, mangá, análise"
          >
            <About />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout 
            title="Fale Conosco - Shinjitsu"
            description="Entre em contato com a equipe do Shinjitsu para sugestões, parcerias ou correções. Responderemos em até 24 horas."
            keywords="contato, sugestões, parcerias, correções, shinjitsu, anime, mangá"
          >
            <Contact />
          </Layout>
        } />
      </Routes>
    </Router>
  );
};

export default App;