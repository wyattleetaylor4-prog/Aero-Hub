import { Play } from 'lucide-react';
import { motion } from 'motion/react';
export default function GameCard({ game, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={() => onClick(game)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl glass-card border-white/5">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nebula-deep/90 via-nebula-deep/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        <div className="absolute inset-0 flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white text-nebula-deep p-4 rounded-full neon-glow">
            <Play className="w-6 h-6 fill-current" />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-nebula-cyan mb-1 block">
            {game.category}
          </span>
          <h3 className="font-display font-bold text-lg leading-tight group-hover:text-nebula-cyan transition-colors">
            {game.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
