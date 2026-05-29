import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Cotizar from './pages/Cotizar';
import Rastreo from './pages/Rastreo';
import Login from './pages/Login';
import Registro from './pages/Registro';
import MisPaquetes from './pages/MisPaquetes';

function App() {
  useEffect(() => {
    // Bloquear click derecho
    const handleContextMenu = (e) => {
      e.preventDefault();
      Swal.fire({
        title: 'Seguridad Activada',
        text: 'El clic derecho está deshabilitado por seguridad.',
        icon: 'warning',
        confirmButtonColor: '#004aad',
        timer: 2000,
        showConfirmButton: false
      });
    };

    // Bloquear atajos de teclado (F12, Ctrl+Shift+I, Ctrl+U, etc.)
    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || // Ctrl+Shift+I/J/C
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U (Ver código fuente)
      ) {
        e.preventDefault();
        Swal.fire({
          title: 'Acceso Restringido',
          text: 'Las herramientas de desarrollador están bloqueadas.',
          icon: 'error',
          confirmButtonColor: '#004aad',
          timer: 2000,
          showConfirmButton: false
        });
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/cotizar" element={<Cotizar />} />
            <Route path="/rastreo" element={<Rastreo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/mis-paquetes" element={<MisPaquetes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
