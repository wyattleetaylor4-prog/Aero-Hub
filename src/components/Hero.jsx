import { Play, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
export default function Hero({ game, onPlay }) {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden rounded-3xl mb-12">
      <div className="absolute inset-0">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nebula-deep via-nebula-deep/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-nebula-deep via-transparent to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-end p-8 sm:p-12 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-nebula-cyan mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Trending Galaxy Wide</span>
          </div>
          
          <h1 className="font-display font-black text-5xl sm:text-7xl mb-4 leading-none tracking-tight">
            {game.title}
          </h1>
          <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-lg">
            {game.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onPlay(game)}
              className="bg-nebula-purple hover:bg-nebula-purple/80 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all neon-glow"
            >
              <Play className="w-5 h-5 fill-current" />
              Play Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold transition-all border border-white/10">
              Game Details
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
