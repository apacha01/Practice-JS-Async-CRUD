const listClients = () =>
	fetch("http://localhost:3000/perfil").then((response) => response.json());

export const clientServices = {
  listClients
};