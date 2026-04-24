import { Search } from 'lucide-react';
import { useState } from 'react';

const Rastreo = () => {
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
    <div className="animate-in fade-in duration-500 py-24 bg-white min-h-[60vh] flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rastrea tu Envío</h2>
            <p className="text-gray-600">Ingresa el número de guía para conocer el estado actual de tu paquete.</p>
        </div>

        <div className="bg-gray-50 p-8 rounded-[2rem] shadow-xl border border-gray-100">
            <form onSubmit={handleTracking} className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow flex items-center px-4 bg-white rounded-xl border border-gray-200">
                <Search className="text-gray-400 mr-2" size={20} />
            <input 
                type="text" 
                placeholder="Número de guía (ej. EG123456789)" 
                className="w-full py-4 focus:outline-none text-gray-800"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                />
            </div>
            <button 
                type="submit"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
                Consultar
            </button>
            </form>

            {trackingResult && (
            <div className="mt-8 p-6 bg-white rounded-2xl border border-primary/20 shadow-sm animate-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-500">Guía: {trackingResult.id}</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                    {trackingResult.status}
                </span>
                </div>
                <div className="space-y-4">
                <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                    <div>
                    <p className="font-bold text-gray-900">{trackingResult.location}</p>
                    <p className="text-sm text-gray-500">{trackingResult.date}</p>
                    </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    </div>
    </div>
);
};

export default Rastreo;
