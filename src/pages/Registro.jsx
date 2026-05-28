import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Package, Mail, Lock, User, Phone, MapPin, ArrowRight } from 'lucide-react';
import Swal from 'sweetalert2';
import { userService } from '../services/userService';

const Registro = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    telefono: '',
    direccion: ''
    });

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        await userService.register(formData);

        Swal.fire({
        title: '¡Registro Exitoso!',
        text: 'Tu cuenta ha sido creada. Ahora puedes iniciar sesión.',
        icon: 'success',
        confirmButtonColor: '#004aad'
        }).then(() => {
        navigate('/login');
        });
    } catch (error) {
        setLoading(false);
        console.error('Error en el registro:', error);

        const errorMessage = error.response?.data 
        ? (typeof error.response.data === 'string' ? error.response.data : 'Datos inválidos')
        : 'No se pudo conectar con el servidor. Asegúrate de que el backend esté corriendo.';

        Swal.fire({
        title: 'Error al registrar',
        text: errorMessage,
        icon: 'error',
        confirmButtonColor: '#004aad'
        });
    }
    };

    return (
    <div className="min-h-[90vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 animate-in fade-in duration-500">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
        <div className="text-center">
            <div className="flex justify-center mb-6">
            <div className="bg-secondary p-3 rounded-2xl shadow-lg shadow-secondary/20">
                <Package className="text-white w-10 h-10" />
            </div>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Crea tu cuenta
            </h2>
            <p className="mt-2 text-sm text-gray-500">
            Únete a Envios Global y gestiona tus envíos fácilmente
            </p>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-4">
            {/* Nombre */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Nombre Completo</label>
                <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-secondary transition-colors">
                    <User size={18} />
                </div>
                <input
                    type="text"
                    required
                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all"
                    placeholder="Juan Pérez"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                />
                </div>
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Correo Electrónico</label>
                <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-secondary transition-colors">
                    <Mail size={18} />
                </div>
                <input
                    type="email"
                    required
                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all"
                    placeholder="tu@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                </div>
            </div>

            {/* Teléfono y Dirección */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Teléfono</label>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-secondary transition-colors">
                    <Phone size={18} />
                    </div>
                    <input
                    type="text"
                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all"
                    placeholder="3001234567"
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    />
                </div>
                </div>
                <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Dirección</label>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-secondary transition-colors">
                    <MapPin size={18} />
                    </div>
                    <input
                    type="text"
                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all"
                    placeholder="Calle 123"
                    value={formData.direccion}
                    onChange={(e) => setFormData({...formData, direccion: e.target.value})}
                    />
                </div>
                </div>
            </div>

            {/* Password */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Contraseña</label>
                <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-secondary transition-colors">
                    <Lock size={18} />
                </div>
                <input
                    type="password"
                    required
                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                </div>
            </div>
            </div>

            <button
            type="submit"
            disabled={loading}
            className={`group relative w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent text-sm font-bold rounded-2xl text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all shadow-lg shadow-secondary/20 cursor-pointer mt-6 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
            {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
                <>
                Registrarse
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
            )}
            </button>
        </form>

        <div className="text-center pt-4">
            <p className="text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="font-bold text-primary hover:text-primary/80 transition-colors">
                Inicia sesión aquí
            </Link>
            </p>
        </div>
        </div>
    </div>
    );
};

export default Registro;
