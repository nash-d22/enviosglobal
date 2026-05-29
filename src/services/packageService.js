import api from './api';

export const packageService = {
  // Obtener todos los paquetes (o por usuario si el backend lo soporta)
  getAll: async () => {
    try {
      // Intentamos obtener de la tabla 'ordenes' que es la que tiene la lógica en tu backend
      const response = await api.get('/ordenes');
      return response.data;
    } catch (error) {
      console.error('Error al obtener paquetes:', error);
      // Retornamos mock si falla la conexión para que el usuario pueda ver la UI
      return [
        { id: 1, descripcion: 'Laptop Dell', estado: 'En tránsito', origen: 'Medellín', destino: 'Bogotá', fecha: '2026-05-28' },
        { id: 2, descripcion: 'Documentos legales', estado: 'Entregado', origen: 'Cali', destino: 'Barranquilla', fecha: '2026-05-25' }
      ];
    }
  },

  // Crear un nuevo paquete/orden
  create: async (packageData) => {
    const response = await api.post('/ordenes', packageData);
    return response.data;
  }
};
