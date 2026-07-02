import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background outline text */}
      <div className="absolute w-full top-1/2 -translate-y-1/2 flex justify-center overflow-hidden z-0 pointer-events-none">
         <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05, y: [0, -15, 0] }}
            transition={{ 
                opacity: { duration: 2 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" } 
            }}
            className="text-[22vw] font-serif text-white whitespace-nowrap select-none" 
         >
            Opium Café
         </motion.h1>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center mt-12">
        
        <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.h1 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-7xl md:text-[9rem] lg:text-[11rem] font-serif text-white mb-6 tracking-tighter leading-none text-center"
              >
                Opium Café
              </motion.h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-xs md:text-sm text-gray-300 font-sans tracking-wide"
            >
              <span>7 rue de SAVOIE, Hydra 16000</span>
              <span className="hidden md:inline text-gray-500">/</span>
              <span>Restaurant Italien & Lounge</span>
              <span className="hidden md:inline text-gray-500">/</span>
              <span>Ticket moyen : 2000-3000 DA</span>
            </motion.div>
        </div>

        {/* Bottom elements */}
        <div className="absolute bottom-12 left-6 md:left-12 max-w-sm hidden md:block">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="pl-4 border-l border-white/30"
            >
                <p className="text-gray-300 text-sm font-sans leading-relaxed">
                    Une belle découverte ! La décoration du restaurant est très agréable, avec une ambiance cosy où vous pouvez déguster d'exceptionnelles pâtes fraîches et pizzas artisanales.
                </p>
            </motion.div>
        </div>

        <div className="absolute bottom-12 right-6 md:right-12">
            <motion.a 
                href="#about"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="relative flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full group"
            >
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-white overflow-visible">
                    <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                    <text className="text-[10.5px] uppercase tracking-[0.2em] fill-current font-sans">
                        <textPath href="#circlePath" startOffset="0%">
                        EN SAVOIR PLUS SUR LE RESTAURANT • 
                        </textPath>
                    </text>
                    </svg>
                </div>
                <div className="relative z-10 bg-white text-black p-4 rounded-full group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
                    {/* Wavy edge style star */}
                    <div className="absolute inset-0 text-white">
                      <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full scale-[1.3]">
                        <path d="M50 0 C55 20 60 25 80 30 C60 35 55 40 50 60 C45 40 40 35 20 30 C40 25 45 20 50 0 Z" opacity="0" />
                      </svg>
                    </div>
                    <ArrowDown size={20} strokeWidth={1.5} className="relative z-10" />
                </div>
            </motion.a>
        </div>
      </div>
    </section>
  );
}
