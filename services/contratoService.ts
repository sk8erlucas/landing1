// services/clienteService.ts

// Definimos la interfaz para el tipo Solicitudes
export interface Solicitudes {
    nombre: string;
    apellido: string;
    telefono: string;
    curp: string;
    comprobanteDomicilio: string;
  }
  export interface firmar_Contrato {
    firma: string | null;
    curp: any;
    id_prestamo: string;
  }
  
  // URL base para las peticiones a la API
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
  

  export const getContrato = async (id: string): Promise<any> => {
    try {
      const response = await fetch(`${API_URL}/contrato/${id}`);
  
      if (!response.ok) {
        throw new Error(`Error al obtener contrato: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error en el servicio de contrato:', error);
      throw error;
    }
  };
  
  
  /**
   * Crea un nuevo cliente
   * @param cliente Datos del cliente a crear
   * @returns Promise con los datos del cliente creado
   */
  export const firmarContrato = async (data: firmar_Contrato): Promise<any> => {
    try {
      const response = await fetch(`${API_URL}/firmar_contrato`, {
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
  