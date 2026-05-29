import { ShieldCheck, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Cotizar = () => {
  const [formData, setFormData] = useState({
    origen: 'Bogotá',
    destino: 'Medellín',
    peso: '',
    tipo: 'Paquete'
  });

  const handleCalculate = (e) => {
    e.preventDefault();
    
    if (!formData.peso || formData.peso <= 0) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor ingresa un peso válido.',
        icon: 'error',
        confirmButtonColor: '#004aad'
      });
      return;
    }

    // Lógica simple de cálculo: base 10000 + (peso * 2000)
    const basePrice = 10000;
    const weightPrice = formData.peso * 2000;
    const totalPrice = basePrice + weightPrice;

    // Formatear a moneda colombiana
    const formattedPrice = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(totalPrice);

    Swal.fire({
      title: '¡Cotización Exitosa!',
      html: `
        <div class="text-left mt-4 space-y-2">
          <p><strong>Origen:</strong> ${formData.origen}</p>
          <p><strong>Destino:</strong> ${formData.destino}</p>
          <p><strong>Peso:</strong> ${formData.peso} kg</p>
          <hr class="my-2 border-gray-200" />
          <p class="text-xl text-center text-primary font-bold mt-4">
            Precio Estimado: ${formattedPrice}
          </p>
        </div>
      `,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#004aad',
      showCancelButton: true,
      cancelButtonText: 'Guardar Cotización',
      cancelButtonColor: '#ffb700',
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Guardado',
          text: 'Tu cotización ha sido guardada en tu historial.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  };

  return (
    <div className="animate-in fade-in duration-500 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-16">
            <h2 className="text-3xl font-bold mb-6">Cotiza tu Envío</h2>
            <p className="text-gray-600 mb-10">Completa los datos para obtener un valor aproximado del servicio.</p>
            
            <form className="space-y-6" onSubmit={handleCalculate}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Origen</label>
                  <select 
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                    value={formData.origen}
                    onChange={(e) => setFormData({...formData, origen: e.target.value})}
                  >
                    <option>Bogotá</option>
                    <option>Medellín</option>
                    <option>Cali</option>
                    <option>Barranquilla</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Destino</label>
                  <select 
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                    value={formData.destino}
                    onChange={(e) => setFormData({...formData, destino: e.target.value})}
                  >
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
                  <input 
                    type="number" 
                    placeholder="0.5" 
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" 
                    value={formData.peso}
                    onChange={(e) => setFormData({...formData, peso: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Envío</label>
                  <select 
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                    value={formData.tipo}
                    onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                  >
                    <option>Documento</option>
                    <option>Paquete</option>
                    <option>Mercancía</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
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
