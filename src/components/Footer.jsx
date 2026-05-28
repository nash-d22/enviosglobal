import { Package, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <Package className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-primary">ENVIOS<span className="text-secondary">GLOBAL</span></span>
            </div>
            <p className="text-gray-500 text-sm">
              La empresa líder en logística y transporte, brindando soluciones confiables para conectar personas y negocios.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-gray-900">Compañía</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-primary transition-colors">Quiénes somos</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Sostenibilidad</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Trabaja con nosotros</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Puntos de atención</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-primary transition-colors">Términos y condiciones</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Política de privacidad</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Contrato de transporte</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">PQRS</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-2"><Phone size={16} className="text-primary" /> +57 310 12345678</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-primary" /> contacto@enviosglobal.com</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Av. El Dorado #103-22, Bogotá</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs text-center">
            © 2026 EnviosGlobal. Todos los derechos reservados. Desarrollado con pasión por la logística.
          </p>
          <div className="flex gap-6">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all cursor-pointer">f</div>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all cursor-pointer">t</div>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all cursor-pointer">i</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
