import type { Equipo } from '../types/Equipo';

export const equipos: Equipo[] = [
  { id: 'EQ-001', nombre: 'Notebook Dell Latitude', categoria: 'Computadora', ubicacion: 'Administración', estado: 'Operativo' },
  { id: 'EQ-002', nombre: 'Impresora HP LaserJet', categoria: 'Impresora', ubicacion: 'Contaduría', estado: 'En mantenimiento' },
  { id: 'EQ-003', nombre: 'Switch Cisco 24 puertos', categoria: 'Redes', ubicacion: 'Sala de servidores', estado: 'Operativo' },
  { id: 'EQ-004', nombre: 'Monitor Samsung 24 pulgadas', categoria: 'Monitor', ubicacion: 'Recepción', estado: 'Fuera de servicio' },
];