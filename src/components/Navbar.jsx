import { Gamepad2, Search, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar({ onSearch, onHome }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nebula-deep/80 backdrop-blur-lg border-b border-nebula-glass-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <motion.div 
          onClick={onHome}
          className="flex items-center gap-2 cursor-pointer group"
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-nebula-purple p-2 rounded-xl group-hover:neon-glow transition-all">
            <Gamepad2 className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-nebula-purple to-nebula-cyan bg-clip-text text-transparent">
            NEBULA
          </span>
        </motion.div>

        <div className="flex-1 max-w-md relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Explore the galaxy of games..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-nebula-purple focus:ring-1 focus:ring-nebula-purple transition-all placeholder:text-white/20"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>Newest</span>
          </button>
          <div className="w-px h-6 bg-white/10" />
          <button className="bg-white text-nebula-deep px-4 py-2 rounded-full text-sm font-bold hover:bg-nebula-cyan hover:text-nebula-deep transition-all">
            Unlock Pro
          </button>
        </div>
      </div>
    </nav>
  );
}
