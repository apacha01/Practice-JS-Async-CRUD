const listClients = () =>
	fetch("http://localhost:3000/perfil").then((response) => response.json());

const createClient = (name, email) => {
	return fetch("http://localhost:3000/perfil", {
		method: "POST",
		headers: { "Content-Type": "application/json", },
		body: JSON.stringify({ name, email, id: uuid.v4() }),
	});
};

const deleteClient = (id) => {
	return fetch(`http://localhost:3000/perfil/${id}`, { method: "DELETE", });
};

export const clientServices = {
	listClients,
	createClient,
	deleteClient,
};