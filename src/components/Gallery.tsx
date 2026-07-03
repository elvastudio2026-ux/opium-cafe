import { motion } from 'motion/react';
import coffeeDessertImage from '../assets/images/coffee_dessert_cocktail_1783026944193.jpg';
import steakPlateImage from '../assets/images/steak_plate_1783026956634.jpg';

const images = [
  "https://res.cloudinary.com/dyw9qoe1j/image/upload/f_auto,q_auto/v1781441595/Photo1_reolbe.jpg",
  coffeeDessertImage,
  steakPlateImage,
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEmVPiXl8MGAPA60HsUrVYWkGAJDBM1ST-DPXpYcElNjTqWZyQEguW2GSKYjib6HBFnoY4dMgSJS_PlvcFdZzHiTypPLie-XZAfA98YwWu0OQ8JFRLOa1Eg62a6ULJym5FdY8MuIX3yroN3=w408-h725-k-no"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">L'Atmosphère</h2>
            <p className="text-gray-500 uppercase tracking-widest text-sm">Plongez dans l'univers Opium</p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:inline-block uppercase tracking-widest text-sm border-b border-black dark:border-white pb-1 hover:opacity-50 transition-opacity mt-6 md:mt-0"
          >
            Voir sur Instagram
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <img 
                src={images[0]} 
                alt="Intérieur Lounge" 
                loading="lazy"
                className="w-full h-[60vh] object-cover hover:scale-[1.05] transition-transform duration-700 ease-in-out" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <img 
                src={images[1]} 
                alt="Plat d'exception" 
                className="w-full h-[40vh] object-cover hover:scale-[1.02] transition-transform duration-700" 
              />
            </motion.div>
          </div>
          
          <div className="space-y-6 md:mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <img 
                src={images[2]} 
                alt="Détails Culinaires" 
                className="w-full h-[40vh] object-cover hover:scale-[1.02] transition-transform duration-700" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <img 
                src={images[3]} 
                alt="Ambiance Table" 
                loading="lazy"
                className="w-full h-[60vh] object-cover hover:scale-[1.05] transition-transform duration-700 ease-in-out" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
