import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-0 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-[70vh] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.807759880195!2d3.0336!3d36.7268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad3f58a3f8c7%3A0x808381832049!2sHydra%2C%20Alger!5e0!3m2!1sfr!2sdz!4v1700000000000!5m2!1sfr!2sdz" 
          width="100%" 
          height="100%" 
          style={{ border: 0, position: 'absolute', top: 0, left: 0, filter: 'grayscale(0.8) contrast(1.2)' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Opium Café Location"
        ></iframe>
      </div>
      
      <div className="w-full md:w-1/2 py-24 px-8 md:px-16 lg:px-24 bg-gray-50 dark:bg-[#0a0a0a] flex flex-col justify-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-12"
        >
          Nous Trouver
        </motion.h2>

        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-4"
          >
            <MapPin className="mt-1 flex-shrink-0 opacity-50" />
            <div>
              <h3 className="uppercase tracking-widest text-sm font-semibold mb-2">Adresse</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">7 Rue de SAVOIE<br/>Hydra 16000, Alger</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-4"
          >
            <Clock className="mt-1 flex-shrink-0 opacity-50" />
            <div>
              <h3 className="uppercase tracking-widest text-sm font-semibold mb-2">Horaires</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">Ouvert tous les jours<br/>Jusqu'à 00:00</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-4"
          >
            <Phone className="mt-1 flex-shrink-0 opacity-50" />
            <div>
              <h3 className="uppercase tracking-widest text-sm font-semibold mb-2">Contact</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">0550 02 42 28</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <a 
            href="https://maps.google.com/?q=Opium+Cafe+Hydra,Alger" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block px-8 py-4 bg-black text-white dark:bg-white dark:text-black uppercase tracking-widest text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Obtenir l'itinéraire
          </a>
        </motion.div>
      </div>
    </section>
  );
}
