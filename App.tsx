import React, { useState } from 'react';
import { 
  Server, 
  HardDrive, 
  Shield, 
  Headphones, 
  Cloud, 
  Zap, 
  Globe, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Feature cards data
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Processeurs High-Freq",
      description: "AMD EPYC et Ryzen de dernière génération pour des performances maximales"
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Stockage NVMe Gen4",
      description: "Vitesses de lecture/écriture jusqu'à 7000 MB/s pour une latence minimale"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Protection DDoS L7",
      description: "Système de protection anti-DDoS de niveau entreprise pour votre sécurité"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Support Expert 24/7",
      description: "Équipe d'experts disponible 24h/24 et 7j/7 pour vous aider"
    }
  ];

  // Pricing plans
  const pricingPlans = [
    {
      name: "Essential",
      price: "€9.99",
      period: "/mois",
      specs: ["2 vCPU", "4GB RAM", "100GB NVMe", "1 IP"],
      popular: false
    },
    {
      name: "Pro-Game",
      price: "€29.99",
      period: "/mois",
      specs: ["4 vCPU", "16GB RAM", "500GB NVMe", "1 IP", "Anti-DDoS Game"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "€79.99",
      period: "/mois",
      specs: ["8 vCPU", "32GB RAM", "1TB NVMe", "5 IP", "Peering Direct"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                ZORKHOST
              </span>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#cloud" className="text-gray-300 hover:text-white transition-colors">Cloud</a>
                <a href="#dedicated" className="text-gray-300 hover:text-white transition-colors">Dédiés</a>
                <a href="#game" className="text-gray-300 hover:text-white transition-colors">Game</a>
                <a href="#network" className="text-gray-300 hover:text-white transition-colors">Network</a>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  Console Client
                </button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#cloud" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Cloud</a>
              <a href="#dedicated" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Dédiés</a>
              <a href="#game" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Game</a>
              <a href="#network" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Network</a>
              <button className="w-full mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Console Client
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              L'infrastructure brute.
            </span>
            <br />
            <span className="text-white">La performance sans compromis.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Des serveurs cloud haute performance, des protections anti-DDoS de niveau entreprise et une latence inférieure à 1ms sur notre backbone européen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center">
              Déployer maintenant
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
              Voir le Network
            </button>
          </div>
          <div className="mt-8 inline-flex items-center px-4 py-2 bg-gray-900/50 rounded-full border border-gray-700">
            <span className="text-green-400 mr-2">●</span>
            <span className="text-sm">Latence < 1ms</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi choisir Zorkhost ?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Notre infrastructure est conçue pour offrir des performances inégalées avec une fiabilité absolue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-blue-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos offres</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choisissez l'offre qui correspond à vos besoins avec des configurations sur mesure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-gray-900/50 backdrop-blur-sm rounded-xl border p-6 ${
                  plan.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20 transform scale-105 z-10' 
                    : 'border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      Le plus populaire
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400"> {plan.period}</span>
                </div>
                
                <ul className="mb-8 space-y-3">
                  {plan.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">{spec}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90'
                      : 'border border-gray-700 text-white hover:bg-gray-800'
                  }`}
                >
                  Sélectionner cette offre
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section id="network" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 text-center">
            <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Notre réseau</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              Un backbone 100 Gbps avec peering direct aux principaux IXP européens assure des connexions rapides et stables.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Backbone 100 Gbps</h3>
                <p className="text-gray-400 text-sm">Connectivité ultra-rapide entre nos datacenters</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Peering Direct IXP</h3>
                <p className="text-gray-400 text-sm">Connexion directe aux échanges internet majeurs</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Localisation France/Europe</h3>
                <p className="text-gray-400 text-sm">Datacenters stratégiquement positionnés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                ZORKHOST
              </span>
              <p className="text-gray-400 mt-2">L'infrastructure brute. La performance sans compromis.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">CGU</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-green-400 mr-2">●</span>
              <span className="text-sm">Status: All systems operational</span>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.44c.703 0 1.27.735 1.27 1.635 0 .9-.565 1.635-1.27 1.635-.704 0-1.27-.735-1.27-1.635.002-.9.567-1.635 1.27-1.635zm-4.643 0c.704 0 1.27.735 1.27 1.635 0 .9-.566 1.635-1.27 1.635-.704 0-1.27-.735-1.27-1.635 0-.9.566-1.635 1.27-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;