import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Ryma Ammar",
    text: "Une belle découverte ! La décoration du restaurant est très agréable, avec une ambiance cosy...",
  },
  {
    name: "Mehdi",
    text: "Très belle expérience culinaire et humaine. Atmosphère chaleureuse et service agréable.",
  },
  {
    name: "Hanane OUAOUA",
    text: "Belle décoration, service au top, personnel à l'écoute, pâtes fraîches et desserts maison.",
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-brand-black text-brand-light px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Mots de nos invités</h2>
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="text-xl font-medium">4.4</span>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} className={i === 4 ? "text-yellow-500/50" : ""} />
              ))}
            </div>
            <span className="text-gray-400 text-sm">(457 avis)</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-8 border border-white/10 flex flex-col items-center text-center hover:bg-white/5 transition-colors"
            >
              <div className="flex text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 font-light italic mb-8 flex-grow leading-relaxed">
                "{review.text}"
              </p>
              <p className="uppercase tracking-widest text-sm font-medium">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
