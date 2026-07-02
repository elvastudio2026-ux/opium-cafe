import { motion } from 'motion/react';
import tiramisuImage from '../assets/images/tiramisu_dessert_1782931976534.webp';
import pizzaMargheritaImage from '../assets/images/pizza_margherita_1782932238839.webp';

const menuItems = [
  {
    name: "Salade César",
    desc: "Laitue romaine, poulet grillé, croûtons, parmesan, sauce maison",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070&auto=format&fit=crop&fm=webp"
  },
  {
    name: "Pesto Stracciatella",
    desc: "Pâtes fraîches, pesto basilic, cœur de burrata, pignons de pin",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&fm=webp"
  },
  {
    name: "Raviolis Truffe",
    desc: "Raviolis maison farcis à la ricotta et crème de truffe noire",
    image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?q=80&w=2069&auto=format&fit=crop&fm=webp"
  },
  {
    name: "Pizza Margherita",
    desc: "Sauce tomate San Marzano, mozzarella fior di latte, basilic frais",
    image: pizzaMargheritaImage
  },
  {
    name: "Pizza Artisanale",
    desc: "Pâte maturée 48h, sauce tomate San Marzano, mozzarella fior di latte",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&fm=webp"
  },
  {
    name: "Tiramisu Maison",
    desc: "Savoiardi, café espresso, mascarpone crémeux, cacao",
    image: tiramisuImage
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-white text-black px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
            <div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-8 text-xs uppercase tracking-widest font-sans font-medium"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#a88c7d"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" /></svg>
                    <span>Opium Café</span>
                </motion.div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-serif leading-none tracking-tighter font-bold"
                >
                    Notre menu
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl md:text-3xl font-serif italic text-[#a88c7d] mt-2 ml-12 md:ml-32"
                >
                    de l'Opium Lounge
                </motion.p>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-sm pt-8 md:pt-16"
            >
                <p className="text-[#333] font-sans text-[15px] font-medium leading-relaxed mb-8">
                    Le menu suit les saisons, mais la cuisine affiche son style avec des plats comme des pâtes fraîches artisanales, des pizzas au feu de bois avec de la mozzarella fior di latte et nos raviolis maison à la crème de truffe noire.
                </p>
                <a href="#reservation" className="inline-block bg-[#111] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-black transition-colors">
                    VOIR LE MENU
                </a>
            </motion.div>
        </div>

        <div className="relative mt-20">
          {/* Decorative background lines */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20 hidden lg:block" style={{ top: '-10%', left: '-5%', width: '110%', height: '120%' }}>
            <svg viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
              <path d="M-100 200 C 150 150, 200 400, 400 350 C 600 300, 700 600, 1100 500" stroke="black" strokeWidth="1" />
              <path d="M-100 400 C 100 500, 300 200, 500 400 C 700 600, 850 100, 1100 300" stroke="black" strokeWidth="1" />
              <path d="M-100 600 C 200 650, 400 450, 600 600 C 800 750, 900 350, 1100 450" stroke="black" strokeWidth="1" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative z-10">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer hover:scale-105 transition-transform duration-500 ease-out"
              >
                <div className="overflow-hidden mb-6 relative aspect-[4/3] bg-gray-100 p-4 shadow-sm border border-gray-200/50 rounded-sm">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2 text-[#111] font-bold">{item.name}</h3>
                <p className="text-gray-500 font-sans font-medium text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
