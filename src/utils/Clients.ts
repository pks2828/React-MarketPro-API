// src/utils/clientUtils.ts
import { Client } from '../interfaces/Client'; // Asegúrate de ajustar la ruta según tu estructura de archivos

export const getClientNames = (clients: Client[]): string[] => {
  return clients.map(client => client.name);
};

export const getFemaleClients = (clients: Client[]): Client[] => {
  return clients.filter(client => client.gender === 'F');
};

export const findClientByEmail = (clients: Client[], email: string): Client | undefined => {
  return clients.find(client => client.email === email);
};

export const findClientIndexByDni = (clients: Client[], dni: number): number => {
  return clients.findIndex(client => client.dni === dni);
};

export const hasClientFromCity = (clients: Client[], city: string): boolean => {
  return clients.some(client => client.city === city);
};

export const allClientsFromCountry = (clients: Client[], country: string): boolean => {
  return clients.every(client => client.country === country);
};

export const getTotalDni = (clients: Client[]): number => {
  return clients.reduce((acc, client) => acc + client.dni, 0);
};

export const sortClientsByName = (clients: Client[]): Client[] => {
  return clients.sort((a, b) => a.name.localeCompare(b.name));
};

export const getFirstNClients = (clients: Client[], n: number): Client[] => {
  return clients.slice(0, n);
};

export const removeClientByIndex = (clients: Client[], index: number): Client[] => {
  const removedClient = clients.splice(index, 1);
  return removedClient;
};

export const includesClientEmail = (clients: Client[], email: string): boolean => {
  const clientEmails = clients.map(client => client.email);
  return clientEmails.includes(email);
};
