/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import GameViewer from './components/GameViewer';
import gamesData from './data/games.json';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = ['All', 'Arcade', 'Puzzle', 'Action', 'Strategy', 'Sports'];

export default function App() {
  const [activeGame, setActiveGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredGame = useMemo(() => 
    gamesData.find(g => g.isFeatured) || gamesData[0], 
  []);

  const filteredGames = useMemo(() => {
    return gamesData.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <Navbar 
        onSearch={setSearchQuery} 
        onHome={() => {
          setSearchQuery('');
          setSelectedCategory('All');
        }} 
      />

      <main className="max-w-7xl mx-auto">
        <Hero game={featuredGame} onPlay={setActiveGame} />

        <div className="mb-12">
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <h2 className="font-display font-bold text-3xl">Galaxy Library</h2>
            
            <div className="flex gap-2 p-1 bg-white/5 rounded-2xl border border-white/5 overflow-x-auto scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat 
                      ? 'bg-nebula-purple text-white neon-glow' 
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filteredGames.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredGames.map((game) => (
                  <GameCard 
                    key={game.id} 
                    game={game} 
                    onClick={setActiveGame} 
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-24 glass-card">
              <p className="text-white/40 text-lg mb-2">No life detected in this sector.</p>
              <p className="text-white/20 text-sm">Try searching for another star or category.</p>
            </div>
          )}
        </div>
      </main>

      <GameViewer 
        game={activeGame} 
        onClose={() => setActiveGame(null)} 
      />

      <footer className="max-w-7xl mx-auto mt-24 border-t border-white/5 pt-12 flex flex-col sm:flex-row justify-between items-center gap-8 px-4">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-nebula-purple/20 p-1.5 rounded-lg border border-nebula-purple/30">
              <div className="w-4 h-4 bg-nebula-purple rounded-full" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">NEBULA</span>
          </div>
          <p className="text-white/40 text-[10px] uppercase tracking-widest">A Curated Cosmic Gaming Experience</p>
        </div>

        <div className="flex gap-8 text-white/40 text-[10px] uppercase tracking-widest font-bold">
          <a href="#" className="hover:text-nebula-cyan transition-colors">Privacy</a>
          <a href="#" className="hover:text-nebula-cyan transition-colors">Terms</a>
          <a href="#" className="hover:text-nebula-cyan transition-colors">Discord</a>
          <a href="#" className="hover:text-nebula-cyan transition-colors">Support</a>
        </div>
      </footer>
    </div>
  );
}

