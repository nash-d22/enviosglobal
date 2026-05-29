import { useState, useEffect } from 'react';
import { Package, Plus, Search, Filter, Truck, Clock } from 'lucide-react';
import { packageService } from '../services/packageService';
import Swal from 'sweetalert2';

const MisPaquetes = () => {
  const [paquetes, setPaquetes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPaquetes = async () => {
      try {
        setLoading(true);
        const data = await packageService.getAll();
        setPaquetes(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error al cargar paquetes:', error);
        setPaquetes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPaquetes();
  }, []);

  const handleNuevoPaquete = () => {
    Swal.fire({
      title: 'Registrar Nuevo Envío',
      html: `
        <div class="text-left space-y-4">
          <div>
            <label class="block text-sm font-bold mb-1">Descripción del Contenido</label>
            <input id="swal-desc" class="swal2-input w-full m-0" placeholder="Ej: Laptop, Ropa, etc.">
          </div>
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label class="block text-sm font-bold mb-1">Ciudad Origen</label>
              <input id="swal-origen" class="swal2-input w-full m-0" placeholder="Ciudad">
            </div>
            <div>
              <label class="block text-sm font-bold mb-1">Ciudad Destino</label>
              <input id="swal-destino" class="swal2-input w-full m-0" placeholder="Ciudad">
            </div>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear Envío',
      confirmButtonColor: '#004aad',
      preConfirm: () => {
        const desc = document.getElementById('swal-desc').value;
        const origen = document.getElementById('swal-origen').value;
        const destino = document.getElementById('swal-destino').value;
        if (!desc || !origen || !destino) {
          Swal.showValidationMessage('Por favor completa todos los campos');
        }
        return { desc, origen, destino };
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Simulamos agregado local para la demo o llamado real
          const nuevo = {
            id: (paquetes?.length || 0) + 1,
            descripcion: result.value.desc,
            estado: 'Pendiente',
            origen: result.value.origen,
            destino: result.value.destino,
            fecha: new Date().toISOString().split('T')[0]
          };
          
          setPaquetes(prev => [nuevo, ...prev]);

          Swal.fire({
            title: '¡Éxito!',
            text: 'El envío ha sido registrado correctamente.',
            icon: 'success',
            confirmButtonColor: '#004aad'
          });
        } catch (error) {
          console.error('Error al crear paquete:', error);
          Swal.fire({
            title: 'Error',
            text: 'No se pudo crear el envío localmente.',
            icon: 'error',
            confirmButtonColor: '#004aad'
          });
        }
      }
    });
  };

  const getStatusColor = (status) => {
    if (!status) return 'bg-gray-100 text-gray-700 border-gray-200';
    switch (status.toLowerCase()) {
      case 'entregado': return 'bg-green-100 text-green-700 border-green-200';
      case 'en tránsito': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pendiente': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const filteredPaquetes = (paquetes || []).filter(p => 
    (p.descripcion?.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (p.id?.toString().includes(searchTerm))
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Mis Envíos</h1>
            <p className="text-gray-500 mt-1">Gestiona y rastrea todos tus paquetes en un solo lugar.</p>
          </div>
          <button 
            onClick={handleNuevoPaquete}
            className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer"
          >
            <Plus size={20} />
            Nuevo Envío
          </button>
        </div>

        {/* Search & Filters */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Buscar por descripción o número de guía..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-all cursor-pointer">
            <Filter size={18} />
            Filtros
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 font-medium">Cargando tus paquetes...</p>
          </div>
        ) : filteredPaquetes.length > 0 ? (
          <div className="grid gap-4">
            {filteredPaquetes.map((paquete) => (
              <div key={paquete.id} className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100 hover:border-primary/30 transition-all group">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex gap-4">
                    <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-primary/5 transition-colors h-fit">
                      <Package className="text-primary w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Guía #{paquete.id}</span>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${getStatusColor(paquete.estado)}`}>
                          {paquete.estado || 'Pendiente'}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{paquete.descripcion || 'Sin descripción'}</h3>
                      <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{paquete.fecha || 'Sin fecha'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Truck size={16} />
                          <span>{paquete.origen || 'N/A'} → {paquete.destino || 'N/A'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex-grow md:flex-grow-0 px-6 py-2.5 bg-gray-50 text-gray-600 rounded-xl font-bold hover:bg-gray-100 transition-all cursor-pointer">
                      Detalles
                    </button>
                    <button className="flex-grow md:flex-grow-0 px-6 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all cursor-pointer shadow-md shadow-primary/10">
                      Rastrear
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[2rem] p-12 text-center border border-dashed border-gray-300">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="text-gray-300 w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No se encontraron paquetes</h3>
            <p className="text-gray-500 max-w-sm mx-auto mb-8">
              Aún no tienes envíos registrados o no coinciden con tu búsqueda.
            </p>
            <button 
              onClick={handleNuevoPaquete}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-2xl font-bold hover:bg-primary/90 transition-all cursor-pointer"
            >
              <Plus size={20} />
              Crear mi primer envío
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MisPaquetes;
