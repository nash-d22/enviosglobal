import { ShieldCheck, Clock, MapPin } from 'lucide-react';

const Cotizar = () => {
  return (
    <div className="animate-in fade-in duration-500 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-16">
            <h2 className="text-3xl font-bold mb-6">Cotiza tu Envío</h2>
            <p className="text-gray-600 mb-10">Completa los datos para obtener un valor aproximado del servicio.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Origen</label>
                  <select className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none">
                    <option>Bogotá</option>
                    <option>Medellín</option>
                    <option>Cali</option>
                    <option>Barranquilla</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Destino</label>
                  <select className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none">
                    <option>Medellín</option>
                    <option>Bogotá</option>
                    <option>Cali</option>
                    <option>Cartagena</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Peso (kg)</label>
                  <input type="number" placeholder="0.5" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Envío</label>
                  <select className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none">
                    <option>Documento</option>
                    <option>Paquete</option>
                    <option>Mercancía</option>
                  </select>
                </div>
              </div>

              <button type="button" className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
                Calcular Costo
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 bg-primary p-8 md:p-16 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8">¿Por qué elegirnos?</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-lg"><ShieldCheck className="text-accent" /></div>
                <div>
                  <p className="font-bold">Seguridad Garantizada</p>
                  <p className="text-emerald-50 text-sm">Tus paquetes están protegidos con seguros integrales.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-lg"><Clock className="text-accent" /></div>
                <div>
                  <p className="font-bold">Puntualidad Extrema</p>
                  <p className="text-emerald-50 text-sm">Cumplimos con los tiempos de entrega pactados.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-lg"><MapPin className="text-accent" /></div>
                <div>
                  <p className="font-bold">Cobertura Total</p>
                  <p className="text-emerald-50 text-sm">Llegamos a más de 1,100 municipios en el país.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cotizar;
