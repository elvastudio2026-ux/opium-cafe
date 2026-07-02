export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-serif text-3xl mb-6">OPIUM<span className="font-light">CAFÉ</span></h2>
          <p className="text-gray-400 font-light max-w-sm mb-6 leading-relaxed">
            L'excellence de la cuisine italienne dans une atmosphère lounge et élégante à Hydra.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <span className="sr-only">Instagram</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <span className="sr-only">Facebook</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="uppercase tracking-widest text-sm font-semibold mb-6">Liens Rapides</h3>
          <ul className="space-y-4 text-gray-400 font-light">
            <li><a href="#about" className="hover:text-white transition-colors">À propos</a></li>
            <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
            <li><a href="#gallery" className="hover:text-white transition-colors">Galerie</a></li>
            <li><a href="#reservation" className="hover:text-white transition-colors">Réservation</a></li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase tracking-widest text-sm font-semibold mb-6">Contact</h3>
          <ul className="space-y-4 text-gray-400 font-light">
            <li>7 Rue de SAVOIE</li>
            <li>Hydra 16000, Alger</li>
            <li className="pt-2 text-white">0550 02 42 28</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
        <p>&copy; {new Date().getFullYear()} Opium Café. Tous droits réservés.</p>
        <p className="mt-2 md:mt-0">Prix : 2 000–3 000 DA</p>
      </div>
    </footer>
  );
}
