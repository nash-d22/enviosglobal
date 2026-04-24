import { Truck, Globe, Calculator, ChevronRight } from 'lucide-react';

const Servicios = () => {
  return (
    <div className="animate-in fade-in duration-500 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de soluciones adaptadas a tus necesidades de transporte y logística.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-8 rounded-3xl border border-gray-100 hover:border-primary transition-all hover:shadow-xl group bg-gray-50">
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <Truck className="text-primary group-hover:text-white transition-colors" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Envíos Nacionales</h3>
            <p className="text-gray-600 mb-6">Llegamos a cada rincón del país con la mayor red de distribución. Entregas en 24-48 horas.</p>
            <a href="#" className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
              Saber más <ChevronRight size={18} />
            </a>
          </div>

          {/* Service 2 */}
          <div className="p-8 rounded-3xl border border-gray-100 hover:border-primary transition-all hover:shadow-xl group bg-gray-50">
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <Globe className="text-primary group-hover:text-white transition-colors" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Envíos Internacionales</h3>
            <p className="text-gray-600 mb-6">Conectamos tus envíos con el resto del mundo a través de nuestras alianzas globales.</p>
            <a href="#" className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
              Saber más <ChevronRight size={18} />
            </a>
          </div>

          {/* Service 3 */}
          <div className="p-8 rounded-3xl border border-gray-100 hover:border-primary transition-all hover:shadow-xl group bg-gray-50">
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <Calculator className="text-primary group-hover:text-white transition-colors" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Logística E-commerce</h3>
            <p className="text-gray-600 mb-6">Soluciones especializadas para tu negocio online. Integración total y gestión de devoluciones.</p>
            <a href="#" className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
              Saber más <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
