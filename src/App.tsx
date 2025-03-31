import React from 'react';
import { Menu, Github, Mail, Linkedin } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Espace Portfolio
          </h1>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Navigation />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 py-4">
            <nav className="flex flex-col items-center gap-4">
              <Navigation />
            </nav>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
}

export default App