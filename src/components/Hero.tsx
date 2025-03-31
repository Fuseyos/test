import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Bienvenue sur Notre Espace Portfolio
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Découvrez le travail créatif et le parcours professionnel de notre équipe. Chaque portfolio représente des talents et des expériences uniques en développement web.
        </p>
        <a
          href="#team"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity duration-200"
        >
          Découvrir l'Équipe
        </a>
      </div>
    </section>
  );
};

export default Hero;