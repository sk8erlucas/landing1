// services/clienteService.ts

// Definimos la interfaz para el tipo Solicitudes
export interface Solicitudes {
    nombre: string;
    apellido: string;
    telefono: string;
    curp: string;
    comprobanteDomicilio: string;
  }
  export interface login {
    phone: string;
    password: string;
  }
  
  // URL base para las peticiones a la API
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
  

  export const login = async (data: login): Promise<any> => {
    try {
      const response = await fetch(`${API_URL}/cliente/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error(`Error al crear cliente: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error al crear cliente:', error);
      throw error;
    }
  };
  
  export const dashboard = async (): Promise<any> => {
    try {
      const response = await fetch(`${API_URL}/cliente/dashboard`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${sessionStorage.getItem('token')}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`Error al crear cliente: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error al crear cliente:', error);
      throw error;
    }
  };

  export const prestamos = async (): Promise<any> => {
    try {
      const response = await fetch(`${API_URL}/cliente/prestamos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${sessionStorage.getItem('token')}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`Error al crear cliente: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error al crear cliente:', error);
      throw error;
    }
  };