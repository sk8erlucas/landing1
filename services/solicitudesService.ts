// services/clienteService.ts

// Definimos la interfaz para el tipo Solicitudes
export interface Solicitudes {
    nombre: string;
    apellido: string;
    telefono: string;
    curp: string;
    comprobanteDomicilio: string;
  }
  
  // URL base para las peticiones a la API
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
  
  /**
   * Obtiene todos los clientes
   * @returns Promise con un array de Clientes
   */
  export const getSolicitudes = async (): Promise<Solicitudes[]> => {
    try {
      const response = await fetch(`${API_URL}/solicitudes`);
      
      if (!response.ok) {
        throw new Error(`Error al obtener clientes: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error en el servicio de clientes:', error);
      throw error;
    }
  };
  
  
  /**
   * Crea un nuevo cliente
   * @param cliente Datos del cliente a crear
   * @returns Promise con los datos del cliente creado
   */
  export const createSolicitud = async (data: Solicitudes): Promise<Solicitudes> => {
    try {
      const response = await fetch(`${API_URL}/solicitud_v2`, {
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
  