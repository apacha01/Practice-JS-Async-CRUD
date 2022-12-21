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

const clientDetailes = (id) =>
	fetch(`http://localhost:3000/perfil/${id}`).then((response) => response.json());

const updateClient = (name, email, id) => {
	return fetch(`http://localhost:3000/perfil/${id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json", },
		body: JSON.stringify({ name, email }),
	})
	.then((response) => response)
	.catch((err) => console.log(err));
}

export const clientServices = {
	listClients,
	createClient,
	deleteClient,
	clientDetailes,
	updateClient
};