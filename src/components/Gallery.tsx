import { motion } from 'motion/react';
import ImageWithFallback from './ImageWithFallback';
import opiumSignImage from '../assets/images/opium_sign_glow_1782933190884.webp';
import coffeeDessertImage from '../assets/images/coffee_dessert_cocktail_1783020499422.webp';
import steakPlateImage from '../assets/images/steak_plate_1783020521680.webp';

const images = [
  opiumSignImage,
  coffeeDessertImage,
  steakPlateImage,
  "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1964&auto=format&fit=crop"
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
              <ImageWithFallback 
                src={images[0]} 
                alt="Intérieur Lounge" 
                className="w-full h-[60vh] object-cover hover:scale-[1.02] transition-transform duration-700" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <ImageWithFallback 
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
              <ImageWithFallback 
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
              <ImageWithFallback 
                src={images[3]} 
                alt="Ambiance Table" 
                className="w-full h-[60vh] object-cover hover:scale-[1.02] transition-transform duration-700" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
