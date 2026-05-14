import { Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
export default function GameViewer({ game, onClose }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!game) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-nebula-deep/95 backdrop-blur-2xl flex flex-col"
      >
        <div className="h-16 px-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <img src={game.thumbnail} className="w-8 h-8 rounded-lg object-cover" />
            <div>
              <h3 className="font-bold text-sm leading-none">{game.title}</h3>
              <span className="text-[10px] text-white/40 uppercase tracking-tighter">{game.category}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 hover:bg-white/5 rounded-lg text-white/60 hover:text-white transition-colors"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-red-500/10 rounded-lg text-white/60 hover:text-red-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className={`flex-1 w-full bg-black relative ${isFullscreen ? 'fixed inset-0 z-[101]' : ''}`}>
          <iframe 
            src={game.iframeUrl} 
            className="w-full h-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            title={game.title}
          />
          {isFullscreen && (
            <button 
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 z-[102]"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {!isFullscreen && (
           <div className="p-4 border-t border-white/5 bg-white/5 backdrop-blur-sm">
             <p className="text-white/60 text-xs italic text-center">
               Note: Some games might take a moment to warp into your reality. If the screen is black, try refreshing your browser.
             </p>
           </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
