import { Search } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTracking = (e) => {
    e.preventDefault();
    if (trackingId) {
      setTrackingResult({
        id: trackingId,
        status: 'En tránsito',
        location: 'Centro de Distribución Bogotá',
        date: '24 Abr 2026, 14:30'
      });
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary transform skew-x-12 translate-x-1/3 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Entregamos tus sueños, <br />
                <span className="text-accent">en cualquier lugar.</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-lg">
                Soluciones logísticas integrales para personas y empresas. Rapidez, seguridad y confianza en cada envío.
              </p>
              
              {/* Tracking Quick Search */}
              <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-xl">
                <div className="flex-grow flex items-center px-4">
                  <Search className="text-gray-400 mr-2" size={20} />
                  <input 
                    type="text" 
                    placeholder="Número de guía (ej. EG123456789)" 
                    className="w-full py-3 focus:outline-none text-gray-800"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                  />
                </div>
                <button 
                  onClick={handleTracking}
                  className="bg-secondary text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Rastrear Envío
                </button>
              </div>

              {trackingResult && (
                <div className="mt-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 inline-block animate-pulse">
                  <p className="text-sm font-semibold">Estado: <span className="text-accent">{trackingResult.status}</span></p>
                  <p className="text-xs opacity-80">{trackingResult.location} - {trackingResult.date}</p>
                </div>
              )}
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary rounded-full opacity-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
                  alt="Logistics" 
                  className="rounded-3xl shadow-2xl relative z-10 border-8 border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-accent mb-2">20+</div>
              <div className="text-gray-400">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-accent mb-2">1.2M</div>
              <div className="text-gray-400">Envíos Mensuales</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-accent mb-2">98%</div>
              <div className="text-gray-400">Entregas a Tiempo</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-accent mb-2">500+</div>
              <div className="text-gray-400">Puntos de Atención</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
