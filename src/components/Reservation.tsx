import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="reservation" className="py-24 px-6 bg-white dark:bg-brand-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-6"
        >
          Réserver une Table
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 mb-12"
        >
          Pour toute demande spéciale, veuillez nous contacter directement par téléphone.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          <div className="flex flex-col">
            <label className="uppercase tracking-widest text-xs font-semibold mb-2 text-gray-500">Nom complet</label>
            <input required type="text" className="border-b border-gray-300 dark:border-gray-700 bg-transparent py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors" placeholder="Votre nom" />
          </div>
          <div className="flex flex-col">
            <label className="uppercase tracking-widest text-xs font-semibold mb-2 text-gray-500">Téléphone</label>
            <input required type="tel" className="border-b border-gray-300 dark:border-gray-700 bg-transparent py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors" placeholder="0550 02 42 28" />
          </div>
          <div className="flex flex-col">
            <label className="uppercase tracking-widest text-xs font-semibold mb-2 text-gray-500">Date</label>
            <input required type="date" className="border-b border-gray-300 dark:border-gray-700 bg-transparent py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors color-scheme-light dark:[color-scheme:dark]" />
          </div>
          <div className="flex flex-col">
            <label className="uppercase tracking-widest text-xs font-semibold mb-2 text-gray-500">Heure</label>
            <input required type="time" className="border-b border-gray-300 dark:border-gray-700 bg-transparent py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors color-scheme-light dark:[color-scheme:dark]" />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="uppercase tracking-widest text-xs font-semibold mb-2 text-gray-500">Personnes</label>
            <select className="border-b border-gray-300 dark:border-gray-700 bg-transparent py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors">
              {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(num => (
                <option key={num} value={num} className="bg-white dark:bg-black">{num} {num === 1 ? 'Personne' : 'Personnes'}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="uppercase tracking-widest text-xs font-semibold mb-2 text-gray-500">Message (Optionnel)</label>
            <textarea rows={3} className="border-b border-gray-300 dark:border-gray-700 bg-transparent py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none" placeholder="Allergies, occasion spéciale..."></textarea>
          </div>
          
          <div className="md:col-span-2 mt-6 relative">
            <button 
              type="submit" 
              className="w-full py-4 bg-black text-white dark:bg-white dark:text-black uppercase tracking-widest text-sm hover:opacity-80 active:scale-[0.98] transition-all"
            >
              Confirmer la réservation
            </button>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-green-600 text-white flex items-center justify-center gap-2"
                >
                  <Check size={20} />
                  <span className="uppercase tracking-widest text-sm font-semibold">Demande envoyée</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
