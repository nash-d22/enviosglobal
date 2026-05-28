import api from './api';

export const userService = {
  // Obtener todos los usuarios
  getAll: async () => {
    const response = await api.get('/usuarios');
    return response.data;
  },

  // Obtener usuario por ID
  getById: async (id) => {
    const response = await api.get(`/usuarios/${id}`);
    return response.data;
  },

  // Registrar un nuevo usuario
  register: async (userData) => {
    const response = await api.post('/usuarios', userData);
    return response.data;
  },

  // Actualizar usuario
  update: async (id, userData) => {
    const response = await api.put(`/usuarios/${id}`, userData);
    return response.data;
  },

  // Registrar un nuevo usuario
  register: async (userData) => {
    // Mapear campos para que coincidan con MUsuario del backend
    const backendData = {
      nombre: userData.nombre,
      gmail: userData.email,
      password: userData.password,
      telefono: userData.telefono || '',
      direccion: userData.direccion || '',
      rol: userData.rol || 'cliente',
      fecha_registro: new Date().getFullYear(), // El backend espera un Integer
      estado: 'activo'
    };
    const response = await api.post('/usuarios', backendData);
    return response.data;
  },

  // Simulación de Login (validando contra la lista de usuarios del backend)
  login: async (email, password) => {
    const users = await api.get('/usuarios');
    // En el backend el campo es 'gmail'
    const user = users.data.find(u => u.gmail === email && u.password === password);
    
    if (user) {
      return user;
    } else {
      throw new Error('Credenciales incorrectas');
    }
  }
};
