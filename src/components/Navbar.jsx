import { Link, useNavigate } from 'react-router-dom';
import { Package, Menu, X, LogOut, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = () => {
      const savedUser = localStorage.getItem('user_session');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      } else {
        setUser(null);
      }
    };

    checkUser();
    // Escuchar cambios en el storage para actualizar el estado entre pestañas/componentes
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: '¿Cerrar sesión?',
      text: "Tendrás que ingresar de nuevo para gestionar tus envíos.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#004aad',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('user_session');
        setUser(null);
        navigate('/');
        Swal.fire({
          title: 'Sesión cerrada',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Package className="text-white w-8 h-8" />
              </div>
              <span className="text-2xl font-bold text-primary tracking-tight">ENVIOS<span className="text-secondary">GLOBAL</span></span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary font-medium">Inicio</Link>
            <Link to="/servicios" className="text-gray-600 hover:text-primary font-medium">Servicios</Link>
            <Link to="/cotizar" className="text-gray-600 hover:text-primary font-medium">Cotizar</Link>
            <Link to="/rastreo" className="text-gray-600 hover:text-primary font-medium">Rastreo</Link>
            
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <User size={20} />
                  <span className="capitalize">{user.name}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="bg-red-50 text-red-600 p-2 rounded-full hover:bg-red-100 transition-all cursor-pointer"
                  title="Cerrar Sesión"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-primary/90 transition-all cursor-pointer">
                Mi Cuenta
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 cursor-pointer">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4">
          <Link to="/" className="block text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <Link to="/servicios" className="block text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>Servicios</Link>
          <Link to="/cotizar" className="block text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>Cotizar</Link>
          <Link to="/rastreo" className="block text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>Rastreo</Link>
          
          {user ? (
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3 text-primary font-bold mb-4">
                <User size={20} />
                <span className="capitalize">{user.name}</span>
              </div>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  handleLogout();
                }}
                className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl font-bold"
              >
                <LogOut size={20} />
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="block w-full bg-primary text-white px-6 py-2 rounded-full font-bold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Mi Cuenta
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
