import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
              Espace Portfolio
            </h3>
            <p className="text-gray-400">
              Mettant en valeur l'excellence créative de notre équipe
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Espace Portfolio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;