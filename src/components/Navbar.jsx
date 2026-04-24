import { Link } from 'react-router-dom';
import { Package, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Link to="/login" className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-primary/90 transition-all cursor-pointer">
              Mi Cuenta
            </Link>
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
          <Link 
            to="/login" 
            className="block w-full bg-primary text-white px-6 py-2 rounded-full font-bold text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Mi Cuenta
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
