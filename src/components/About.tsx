import { motion } from 'motion/react';
import aboutInteriorImage from '../assets/images/about_interior_1783027689815.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto"
          >
            <img 
              src={aboutInteriorImage} 
              alt="Intérieur chaleureux Opium Café" 
              className="w-full h-full object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gray-200 dark:bg-gray-900 -z-10"></div>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">L'Art de Vivre<br/><span className="italic text-gray-500">à l'Italienne</span></h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-light text-lg">
              Une belle découverte au cœur de Hydra. L'Opium Café vous accueille dans une ambiance cosy et chaleureuse, où l'élégance du décor se marie à la perfection avec l'authenticité de notre cuisine.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-light text-lg">
              Dégustez nos spécialités de pâtes fraîches, nos pizzas artisanales et laissez-vous tenter par nos desserts maison, le tout préparé avec passion et des ingrédients de première qualité.
            </p>
            <div className="font-serif text-2xl italic text-black dark:text-white">Opium Café</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
